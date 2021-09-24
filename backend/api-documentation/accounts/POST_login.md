# Register

    POST /accounts
    
Creates a new [Account] and returns the newly-created object.

## Parameters
### URI Parameters
None
### JSON Body Parameters
Field | Data Type | Required | Description
--- | --- | --- | ---
username | string | Y | 
password | string | Y | 
name | string | Y | 
rank | string | Y | 

## Example
### Request

    POST https://api.zingle.me/accounts

#### Request Body 
```json
{
    "username": "ironore15",
    "password": "q1w2e3r4",
    "name": "민승기",
    "rank": "일병"
}
```

### Response
``` json
{
    "status": {
        "text": "OK",
        "status_code": 200,
        "description": null
    },
    "result": {
      "id": "d9f91fdb-bbdb-442d-bbac-99fb76263653",
    }
}
```

[Account]: README.md