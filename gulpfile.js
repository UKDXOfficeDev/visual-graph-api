// require gulp
var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback:   'index2.html',
      livereload: true,
      open:       true,
      directoryListing: {
        enable: true,
        path:   'public'
      }     
    })
    );
});
