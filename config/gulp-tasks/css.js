import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import del from "del";
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка медиа запросов

export const css = () => {
	return app.gulp.src(`${app.path.build.css}style.css`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>"
			})))
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isWebP,
				app.plugins.if(
					app.isBuild,
					webpcss(
						{
							webpClass: ".webp",
							noWebpClass: ".no-webp"
						}
					)
				)
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
			)
		)
		.pipe(app.plugins.rename({ suffix: ".min" }))
		.pipe(app.gulp.dest(app.path.build.css));
}