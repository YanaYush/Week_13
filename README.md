1. let date = new Date( Date.parse('2021-01-24T22:51:00.000-00:00') );
2. Для получения определенного дня недели 
3. function getSecondsToTomorrow() {
    let now = new Date ();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let difference = tomorrow - now; 
    return Math.round(difference / 1000)
}
4. Для получения дня месяца 
5. 2016-03-08T21:00:00.000Z
6. возвращает разницу в минутах между местным часовым поясом и UTC
7. 19
8. выделяет часы текущего времени из любого объекта типа Date
9. let d = new Date(); 
let y =  d.getFullYear();
console.log(y);
10. мне показалось, что ошибки нет, при проверке выводит сегодняшнюю дату