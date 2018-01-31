'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins') (),
	browserSync = require('browser-sync'),
	del = require('del');

// ==================================================
// ### Development Task ###
// ==================================================

// Static server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './app'
		},
		notify: false
	});
});

// Compile SCSS to CSS
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.+(scss|sass)')
		.pipe($.plumber({ errorHandler: $.notify.onError("Error: <%= error.message %>") }))
		.pipe($.sourcemaps.init())
			.pipe($.sass())
			.pipe($.autoprefixer({
				browsers: ['last 5 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox >= 4'],
				cascade: true
			}))
			.pipe($.cssnano())
			.pipe($.rename({
				suffix: '.min',
				prefix : ''
			}))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true }));
});

// Compress main js file
gulp.task('js', function() {
	return gulp.src('app/js/main.js')
		.pipe($.plumber({ errorHandler: $.notify.onError("Error: <%= error.message %>") }))
		.pipe($.sourcemaps.init())
			.pipe($.concat('main.min.js'))
			.pipe($.uglify())
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({ stream: true }));
});

// JavaScript libraries
gulp.task('js-libs', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/jquery-migrate/dist/jquery-migrate.min.js',
		'./node_modules/jquery-validation/dist/jquery.validate.min.js',
		'./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js',
		// './node_modules/inputmask/dist/jquery.inputmask.bundle.js',
		// './node_modules/inputmask/dist/inputmask/phone-codes/phone.js',
		'./node_modules/slick-carousel/slick/slick.min.js',
		'./node_modules/snapsvg/dist/snap.svg-min.js'
	])
		.pipe($.concat('libs.min.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({ stream: true }));
});

// Watching for changes
gulp.task('watch', ['browser-sync', 'sass', 'js', 'js-libs'], function() {
	gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('app/js/main.js', ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

// Default task
gulp.task('default', ['watch']);


// ==================================================
// ### Production Task ###
// ==================================================

// Optimizing images
gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
		.pipe($.cache($.imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{removeViewBox: true}]
		}))) // Cache Images
		.pipe(gulp.dest('dist/img'));
});

// Clean cache
gulp.task('clean', function(callback) {
	return $.cache.clearAll(callback);
});

// Clear production folder
gulp.task('clear', function() {
	return del.sync(['dist', '!dist/img', '!dist/img/**/*']);
});

// Building application
gulp.task('build', ['clear', 'clean', 'imagemin'], function() {

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

	var buildCss = gulp.src('app/css/**/*')
		.pipe(gulp.dest('dist/css'));

	var buildScripts = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'));

});
