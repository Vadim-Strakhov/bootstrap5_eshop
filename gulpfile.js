const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: 'src',
        },
    });

    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp
        .src('src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(
            rename({
                suffix: '.min',
            }),
        )
        .pipe(gulp.dest('src/assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*/*.scss', gulp.parallel('styles'));
    gulp.watch('src/scss/*.scss', gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
