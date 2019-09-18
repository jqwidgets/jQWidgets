window.onload = function () {
    const dateTimePicker = document.getElementsByTagName('smart-date-time-picker')[0];

    dateTimePicker.messages.bg = { now: 'Сега', dateTabLabel: 'ДАТА', timeTabLabel: 'ВРЕМЕ' };
    dateTimePicker.messages.fr = { now: 'À présent', dateTabLabel: 'DATE', timeTabLabel: 'TEMPS' };
    dateTimePicker.messages.de = { now: 'Jetzt', dateTabLabel: 'DATUM', timeTabLabel: 'ZEIT' };
    dateTimePicker.messages.it = { now: 'Adesso', dateTabLabel: 'DATA', timeTabLabel: 'TEMPO' };
    dateTimePicker.messages.ja = { now: '今', dateTabLabel: '日付', timeTabLabel: '時間' };
    dateTimePicker.messages.es = { now: 'Ahora', dateTabLabel: 'FECHA', timeTabLabel: 'HORA' };

    document.getElementById('chooseLocale').addEventListener('change', function (event) {
        dateTimePicker.locale = event.detail.value;
    });
}