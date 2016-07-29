/*
 * @package jsDAV
 * @subpackage DAV
 * @copyright Copyright(c) 2011 Ajax.org B.V. <info AT ajax.org>
 * @author Mike de Boer <info AT mikedeboer DOT nl>
 * @license http://github.com/mikedeboer/jsDAV/blob/master/LICENSE MIT License
 */
"use strict";

var jsDAV = require("../node_modules/jsDAV/lib/jsdav");
jsDAV.debugMode = true;
var jsDAV_Locks_Backend_FS = require("../node_modules/jsDAV/lib/DAV/plugins/locks/fs");

jsDAV.createServer({
  node: __dirname + "./../node_modules/jsDAV/test/assets",
  locksBackend: jsDAV_Locks_Backend_FS.new(__dirname + "./../node_modules/jsDAV/test/assets")
}, 8000);