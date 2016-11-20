'use strict';

var url = require('url');


var Students = require('./StudentsService');
var controller = require('../model/student/student-controller');


module.exports.studentsLoginPOST = function studentsLoginPOST(req, res, next) {
  //Students.studentsLoginPOST(req.swagger.params, res, next);
  controller.login(req, res, next);
};

module.exports.studentsRegistePOST = function studentsRegistePOST(req, res, next) {
  //Students.studentsRegistePOST(req, res, next);
  controller.register(req, res, next);
};

module.exports.studentsIdDELETE = function studentsStudentIdDELETE(req, res, next) {
  //Students.studentsStudentIdDELETE(req.swagger.params, res, next);
  controller.remove(req, res, next);
};

module.exports.studentsIdGET = function studentsStudentIdGET(req, res, next) {
  //Students.studentsStudentIdGET(req.swagger.params, res, next);
  controller.findById(req, res, next);
};

module.exports.studentsIdPUT = function studentsStudentIdPUT(req, res, next) {
  //Students.studentsStudentIdPUT(req.swagger.params, res, next);
  controller.update(req, res, next);
};
