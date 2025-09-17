# API Reference

The API reference is automatically documented by GoDoc and hosted by Go's published package mirror.

[API Reference](https://pkg.go.dev/github.com/Z3NTL3/proxifier)

### Quick tip

For ``SOCKS4/SOCKS5`` you would use
```go
func New[T SocksClient](client T, target, proxy Context) (T, error)
```
- [Look in reference](https://pkg.go.dev/github.com/Z3NTL3/proxifier#New)

A client can be ```Socks4Client``` or ``Socks5Client``

As defined by:
```go
type SocksClient interface {
	*Socks4Client | *Socks5Client
	// contains filtered or unexported methods
}
```

In contrast for HTTP(s) you would use
```go
func (c *HTTPClient) PROXY(url string, proxy Context, timeout time.Duration) (conn Conn, err error)
```

That's all you need to know to not get lost in the API reference. If you've got any question you can open an issue, but remember to label it with a question tag.