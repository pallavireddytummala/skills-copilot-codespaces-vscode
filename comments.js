//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;
var db = 'mongodb://localhost/example';
var Comment = require('./app/models/comment');
var Member = require('./app/models/member');
var Skill = require('./app/models/skill');
var SkillCategory = require('./app/models/skillCategory');