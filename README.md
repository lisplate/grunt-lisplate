# grunt-lisplate

> Grunt task to run the LisplateJS compiler

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lisplate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lisplate');
```

## The "lisplate" task

### Overview
In your project's Gruntfile, add a section named `lisplate` to the data object passed into `grunt.initConfig()`.

Single output file from multiple templates:
```js
grunt.initConfig({
  lisplate: {
    options: {
      basepath: 'views',
      ext: 'ltml',
      silent: false
    },
    your_target: {
      files: {
        'dest/mergedFile.js': ['views/**/*.ltml'],
      },
    },
  },
});
```

Separate files for each template:
```js
grunt.initConfig({
  lisplate: {
    options: {
      basepath: 'views',
      ext: 'ltml',
      silent: false
    },
    your_target: {
      files: [
        {
          expand: true,
          cwd: 'views/',
          src: '**/*.ltml',
          dest: 'dest',
          ext: '.js'
        }
      ],
    },
  },
});
```

### Options

#### options.basepath
Type: `String`
Default value: ``

The basepath for templates which is stripped to generate the templateName

#### options.ext
Type: `String`
Default value: `ltml`

The extension for the templates which is stripped to generate the templateName

#### options.silent
Type: `Boolean`
Default value: `false`

When enable, disables any output showing files compiled.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  lisplate: {
    options: {},
    files: {
      'dest/templates.js': ['views/viewone.ltml', 'views/viewtwo.ltml'],
    },
  },
});
```

#### Custom Options

```js
grunt.initConfig({
  lisplate: {
    options: {
      basepath: 'views',
      ext: 'html',
      silent: true,
    },
    files: {
      'dest/templates.js': ['views/viewone.ltml', 'views/viewtwo.ltml'],
    },
  },
});
```
