# Register

    GET /utils/military-units
    
Get a list of militray units.

## Parameters
### URI Parameters
Field | Data Type | Required | Description
--- | --- | --- | ---
type | string | Y | e.g. mnd, army, af, navy
unit | string* | N | 

## Example
### Request

    GET /utils/military-units?type=army&unit=육군본부&unit=제2경비단

### Response
``` json
[
    {"name": "본부대"},
    {"name": "1경비중대"},
    {"name": "2경비중대"},
    {"name": "3경비중대"},
    {"name": "4경비중대"},
    {"name": "의무근무대"},
    {"name": "화생방지원대"}
]
```