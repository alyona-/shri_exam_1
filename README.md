Проект для экзамена в Яндекс ШРИ 2013 – Выпускной альбом ШРИ 2013.

Посмотреть на сайт в работе можно по [ссылке](http://sky2high.net/etc/projects/shri_exam/).

К экзамену также дополнительно подготовлена урезанная **версия проекта на основе БЭМ** – [https://github.com/DimitryDushkin/shri_exam_1_bem](https://github.com/DimitryDushkin/shri_exam_1_bem).

## Особенности этого проекта:

1. Вёрстка под телефоны, планшеты и ПК.
2. MVC фреймворк (и шаблонизатор) AngularJS.
3. HTML\CSS фреймворк Bootstrap.
4. Оптимизация времени загрузки: custom сборка Bootstrap, отложенная загрузка JS, объединение файлов стилей (26 Кб non-gzip) и скриптов (139 Кб non-gzip), отсутствие jQuery.
5. Анимация с помощью css transitions.
6. Инфографика по ученикам (chart.js) на основе canvas.
6. Частичное покрытие юнит-тестами.
7. Протестировано в последних версиях Chrome, Firefox, Safari, IE.


Для установки всех необходимых библиотек (из корня проекта):

    npm install

Собрать и запустить оптимизированную версию можно командой:

    grunt server:dist

Запустить обычную версию:

    grunt server

Запустить прогон юнит и e2e-тестов: 

    karma start karma.conf.js 