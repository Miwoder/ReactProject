export const aSpecs = ['ИСиТ', 'ПОИТ', 'ДЭИВИ', 'ПОИБМС']

export let aStudents = [
    {id: 1, name: 'Хренин В.А.', spec: 'ИСиТ', group: 2, syear: 2018},
    {id: 2, name: 'Гриб Т.Т.', spec: 'ИСиТ', group: 2, syear: 2018},
    {id: 3, name: 'Лисичкин П.У.', spec: 'ИСиТ', group: 2, syear: 2018},
    {id: 4, name: 'Провоторов П.П.', spec: 'ИСиТ', group: 2, syear: 2018},
    {id: 5, name: 'Алексеев А.А.', spec: 'ДЭИВИ', group: 9, syear: 2018},
    {id: 6, name: 'Сергеев С.С.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 7, name: 'Михайлов М.М.', spec: 'ПОИБМС', group: 8, syear: 2017},
    {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 9, name: 'Макрон П.П.', spec: 'ДЭВИ', group: 10, syear: 2017},
    {id: 10, name: 'Прокопеня А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 11, name: 'Ветров А.В.', spec: 'ПОИБМС', group: 8, syear: 2017},
    {id: 12, name: 'Викторов В.В.', spec: 'ИСиТ', group: 3, syear: 2017},
    {id: 13, name: 'Сорокин А.А.', spec: 'ПОИБМС', group: 7, syear: 2016},
    {id: 14, name: 'Меркель  Г.Г.', spec: 'ДЭВИ', group: 9, syear: 2016},
    {id: 15, name: 'Обама В.В.', spec: 'ПОИБМС', group: 8, syear: 2016},
    {id: 16, name: 'Байден К.К.', spec: 'ИСиТ', group: 1, syear: 2020},
    {id: 17, name: 'Запольская Ю.Ю.', spec: 'ИСиТ', group: 3, syear: 2019},
    {id: 18, name: 'Захаренко Е.В.', spec: 'ПОИБМС', group: 6, syear: 2019},
    {id: 19, name: 'Путин В.В.', spec: 'ПОИБМС', group: 7, syear: 2019},
    {id: 20, name: 'Пинчук А.А.', spec: 'ПОИБМС', group: 7, syear: 2019},
    {id: 21, name: 'Морозов П.П.', spec: 'ИСиТ', group: 1, syear: 2019},
    {id: 22, name: 'Иванов И.И.', spec: 'ИСиТ', group: 1, syear: 2019},
    {id: 23, name: 'Сидоров С.С.', spec: 'ПОИТ', group: 4, syear: 2019},
    {id: 24, name: 'Макей К.К.', spec: 'ПОИТ', group: 5, syear: 2015},
];

export let aStudentEvents = [
    {
        id: 1, date: '2021-05-11', text: 'Прошел на курсы',
        company: {id: 1, name: 'iTechArt'}, student: {id: 24, name: 'Макей К.К.', spec: 'ПОИТ', group: 5, syear: 2015}
    },
    {
        id: 2, date: '2021-05-12', text: 'Принят на работу',
        company: {id: 1, name: 'iTechArt'}, student: {id: 16, name: 'Байден К.К.', spec: 'ИСиТ', group: 1, syear: 2020}
    },
    {
        id: 3,
        date: '2020-05-23',
        text: 'Принят на работу',
        company: {id: 2, name: 'LeverX'},
        student: {id: 10, name: 'Прокопеня А.А.', spec: 'ПОИБМС', group: 7, syear: 2017}
    },
    {
        id: 4, date: '2020-05-11', text: 'Собеседование не прошел',
        company: {id: 2, name: 'LeverX'}, student: {id: 1, name: 'Хренин В.А.', spec: 'ИСиТ', group: 2, syear: 2018}
    },
    {
        id: 5, date: '2020-06-16', text: 'Прошел на курсы',
        company: {id: 3, name: 'iSsoft'}, student: {id: 2, name: 'Гриб Т.Т.', spec: 'ИСиТ', group: 2, syear: 2018}
    },
    {
        id: 6, date: '2020-07-23', text: 'Прошел на курсы',
        company: {id: 4, name: 'EPAM'}, student: {id: 3, name: 'Лисичкин П.У.', spec: 'ИСиТ', group: 2, syear: 2018}
    },
    {
        id: 7, date: '2011-07-28', text: 'Работает полный день',
        company: {id: 4, name: 'EPAM'}, student: {id: 4, name: 'Провоторов П.П.', spec: 'ИСиТ', group: 2, syear: 2018}
    },
    {
        id: 8, date: '2011-07-11', text: 'Прошел на курсы',
        company: {id: 4, name: 'EPAM'}, student: {id: 5, name: 'Алексеев А.А.', spec: 'ДЭИВИ', group: 9, syear: 2018}
    },
    {
        id: 9, date: '2011-08-30', text: 'Прошел на курсы',
        company: {id: 5, name: 'IBA'}, student: {id: 6, name: 'Сергеев С.С.', spec: 'ПОИБМС', group: 7, syear: 2017}
    },
    {
        id: 10,
        date: '2022-09-20',
        text: 'Работает полный день',
        company: {id: 2, name: 'LeverX'},
        student: {id: 17, name: 'Запольская Ю.Ю.', spec: 'ИСиТ', group: 3, syear: 2019},
    },
    {
        id: 11, date: '2022-09-05', text: 'Работает полный день',
        company: {id: 4, name: 'EPAM'}, student: {id: 5, name: 'Алексеев А.А.', spec: 'ДЭИВИ', group: 9, syear: 2018}
    },
    {
        id: 12, date: '2022-05-07', text: 'Работает полный день',
        company: {id: 6, name: 'Syberry'}, student: {id: 15, name: 'Обама В.В.', spec: 'ПОИБМС', group: 8, syear: 2016}
    },
    {
        id: 13, date: '2013-06-05', text: 'Работает полный день',
        company: {id: 2, name: 'LeverX'}, student: {id: 14, name: 'Меркель  Г.Г.', spec: 'ДЭВИ', group: 9, syear: 2016}
    },
    {
        id: 14, date: '2013-12-05', text: 'Прошел на курсы',
        company: {id: 6, name: 'Wargaming'}, student: {id: 1, name: 'Хренин В.А.', spec: 'ИСиТ', group: 2, syear: 2018},
    },

];

export const aCompanies = [
    {id: 1, name: 'iTechArt'},
    {id: 2, name: 'LeverX'},
    {id: 3, name: 'iSsoft'},
    {id: 4, name: 'EPAM'},
    {id: 5, name: 'Wargaming'},
    {id: 6, name: 'Science solutions'},
];

