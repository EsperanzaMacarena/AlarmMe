# alarmme-api v1.0.0



- [User](#user)
	- [Delete of current user&#39;s picture](#delete-of-current-user&#39;s-picture)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve the user&#39;s picture](#retrieve-the-user&#39;s-picture)
	- [Set field enabled](#set-field-enabled)
	- [Update current user&#39;s password](#update-current-user&#39;s-password)
	- [Update of current user&#39;s picture](#update-of-current-user&#39;s-picture)
	- [Update of current user&#39;s name](#update-of-current-user&#39;s-name)
	
- [Users](#users)
	- [Login](#login)
	- [Register User](#register-user)
	- [Retrieve users](#retrieve-users)
	


# User

## Delete of current user&#39;s picture



	DELETE /user/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Token  User access_token.</p>							|

## Retrieve current user



	GET /api/user/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve the user&#39;s picture



	GET /api/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Set field enabled



	PUT /user/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| enabled			| String			|  <p>True if user is enabled, false if user is disabled.</p>							|

## Update current user&#39;s password



	PUT /user/password


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| password			| String			|  <p>User's new password.</p>							|

## Update of current user&#39;s picture



	PUT /user/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| avatar			| String			| **optional** <p>User's picture.</p>							|

## Update of current user&#39;s name



	PUT /user


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| fullname			| String			| **optional** <p>User's name.</p>							|

# Users

## Login



	POST /api/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|

## Register User



	POST /api/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| fullname			| String			| **optional** <p>User's fullname.</p>							|
| avatar			| file			| **optional** <p>User's picture.</p>							|

## Retrieve users



	GET /api/users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|


