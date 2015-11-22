Accessor_Singleton
==================

A instance pool for node.js Accessor module

Install
=====================

1. npm install Accessor_Singleton

Usage
====================

1. Replace original module require statement from

	var Accessor = require("Accessor");

to
	
	var Accessor = require("Accessor_Singleton")

2. Then, everytime you call the Acessor, it will check if there had been an instance (avoid connnect to server everytime)
