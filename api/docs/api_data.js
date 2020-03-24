define({ "api": [
  {
    "type": "post",
    "url": "api/alarm",
    "title": "Create alarm",
    "name": "Create_Alarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>Alarm's type.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "done",
            "description": "<p>Alarm's done.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "activated",
            "description": "<p>Alarm's activated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alarm",
            "description": "<p>Alarm's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Alarm not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "delete",
    "url": "api/alarm/:id",
    "title": "Delete alarm",
    "name": "DeleteAlarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Alarm not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "get",
    "url": "api/alarm",
    "title": "Retrieve alarms",
    "name": "RetrieveAlarms",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "List",
            "description": "<p>of alarms.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "get",
    "url": "api/alarm/:id",
    "title": "Retrieve alarm",
    "name": "Retrieve_Alarm_by_id",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alarm",
            "description": "<p>Alarm's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Alarm not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "get",
    "url": "api/alarm/myalarms",
    "title": "Retrieve alarms by creator id",
    "name": "Retrieve_alarms_by_creator",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alarm",
            "description": "<p>Alarm's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Alarm not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "put",
    "url": "api/alarm/:id",
    "title": "Update alarm",
    "name": "UpdateAlarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>Alarm's type.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "done",
            "description": "<p>Alarm's done.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "activated",
            "description": "<p>Alarm's activated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "alarm",
            "description": "<p>Alarm's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Alarm not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/alarm.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "post",
    "url": "/type",
    "title": "Create type",
    "name": "CreateType",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Type's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "typePlaces",
            "description": "<p>Type's typePlaces.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "type",
            "description": "<p>Type's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Type not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "delete",
    "url": "/api/type/:id",
    "title": "Delete type",
    "name": "DeleteType",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Type not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/api/type/:id",
    "title": "Retrieve type",
    "name": "RetrieveType",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "type",
            "description": "<p>Type's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Type not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/api/type",
    "title": "Retrieve types",
    "name": "RetrieveTypes",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "List",
            "description": "<p>of types.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin can access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "get",
    "url": "/api/places",
    "title": "Retrieve types of Places (enum)",
    "name": "RetrieveTypesPlaces",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "List",
            "description": "<p>of types.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin can access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "put",
    "url": "/api/type/:id",
    "title": "Update type",
    "name": "UpdateType",
    "group": "Type",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Type's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "typePlaces",
            "description": "<p>Type's typePlaces.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "type",
            "description": "<p>Type's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Type not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/type.js",
    "groupTitle": "Type"
  },
  {
    "type": "delete",
    "url": "/api/user/img",
    "title": "Delete of current user's picture",
    "name": "DeletePictureUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Token  User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "200",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/me",
    "title": "Retrieve current user",
    "name": "RetrieveCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/img",
    "title": "Retrieve the user's picture",
    "name": "RetrievePictureUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/:id",
    "title": "Set field enabled",
    "name": "UpdateFieldEnabled",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Admin access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "enabled",
            "description": "<p>True if user is enabled, false if user is disabled.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/password",
    "title": "Update current user's password",
    "name": "UpdatePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/img",
    "title": "Update of current user's picture",
    "name": "UpdatePictureUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "Update of current user's name",
    "name": "UpdateUserName",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fullname",
            "description": "<p>User's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "name": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User to be passed to other requests.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Email or password or both are wrong.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User account is disabled.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register User",
    "name": "RegisterUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fullname",
            "description": "<p>User's fullname.</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "avatar",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Retrieve users",
    "name": "RetrieveUsers",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404",
            "description": "<p>There is no users to show.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
