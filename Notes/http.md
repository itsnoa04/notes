The HyperText Transfer Protocol (HTTP) is a popular network protocol that is built on top of [[TCP]]. HTTP requests are made by clients, and servers respond with a response.
Requests are typically structured as follows:

```
host: string (eg: google.com)
port: integer (eg: 443)
method: string (GET / PUT / POST / DELETE / OPTIONS / PATCH )
headers: pair list (eg: "Content-Type" => "application/json")
body: opaque sequence of bytes

```

Responces are typically structures as:
```
status code: integer (200,400,404...)
headers: pair list (eg: "Content-Type" => "application/json")
body: opaque sequence of bytes
```