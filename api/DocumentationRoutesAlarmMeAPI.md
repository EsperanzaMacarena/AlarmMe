# AlarmMe API v1.0

Documentation about routes of AlarmMe API

- [Users](#users)
	- [Login](#login)
	- [Register User](#register-user)
	- [Retrieve users](#retrieve-users)
	


# Users

## Login



	POST /login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|

## Register User



	POST /register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| fullname			| String			| **optional** <p>User's fullname.</p>							|
| avatar			| file			| **optional** <p>User's picture.</p>							|

## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|


