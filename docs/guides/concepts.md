---
sidebar_position: 2
---
# Concepts

To understand this library to it's full extent, some simple concepts have to be understood.


#### Context
```go
type Context struct {
	Resolver interface{}
	Port     int
}
```
A context is a struct that shapes information about a machine. For example, to provide Proxifier with the knowledge about what proxy server to tunnel through, and the definition of a target.


**Here's a sample**

```go title="main.go" {17-20} showLineNumbers 
import (
	"io"
	"log"
	"net"
	"time"

	"crypto/tls"

	"github.com/Z3NTL3/proxifier"
)

func main() {
	httpClient := proxifier.HTTPClient{
		TLS: true,
	}

	conn, err := httpClient.PROXY("https://httpbin.org/ip", proxifier.Context{
		Resolver: net.ParseIP("117.74.65.207"),
		Port: 54417,
	}, time.Second * 10); if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	tlsConn := tls.Client(conn, &tls.Config{
		InsecureSkipVerify: true,
	})

	if _, err = tlsConn.Write([]byte("GET /ip HTTP/1.1\r\nHost: httpbin.org\r\nConnection: close\r\n\r\n")); err != nil {
		log.Fatal(err)
	}
	
	resp, err := io.ReadAll(tlsConn)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(string(resp))
}
```

### Wiring TLS  
> To wire with TLS this line is essential
```diff
+ tlsConn := tls.Client(conn, &tls.Config{
+    InsecureSkipVerify: true,
+ })
```

For HTTP(s) it is also essential to set ``TLS`` field to true of a ``HttpClient``, you can completely ignore this detail if you're using a ``SocksClient``.

```diff
httpClient := proxifier.HTTPClient{
+    TLS: true,
}
```

### Authentication
[proxifier.Auth](https://pkg.go.dev/github.com/Z3NTL3/proxifier#Auth)
```rust
type Auth struct {
	Username string // Username
	Password string // Password
}
```

This is the struct you would pass on to ``HTTPClient``'s ``Auth`` field if authentication is preferred, leave it empty if you do not want to authenticate.


### Socks
For ``SOCKS4`` and ``SOCKS5`` a different struct is introduced.

```go
func New[T SocksClient](client T, target, proxy Context) (T, error)
```

```go
type SocksClient interface {
	*Socks4Client | *Socks5Client
	// contains filtered or unexported methods
}
```

Here's a sample for a SOCKS5 TLS connection

```go filename="main.go"
package main

import (
	"context"
	"crypto/tls"
	"io"
	"log"
	"net"
	"time"

	"github.com/Z3NTL3/proxifier"
)

func main() {
	addr, err := proxifier.LookupHost("httpbin.org")
	if err != nil {
		log.Fatal(err)
	}

	target := proxifier.Context{
		Resolver: net.ParseIP(addr[0]),
		Port:     443,
	}

	proxy := proxifier.Context{
		Resolver: net.ParseIP("38.154.227.167"),
		Port:     5868,
	}

	client, err := proxifier.New(&proxifier.Socks5Client{},target, proxy)
	if err != nil {
		log.Fatal(err)
	}
	
	{
		client.Auth.Username = "lqafmzlx"
		client.Auth.Password = "i9mzzjv4qdz2"
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()
	
	if err := proxifier.Connect(client, ctx); err != nil {
		log.Fatal(err)
	}

	defer client.Close()
	client.SetLinger(0)

	tlsConn := tls.Client(client, &tls.Config{
		InsecureSkipVerify: true,
	})

	if _, err := tlsConn.Write([]byte("GET /ip HTTP/1.1\r\nHost: httpbin.org\r\nConnection: close\r\n\r\n")); err != nil {
		log.Fatal(err)
	}

	data, err := io.ReadAll(tlsConn)
	if err != nil {
		log.Fatal(err)
	}

	log.Println(string(data))
}
/*
RESULT:

~\Documents\sockstests via 🐹 v1.22.2 
❯ go run .
2024/05/17 18:37:49 HTTP/1.1 200 OK
Date: Fri, 17 May 2024 16:37:49 GMT
Content-Type: application/json
Content-Length: 33
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "origin": "38.154.227.167"
}
*/
```