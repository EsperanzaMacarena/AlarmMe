# alarm-me-api v0.0.0



- [Alarm](#alarm)
	- [Create alarm](#create-alarm)
	- [Delete alarm](#delete-alarm)
	- [Retrieve alarm](#retrieve-alarm)
	- [Retrieve alarms](#retrieve-alarms)
	- [Update alarm](#update-alarm)
	
- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Type](#type)
	- [Create type](#create-type)
	- [Delete type](#delete-type)
	- [Retrieve type](#retrieve-type)
	- [Retrieve types](#retrieve-types)
	- [Update type](#update-type)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user&#39;s picture](#delete-user&#39;s-picture)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve the user&#39;s picture](#retrieve-the-user&#39;s-picture)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update of user&#39;s picture](#update-of-user&#39;s-picture)
	- [Update user (ONLY NAME)](#update-user-(only-name))
	


# Alarm

## Create alarm



	POST /alarm


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| type			| 			|  <p>Alarm's type.</p>							|
| periocity			| 			|  <p>Alarm's periocity.</p>							|
| done			| 			|  <p>Alarm's done.</p>							|
| activated			| 			|  <p>Alarm's activated.</p>							|

## Delete alarm



	DELETE /alarm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve alarm



	GET /alarm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve alarms



	GET /alarm


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update alarm



	PUT /alarm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| type			| 			|  <p>Alarm's type.</p>							|
| periocity			| 			|  <p>Alarm's periocity.</p>							|
| done			| 			|  <p>Alarm's done.</p>							|
| activated			| 			|  <p>Alarm's activated.</p>							|

# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Type

## Create type



	POST /type


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| description			| 			|  <p>Type's description.</p>							|
| typePlaces			| 			|  <p>Type's typePlaces.</p>							|
| ubication			| 			|  <p>Type's ubication.</p>							|

## Delete type



	DELETE /type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve type



	GET /type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve types



	GET /type


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update type



	PUT /type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| description			| 			|  <p>Type's description.</p>							|
| typePlaces			| 			|  <p>Type's typePlaces.</p>							|
| ubication			| 			|  <p>Type's ubication.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| avatar			| file			| **optional** <p>User's picture.</p>							|

## Delete user&#39;s picture



	DELETE /users/:id/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Token  User access_token.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve the user&#39;s picture



	GET /users/img/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update of user&#39;s picture



	PUT /users/:id/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| avatar			| String			| **optional** <p>User's picture.</p>							|

## Update user (ONLY NAME)



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|


