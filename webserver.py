def app(environ, start_response):
    data= b"webserver w/ guinicorn and python\n"
    status = "200 OK"
    response_headers = [
        ("Content-Type", "text/plain"),
        ("Content-Length", str(len(data)))]
    start_response(status, response_headers)
    return iter([data])
