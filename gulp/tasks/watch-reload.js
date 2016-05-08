var browserSync = require("browser-sync");

module.exports = function(gulp, plugins, BIN_PATH, BASE_PATH) {
  return function() {
    var options = {};
    if (plugins.util.env.host && plugins.util.env.port) {
      options.proxy = plugins.util.env.host + ":"
                            + plugins.util.env.port;
    } else {
      options.server = {
        baseDir: BASE_PATH
      };
    }
   
    var instance = browserSync.create();
    instance.init(options);

    gulp.watch(BIN_PATH + "/**/*").on("change", instance.reload);
  };
}
