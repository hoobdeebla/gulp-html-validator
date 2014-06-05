var fs = require("fs");
var should = require('should');
var gutil = require('gulp-util');
var htmlv = require('../');

require('mocha');

describe('htmlv', function() {
  it('should validate html', function(done) {
    var stream = htmlv();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.html',
      contents: new Buffer(fs.readFileSync('test/fixtures/normal.html'))
    });
    stream.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/normal.html', 'utf8'));
      done();
    });
    stream.write(fakeFile);
  });
  it('should return json by default', function(done) {
    var stream = htmlv();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.html',
      contents: new Buffer(fs.readFileSync('test/fixtures/normal.html'))
    });
    stream.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      JSON.parse(newFile.contents).should.be.type('object');
      done();
    });
    stream.write(fakeFile);
  });
});
