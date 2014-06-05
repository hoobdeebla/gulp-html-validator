#gulp-html-validator
[![Build Status](https://travis-ci.org/hoobdeebla/gulp-html-validator.png?branch=master)](https://travis-ci.org/hoobdeebla/gulp-html-validator)
[![NPM version](https://badge.fury.io/js/gulp-html-validator.png)](http://badge.fury.io/js/gulp-html-validator)

> Validate html using [w3.org](http://validator.w3.org/nu/)

<table>
<tr> 
<td>Package</td><td>gulp-html-validator</td>
</tr>
<tr>
<td>Description</td>
<td>Validate html with w3.org</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

# Usage

## Install

```
npm install gulp-html-validator --save
```
##Example


```javascript

// Default
gulp.task('valid', function () {
  gulp.src('valid.html')
    .pipe(htmlv())
    .pipe(gulp.dest('./out'));
});

// Option format set to html
gulp.task('invalid', function () {
  gulp.src('invalid.html')
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./out'));
});

```

####You can view more examples in the [example folder.](https://github.com/hoobdeebla/gulp-html-validator/tree/master/examples)



## LICENSE

(MIT License)

Copyright (c) 2014 Adam Schay <adamschay@gmail.com> http://hoobdeebla.github.io

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
