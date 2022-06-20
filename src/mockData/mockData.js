export const cardsMockData = [
    {flavor: 'с фуа-гра', portions: 10, gift: 1, weight: '0,5', description: 'Печень утки разварная с артишоками', inStock: true},
    {flavor: 'с рыбой', portions: 40, gift: 2, weight: '2', description: 'Головы щучьи с чесноком да свежайшая сёмгушка', inStock: false},
    {flavor: 'с курой', portions: 100, gift: 5, weight: '5', description: 'Филе из цыплят с трюфелями в бульоне', inStock: true}
]

export const qustionsAndAnswersMockData = [
    {
         question: 'Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения (пользователя, менеджера проекта, дизайнера, верстальщика, клиентского программиста, серверного программиста).',
         answer: `ПОЛЬЗОВАТЕЛЬ: интуитивно понятный дизайн, доступность всех элементов страницы с разных устройств и браузеров,
                 предсказуемый/ожидаемый результат функционала.
                 МЕНЕДЖЕР ПРОЕКТА: соответствие ТЗ, удобочитаемость для всей команды. 
                 ДИЗАЙНЕР: соответствие макету. 
                 КЛИЕНТСКОГО ПРОГРАММИСТА: соответствие макету, соблюдение внутренних стандартов компании. 
                 СЕРВЕРНОГО ПРОГРАММИСТА: -`
     },
     {
         question: 'Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструментыи технологии вы применяли на практике',
         answer: `Компонентный подход (переиспользуемые участки кода),
                 ui-библиотеки, использование методологий (BEM, Atomic), периодическое обновление пакетов для совместимости между собой,
                 стайл гайды,  при необходимости документация/комментарии.`
     },
     {
         question: 'Опишите основные особенности верстки сайтов, которые должны одинаково хорошo отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.',
         answer: `Резиновая + адаптивная вёрстка, поддерживаемость свойств/функций/синтаксических конструкций. 
                  Проверка поведения верстки в девтулсах при разных разрешенияx/девайсах, 
                  по возможности открытие сайта на разных устройствах, в разных версиях браузера.
                  Сайты для проверки поддержки свойств браузером. Добавление префиксов.
                  Использование бандлеров с транспиляцией кода под необходимые браузеры.`
     },
     {
         question: 'Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.',
         answer: 'Сниппеты, хоткеи, расширения в браузере/редакторе, дебагер, консоль лог ;)'
     },
     {
         question: 'Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?',
         answer: `Найти в девтулсах свойство, которое ведёт себя некорректно, ознакомиться с поддержкой свойств в браузерах, дописать альтернативу.`
     },
     {
         question: 'Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?',
         answer: 'Запросить отрисовать и/или предложить сделать на свое усмотрение согласно уже имеющимся дизайн-макетам/стайл гайду.'
     },
     {
         question: 'Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?',
         answer: 'google, stackoverflow, habr, medium, youtube и тп. (https://css-tricks.com, https://www.youtube.com/c/pepelsbey, https://scriptdev.ru/guide/, https://caniuse.com/, https://developer.mozilla.org, https://learn.javascript.ru/). Интересна веб-разработка в целом, но для начала хотелось бы стать крепким/хорошим фронтом, а после знакомиться по-немногу с бэком. Интересы: физическая культура, диетология, восточная философия, кино.'
     },
     {
         question: 'Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.',
         answer: 'https://github.com/Mitya-Me?tab=repositories'
     }
]