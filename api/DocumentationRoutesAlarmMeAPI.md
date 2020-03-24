# alarmme-api v1.0.0



- [Alarm](#alarm)
	- [Create alarm](#create-alarm)
	- [Delete alarm](#delete-alarm)
	- [Retrieve alarms](#retrieve-alarms)
	- [Retrieve alarm](#retrieve-alarm)
	- [Retrieve alarms by creator id](#retrieve-alarms-by-creator-id)
	- [Update alarm](#update-alarm)
	
- [Type](#type)
	- [Create type](#create-type)
	- [Delete type](#delete-type)
	- [Retrieve type](#retrieve-type)
	- [Retrieve types](#retrieve-types)
	- [Retrieve types of Places (enum)](#retrieve-types-of-places-(enum))
	- [Update type](#update-type)
	
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
	


# Alarm

## Create alarm



	POST api/alarm


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| 			|  <p>Alarm's type.</p>							|
| done			| 			|  <p>Alarm's done.</p>							|
| activated			| 			|  <p>Alarm's activated.</p>							|

## Delete alarm



	DELETE api/alarm/:id


## Retrieve alarms



	GET api/alarm


## Retrieve alarm



	GET api/alarm/:id


## Retrieve alarms by creator id



	GET api/alarm/myalarms


## Update alarm



	PUT api/alarm/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| 			|  <p>Alarm's type.</p>							|
| done			| 			|  <p>Alarm's done.</p>							|
| activated			| 			|  <p>Alarm's activated.</p>							|

# Type

## Create type



	POST /type


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| description			| 			|  <p>Type's description.</p>							|
| typePlaces			| 			|  <p>Type's typePlaces.</p>							|

## Delete type



	DELETE /api/type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve type



	GET /api/type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve types



	GET /api/type


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve types of Places (enum)



	GET /api/places


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Update type



	PUT /api/type/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| description			| 			|  <p>Type's description.</p>							|
| typePlaces			| 			|  <p>Type's typePlaces.</p>							|

# User

## Delete of current user&#39;s picture



	DELETE /api/user/img


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



	PUT /api/user/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Admin access_token.</p>							|
| enabled			| String			|  <p>True if user is enabled, false if user is disabled.</p>							|

## Update current user&#39;s password



	PUT /api/user/password


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| password			| String			|  <p>User's new password.</p>							|

## Update of current user&#39;s picture



	PUT /api/user/img


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| avatar			| String			| **optional** <p>User's picture.</p>							|

## Update of current user&#39;s name



	PUT /api/user


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


