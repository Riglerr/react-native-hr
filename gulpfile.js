const gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('default', ['build', 'watch'])

gulp.task('build', () =>
  gulp.src('src/index.js')
  .pipe(babel({
    presets: ['es2015', 'react']
  }))
  .pipe(gulp.dest('dist'))
  .pipe(rename('hr.dist.js'))
  .pipe(gulp.dest('examples'))
)

gulp.task('watch', () => {
  gulp.watch('src/index.js', ['build'])
})