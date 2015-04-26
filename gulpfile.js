/**
 * Created by Stoltz on 4/26/15.
 */
var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('less', function(){
    console.log('Compiling Less Files');

    return gulp.src('./src/client/style/app.less')
        .pipe(less())
        .pipe(gulp.dest('./src/client/style/compiled/'));
});