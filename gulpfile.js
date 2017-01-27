var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var Files = {

    html : './index.html',
    css_dest : 'css/',
    scss_all : 'scss/**/*.scss',
    scss_main : 'scss/style.scss'

};

gulp.task('sass', function(){

    return gulp.src(Files.scss_main)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(Files.css_dest))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('default', ['sass'], function(){
    
    browserSync.init({
        server: {
            baseDir: "./",
            index: Files.html
        }
    });

    gulp.watch(Files.scss_all, ['sass']);
    gulp.watch(Files.html, browserSync.reload);
});
