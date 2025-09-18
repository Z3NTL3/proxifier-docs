---
sidebar_position: 1
---

# Installation

Simply run the following in one of your Go projects where you want to use Proxifier.

```
go get github.com/Z3NTL3/proxifier
```

And import it with

```go
import "github.com/Z3NTL3/proxifier"
```


### Quick example

```go
package main

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
		Auth: proxifier.Auth{
			Username: "hello",
			Password: "world",
		},
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
/*
RESULT:

~\Documents\sockstests via 🐹 v1.22.2 took 7s
❯ go run .
2024/05/17 18:49:27 HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Server: CherryPy/3.2.5
Www-Authenticate: Basic realm="Broadband Router"
Date: Fri, 17 May 2024 16:49:28 GMT
Content-Length: 32
Connection: close

{
  "origin": "117.74.65.207"
}
*/
```