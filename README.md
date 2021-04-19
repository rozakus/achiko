# achiko

**HOW TO RUN**
```
npm start

server will run at http://localhost:3000/
```

| Method | Route  | Description |
| ------ | ------ | ----------- |
| POST   | /login | Login       |

---
### POST /login
---
> Login user customer

_Request Headers_
```
not needed
```

_Request Body_
```
{
    "email": "abdulrozak.mail@gmail.com",
    "password": "test123"
}
```

_Response( 200 )_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJkdWwgUm96YWsiLCJlbWFpbCI6ImFiZHVscm96YWsubWFpbEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vcm96YWt1cyIsImlhdCI6MTYxODg1NDU2OH0.hmA1R6d6-3u1FBgSEwuZps8z2rFIyB-SDPemLDkvV5Y"
}
```

_Response( 400 - Bad Request )_
```
{
    "message": "email / password is invalid"
}
```


_Response ( 500 - Internal Server Error )_
```
{
    "Internal server error"
}
```