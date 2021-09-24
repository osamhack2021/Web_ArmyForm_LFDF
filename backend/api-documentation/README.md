# REST API Documentation

## HTTP requests
All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

* `POST` Create a resource
* `PUT` Update a resource
* `GET` Get a resource or list of resources
* `DELETE` Delete a resource

For PUT and POST requests the body of your request may include a JSON payload, and the URI being requested may include a query string specifying additional filters or commands, all of which are outlined in the following sections.

## HTTP Responses
Each response will include a `status` object and (if successful) a `result` (`result` will be an object for single-record queries and an array for list queries).  The `status` object contains an HTTP `status_code`, `text`, `description`, `error_code` (if an error occurred - see [Error Codes]). The `result` contains the result of a successful request.  For example, a request to the `/services/` resource might return this:

``` JSON
{
    "status": 
    {
        "text":           "OK",
        "status_code":    200,
        "description":    null,
    },
    "result": 
    [
      {
        "account": {
            "id": "2c89b706-47f2-471d-8e1b-4a180b448838",
            "username": "admin",
            "email": "admin@osam.kr"
        }
      }
    ]
  }
```

## HTTP Response Codes
Each response will be returned with one of the following HTTP status codes:

* `200` `OK` The request was successful
* `400` `Bad Request` There was a problem with the request (security, malformed, data validation, etc.)
* `401` `Unauthorized` The supplied API credentials are invalid
* `403` `Forbidden` The credentials provided do not have permission to access the requested resource
* `404` `Not found` An attempt was made to access a resource that does not exist in the API
* `405` `Method not allowed` The resource being accessed doesn't support the method specified (GET, POST, etc.).
* `500` `Server Error` An error on the server occurred

## Resources

### [Accounts][]
- **[<code>POST</code> Register](/accounts/POST_register.md)**
- **[<code>POST</code> Login](/accounts/POST_login.md)**
- **[<code>GET</code> Account](/accounts/GET_account.md)**

[Accounts]: /accounts/