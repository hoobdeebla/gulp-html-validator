var es = require('event-stream');
var path = require('path');
var htmlv = require('html-validator');

module.exports = function(options) {

  if (!options) options = {};
  if (!options.format) options.format = 'json';

  function modifyContents(file, cb) {
    if (file.isNull()) return cb(null, file); // pass along
    if (file.isStream()) return cb(new Error("htmlv: Streaming not supported")); // pass error if streaming is not supported

    options.data = file.contents.toString('utf8');

    htmlv(options, function (err, data) {
      if (err) return cb(err);
      if (options.format === 'json') {
        file.contents = new Buffer(JSON.stringify(data));
      } else {
        file.contents = new Buffer(String(data));
      }

      return cb(null, file);
    });
  }

  // Return a stream
  return es.map(modifyContents);
};
