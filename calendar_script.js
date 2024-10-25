document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('schedule');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            // Здесь добавьте события (данные могут быть получены через API)
            { title: 'Лекция по математике', start: '2023-10-01' },
            { title: 'Лабораторная работа', start: '2023-10-02' }
        ]
    });
    calendar.render();
});
