var browserSync = require("browser-sync");

module.exports = function(gulp, BIN_PATH, BASE_PATH, host, port) {
  return function() {
    var options = {};
    if (host && port)
      options.proxy = host + ":" + port;
    else {
      options.server = {
        baseDir: BASE_PATH
      };
    }
   
    var instance = browserSync.create();
    instance.init(options);

    gulp.watch(BIN_PATH + "/**/*").on("change", instance.reload);
  };
}
