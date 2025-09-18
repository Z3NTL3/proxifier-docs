# SOCKS5 proxy sample

If you are unfamiliar with the concepts please head to [Concepts](/docs/guides/concepts.md) first.

### With auth
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

### Without auth

```go filename="main.go"
package main

import (
	"io"
	"log"
	"net"
	"time"

	"context"
	"crypto/tls"

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
2024/05/17 18:44:03 HTTP/1.1 200 OK
Date: Fri, 17 May 2024 16:44:03 GMT
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