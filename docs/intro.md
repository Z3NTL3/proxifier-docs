---
sidebar_position: 1
---

# Intro

Proxifier is an ergonomic proxy client library for Go programs, that can operate and wire TLS to any socket connection as it is compatible with Go's standard library.

:::tip

Did you know that Proxifier was invented for the side project of [z3ntl3](https://github.com/z3ntl3), the author. He wanted to make a reliable proxy scanner that could assess proxies very quickly and with no overhead, therefore he thought of creating his own proxy client library. Thus began his journey, reading the implementation details and drafts, and implementing it in the Go programming language.

:::

## Before starting

Let's talk first about what Proxifier can do and what it cannot or isn't meant to.

- **Proxifier**

  #### Supports
    - ``SOCKS4/5``, ``HTTP/HTTPS`` - **with optional TLS**
    - Authentication methods: ``Username/Password``, ``NoAuth``, it cannot do other auth methods.
      :::info
      
      We plan on modularizing Proxifier with a plugin ecosystem, so other authentication methods can be introduced more easily.
      :::
    - Domain translation into machine IP
      :::info

      Be aware we did not directly implement ``SOCKS/4a`` however, we made some function available in the API for domain translation.
      Just translate the domain before using it with ``SOCKS4``.
      
      - **Function** 
        > ``Domain translation into machine IP`` [LookupHost](#)
      :::

This library is only portable to and be used by Go programs, bindings to any other languages do not exist currently. However we plan on porting to Rust.
