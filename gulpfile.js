const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task('server', function(){

    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
})

gulp.task('styles', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
})

gulp.task('watch', function() {
    gulp.watch('scss/*/*.scss', gulp.parallel('styles'));
    gulp.watch('scss/*.scss', gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));