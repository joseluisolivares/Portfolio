const { src, dest, watch, series } = require('gulp');  
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css( done ) {
    src('src/styles/scss/index.scss')
        .pipe( sass() )
        .pipe( postcss( [ autoprefixer() ] ))
        .pipe( dest ('src/styles/css/css'))

        done();
}

function listener() {
    watch('src/styles/scss/**/*.scss', css);
}

exports.default = series( css, listener ) ;
