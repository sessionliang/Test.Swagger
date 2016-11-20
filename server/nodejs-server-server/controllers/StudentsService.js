'use strict';

exports.studentsLoginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userName (String)
  * password (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "userName" : "aeiou",
  "token" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.studentsRegistePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userName (String)
  * password (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "userName" : "aeiou",
  "token" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.studentsStudentIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * studentId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.studentsStudentIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * studentId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "userStatus" : 123,
  "phone" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789,
  "userName" : "aeiou",
  "email" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.studentsStudentIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * studentId (Long)
  * body (Student)
  **/
  // no response value expected for this operation
  res.end();
}

