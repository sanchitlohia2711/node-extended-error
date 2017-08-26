# Extended Error
## Description:
 - Allows you to create of a instance of Error with additional properties specfied by you through a error map supplied by user(See example of a sample error map below).
 - Allows variables subsitution in the additional properties
 - It extends from Error
    ```js
    util.inherits(extended-error, Error);
    ```

## Installation

```bash
$ npm install extended-error
```

# Usage:
## Step 1: Require extended-error
  extended-error = require('extended-error')

## Step 2: Create a error map with additional properties for a error
  ```js
   var sample_error_map =
       { 
          ERROR_101 : {
            message       : "Error has occured",
            http_code     : 400,
            user_message  : "Please try again later" 
          },
          
          DB_101 : {
            msg          : "Error in DB operation. Error is <<err>>",
            master_code  : 400,
            user_message : "<<err2>>"
          }
       }
  ```     

## Step 3: Add the error_map
   ```js
    extended-error.set_error_map(sameple_error_map)
   ```

## Step 4: Create a new instance of error. Additional properties for the error instance will be set automatically
  1. Without variable susitution
        ```js
        var error = new extended-error("ERROR_101")
        Output: 
            error.message      => "Error has occured"
            error.http_code    => 400
            error.errorCode    => "ERROR_101"
            error.user_message => "Please try again later"
        ```

  2. With variable subsitution
      Allows you to create a new instance of error and allows you to customize error message.
        ```js
        var error = new extended-error("DB_101", {err : "Network Error", err2 : "DB error"})
        Output:
            error.msg          => "Error in DB operation. Error is Network Error"
            error.master_code  => "400"
            error.user_message => "DB error"
            error.errorCode    => "DB_101"
        ```
