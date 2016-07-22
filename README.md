# Edealer Pipe

### Installation

```bash
npm install
```

### Usage

```JavaScript
var Pipe   = require('edealer-pipe');
var pipe   = new Pipe();
var result = pipe
    .pipe(function(callback){
        callback(null, "Hello");
    })
    .pipe(function(parameter, callback){
        callback(null, parameter + " World");
    })
    .execute(function(error, result){
        if (error) {
            console.log(error);
        }
    });

// result == "Hello World";

```
