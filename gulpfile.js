import { task, src, dest, parallel } from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

// Ruta de los archivos generados por Next.js después del build
const paths = {
  styles: './.next/static/css/**/*.css',
  scripts: './.next/static/chunks/**/*.js',
};

// Minificar CSS
task('minify-css', () => {
  return src(paths.styles)
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(dest('./.next/static/css'));
});

// Minificar JavaScript
task('minify-js', () => {
  return src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(dest('./.next/static/chunks'));
});

// Tarea por defecto para ejecutar ambas
task('default', parallel('minify-css', 'minify-js'));
