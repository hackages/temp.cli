const gulp = require("gulp");

const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const del = require('del');

const fs = require('fs');

gulp.task('clean', () => {
    return del(['./dist']);
});

gulp.task('svgstore',() => {
    var result = gulp
        .src('./src/icons/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dist/'));
    return result;
});
