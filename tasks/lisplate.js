/*
 * grunt-lisplate
 * https://github.com/lisplate/grunt-lisplate
 *
 * Copyright (c) 2016 Matthew Hall
 * Licensed under the MIT license.
 */

'use strict';

var Lisplate = require('lisplate');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('lisplate', 'Grunt task to run the LisplateJS compiler', function() {

    // Extend with the default options if none are specified
    var options = this.options({
      basepath: '',
      ext: 'ltml',
      silent: false
    });

    this.files.forEach(function doFiles(file) {
      var basepath = options.basepath;

      var srcFiles = grunt.file.expand(file.src);
      var compiledOutput = [];

      srcFiles.forEach(function doSources(srcFile) {
        var baselength = basepath.length;
        if (baselength && basepath[baselength-1] !== '/') {
          baselength += 1;
        }

        var templateName = srcFile.substring(
          baselength,
          (srcFile.length - options.ext.length - 1)
        );

        var sourceCode = grunt.file.read(srcFile);
        var compiled = Lisplate.Compiler.compileModule(templateName, sourceCode);

        compiledOutput.push(compiled);
      });

      if (compiledOutput.length) {
        grunt.file.write(file.dest, compiledOutput.join('\n'));

        if (!options.silent) {
          grunt.verbose.or.writeln('[grunt-lisplate] Compiled to ' + file.dest);
        }
      }
    });

  });

};
