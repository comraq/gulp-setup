export default wagner => {
  // Client JS Paths
  wagner.constant("BIN_PATH", "./client/bin");
  wagner.constant("JS_SRC", "./client/app/app.js");
  wagner.constant("JS_SRC_GLOB", [
                    "./client/app/**/*.js"
                  ]);
  wagner.constant("JS_DEST", "scripts.min.js");
  wagner.constant("BASE_PATH", "./client");
  
  wagner.constant("JS_VEND_SRC", "./client/vendors/scripts.js");
  wagner.constant("JS_VEND_DEST", "vendors.min.js");

  // Client CSS Paths
  wagner.constant("CSS_SRC_GLOB", [
                    "./client/css/*.css",
                    "./client/app/**/*.css"
                  ]);
  wagner.constant("CSS_DEST", "styles.min.css");
  
  wagner.constant("CSS_VEND_SRC_GLOB", [
                    // Bootstrap
                    "./node_modules/bootstrap/dist/**/*.css"
                  ]);
  wagner.constant("CSS_VEND_DEST", "vendors.min.css");

  // Client HTML Paths
  wagner.constant("HTML_SRC_GLOB", "./client/**/*.html");

  // Server JS Paths
  wagner.constant("SERV_BASE_PATH", "./server-transpiled");
  wagner.constant("SERV_JS_SRC_GLOB", [
                    "./server/**/*.js",
                    "!./server-transpiled/**/*.js"
                  ]);

  // Test Paths
  wagner.constant("KARMA_CONF",
                    __dirname + "/../karma.conf.js");
  wagner.constant("TESTS_PATH", "./test/*.js");
  wagner.constant("TESTS_SRC_JS", [
    "./**/*.js",
    "!./server-transpiled/**/*.js",
    "!./node_modules/**/*.js",
    "!./gulpfile.js",
    "!./gulp/**/*.js",
    "!./test/**/*.js"
  ]);
};
