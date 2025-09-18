# HTTP proxy sample

Known as ``HTTP Forward`` proxy

### With auth
```go filename="main.go"
package main

import (
	"io"
	"log"
	"net"
	"time"

	"github.com/Z3NTL3/proxifier"
)

func main() {
	httpClient := proxifier.HTTPClient{
		Auth: proxifier.Auth{
			Username: "hello",
			Password: "world",
		},
	}

	conn, err := httpClient.PROXY("https://httpbin.org/ip", proxifier.Context{
		Resolver: net.ParseIP("85.209.2.126"),
		Port:     4444,
	}, time.Second*10)
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	resp, err := io.ReadAll(conn)
	if err != nil {
		log.Fatal(err)

	}

	log.Println(string(resp))
}
/*
RESULT:

~\Documents\sockstests via 🐹 v1.22.2 took 3s
❯ go run .
2024/05/17 18:35:41 HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 17 May 2024 16:35:41 GMT
Content-Type: application/json
Content-Length: 31
Connection: close
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "origin": "85.209.2.126"
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

	"github.com/Z3NTL3/proxifier"
)

func main() {
	httpClient := proxifier.HTTPClient{}

	conn, err := httpClient.PROXY("https://httpbin.org/ip", proxifier.Context{
		Resolver: net.ParseIP("85.209.2.126"),
		Port:     4444,
	}, time.Second*10)
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	resp, err := io.ReadAll(conn)
	if err != nil {
		log.Fatal(err)

	}

	log.Println(string(resp))
}
/*
RESULT:

~\Documents\sockstests via 🐹 v1.22.2 took 3s
❯ go run .
2024/05/17 18:35:41 HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 17 May 2024 16:35:41 GMT
Content-Type: application/json
Content-Length: 31
Connection: close
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "origin": "85.209.2.126"
}
*/
```