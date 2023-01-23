// Импортируем модули
import notify from "gulp-notify"; // Сообщения (подсказки)
import newer from "gulp-newer"; //Отслеживание только новых файлов
import plumber from "gulp-plumber"; //Обработка ошибок
import ifPlugin from "gulp-if";
import prettier from "gulp-prettier";
import rename from 'gulp-rename'; //Переименовывает файлы

// Экспортируем объект
export const plugins = {
	notify,
	if: ifPlugin,
	prettier,
	newer,
	plumber,
	rename
}