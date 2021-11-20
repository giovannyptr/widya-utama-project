# **Widya Utama Technical Test*

This is an application for Widya Utama Technical Test. This app has :

-   RESTful endpoint for asset's CRUD operation
-   JSON formatted response

&nbsp;

## **RESTful endpoints**


### **POST /login**

> Authenticate user
&nbsp;
_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
{
  "email" : <user email>,
  "password" : <user password>
}
```

&nbsp;

_Response (200 - Login Success)_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : 'Incorrect e-mail/password'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---


### **POST /register**

> Create new user
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```


&nbsp;

_Request Body_

```
{
  "email" : <email for new account>,
  "password" : <password for new account>,
  "name" : <name for new account>,
  "gender" : <gender for new account>
}
```

&nbsp;

_Response (201 - New User Created)_

```
{
  "id" : <new user id>,
  "email" : <new user email>
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "error" : <errors>
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  error : 'Internal Server Error'
}
```

&nbsp;

---


### **GET /user-credentials**

> Get user credentials
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
    {
        "id": 1,
        "name": "Giovanny",
        "email": "giovanny@mail.com",
        "password": "$2b$08$p9BiWsOOY5D05p.A9mxm1uc.avfrsAGEFrOtryIfFqZms93SSRzyK",
        "gender": "female",
        "createdAt": "2021-11-18T11:48:39.696Z",
        "updatedAt": "2021-11-18T11:48:39.696Z"
    },
    {
        "id": 2,
        "name": "phito",
        "email": "phitojelek@mail.com",
        "password": "$2b$08$62x8UMtvzs/uJ/jvUXMl5uOedOxCQaLwUOjLGA7bJ1d9P6IdKhL62",
        "gender": "male",
        "createdAt": "2021-11-18T11:49:13.593Z",
        "updatedAt": "2021-11-18T11:49:13.593Z"
    },
]

```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /products**

> Add Product
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
{
  "name" : <New product name>,
  "description" : <New product description>,
}
```

&nbsp;

_Response (200 - Success)_

```
{
	"id": <New product id>,
	"name": "<New product name>",
	"description": "<New product description>",
	"updatedAt": "<New product updatedAt>",
	"createdAt": "<New product createdAt>"
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "error" : <errors>
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /products**

> Get all product
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
	{
		"id": <product id>,
		"name": "<product name>",
		"description": "<product description>",
		"createdAt": "<product createdAt>",
		"updatedAt": "<product updatedAt>"
	}, etc
]
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /products/:productId**

> Get product details
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
{
  "id": <posts id>,
  "name": "<posts name>",
  "description": "<posts description>",
  "createdAt": "<posts createdAt>",
  "updatedAt": "<posts updatedAt>"
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (404 - posts not found)_

```
{
  "error" : "posts not found"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **PUT /products/:productId**

> Update posts
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
{
  "name" : <New product name>,
  "description" : <New product description>,
}
```

&nbsp;

_Response (200 - Success)_

```
{
	"id": <New product id>,
	"name": "<New product name>",
	"description": "<New product description>",
	"updatedAt": "<New product updatedAt>",
	"createdAt": "<New product createdAt>"
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "error" : <errors>
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "error" : "Don't have permission to access"
}
```

&nbsp;

_Response (404 - posts not found)_

```
{
  "error" : "posts not found"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **DELETE /products/:productId**

> Delete product
&nbsp;
_Request Header_

```
{
  "access_token" : <access_token>
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
{
	{
    "message": "Product with id <ProductId> has been deleted!"
}
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "error" : "Authentication failed"
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "error" : "Don't have permission to access"
}
```

&nbsp;

_Response (404 - posts not found)_

```
{
  "error" : "posts not found"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---
