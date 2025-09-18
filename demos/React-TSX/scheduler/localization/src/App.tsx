import * as React from 'react';
import { useRef, useEffect, useMemo, useCallback } from 'react';
import JqxScheduler, { ISchedulerProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';

const App = () => {
  const myScheduler = useRef<JqxScheduler>(null);

  const appointments = useMemo(
    () => [
      {
        calendar: 'Zimmer 1',
        description: '',
        end: new Date(2017, 10, 23, 16, 0, 0),
        id: 'id1',
        location: '',
        start: new Date(2017, 10, 23, 9, 0, 0),
        subject: 'Projektsitzung'
      },
      {
        calendar: 'Zimmer 2',
        description: '',
        end: new Date(2017, 10, 24, 15, 0, 0),
        id: 'id2',
        location: '',
        start: new Date(2017, 10, 24, 10, 0, 0),
        subject: 'IT Gruppentreffen'
      },
      {
        calendar: 'Zimmer 3',
        description: '',
        end: new Date(2017, 10, 27, 13, 0, 0),
        id: 'id3',
        location: '',
        start: new Date(2017, 10, 27, 11, 0, 0),
        subject: 'Soziale Treffen'
      },
      {
        calendar: 'Zimmer 2',
        description: '',
        end: new Date(2017, 10, 23, 18, 0, 0),
        id: 'id4',
        location: '',
        start: new Date(2017, 10, 23, 16, 0, 0),
        subject: 'Projekte Planung'
      },
      {
        calendar: 'Zimmer 1',
        description: '',
        end: new Date(2017, 10, 25, 17, 0, 0),
        id: 'id5',
        location: '',
        start: new Date(2017, 10, 25, 15, 0, 0),
        subject: 'Interveiw mit Jan'
      },
      {
        calendar: 'Zimmer 4',
        description: '',
        end: new Date(2017, 10, 26, 16, 0, 0),
        id: 'id6',
        location: '',
        start: new Date(2017, 10, 26, 14, 0, 0),
        subject: 'Interveiw mit Alberta'
      }
    ],
    []
  );

  const source = useMemo(
    () => ({
      dataFields: [
        { name: 'id', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'subject', type: 'string' },
        { name: 'calendar', type: 'string' },
        { name: 'start', type: 'date' },
        { name: 'end', type: 'date' }
      ],
      dataType: 'array',
      id: 'id',
      localData: appointments
    }),
    [appointments]
  );

  const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

  const editDialogCreate = useCallback((dialog: any, fields: any, editAppointment: any) => {
    fields.timeZoneContainer.hide();
  }, []);

  const localization = useMemo(
    () => ({
      '/': '/',
      ':': ':',
      firstDay: 1,
      days: {
        names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
        namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
      },
      months: {
        names: [
          'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
          'August', 'September', 'Oktober', 'November', 'Dezember', ''
        ],
        namesAbbr: [
          'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct', 'Nov', 'Dez', ''
        ]
      },
      AM: ['AM', 'am', 'AM'],
      PM: ['PM', 'pm', 'PM'],
      eras: [
        { name: 'A.D.', start: null, offset: 0 }
      ],
      twoDigitYearMax: 2029,
      patterns: {
        d: 'M/d/yyyy',
        D: 'dddd, MMMM dd, yyyy',
        t: 'h:mm tt',
        T: 'h:mm:ss tt',
        f: 'dddd, MMMM dd, yyyy h:mm tt',
        F: 'dddd, MMMM dd, yyyy h:mm:ss tt',
        M: 'MMMM dd',
        Y: 'yyyy MMMM',
        S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        ISO: 'yyyy-MM-dd hh:mm:ss',
        ISO2: 'yyyy-MM-dd HH:mm:ss',
        d1: 'dd.MM.yyyy',
        d2: 'dd-MM-yyyy',
        d3: 'dd-MMMM-yyyy',
        d4: 'dd-MM-yy',
        d5: 'H:mm',
        d6: 'HH:mm',
        d7: 'HH:mm tt',
        d8: 'dd/MMMM/yyyy',
        d9: 'MMMM-dd',
        d10: 'MM-dd',
        d11: 'MM-dd-yyyy'
      },
      backString: 'Vorhergehende',
      forwardString: 'Nächster',
      toolBarPreviousButtonString: 'Vorhergehende',
      toolBarNextButtonString: 'Nächster',
      emptyDataString: 'Nokeine Daten angezeigt',
      loadString: 'Loading...',
      clearString: 'Löschen',
      todayString: 'Heute',
      dayViewString: 'Tag',
      weekViewString: 'Woche',
      monthViewString: 'Monat',
      timelineDayViewString: 'Zeitleiste Day',
      timelineWeekViewString: 'Zeitleiste Woche',
      timelineMonthViewString: 'Zeitleiste Monat',
      loadingErrorMessage:
        "Die Daten werden noch geladen und Sie können eine Eigenschaft nicht festgelegt oder eine Methode aufrufen . Sie können tun, dass, sobald die Datenbindung abgeschlossen ist. jqxScheduler wirft die ' bindingComplete ' Ereignis, wenn die Bindung abgeschlossen ist.",
      editRecurringAppointmentDialogTitleString: 'Bearbeiten Sie wiederkehrenden Termin',
      editRecurringAppointmentDialogContentString: 'Wollen Sie nur dieses eine Vorkommen oder die Serie zu bearbeiten ?',
      editRecurringAppointmentDialogOccurrenceString: 'Vorkommen bearbeiten',
      editRecurringAppointmentDialogSeriesString: 'Bearbeiten Die Serie',
      editDialogTitleString: 'Termin bearbeiten',
      editDialogCreateTitleString: 'Erstellen Sie Neuer Termin',
      contextMenuEditAppointmentString: 'Termin bearbeiten',
      contextMenuCreateAppointmentString: 'Erstellen Sie Neuer Termin',
      editDialogSubjectString: 'Subjekt',
      editDialogLocationString: 'Ort',
      editDialogFromString: 'Von',
      editDialogToString: 'Bis',
      editDialogAllDayString: 'Den ganzen Tag',
      editDialogExceptionsString: 'Ausnahmen',
      editDialogResetExceptionsString: 'Zurücksetzen auf Speichern',
      editDialogDescriptionString: 'Bezeichnung',
      editDialogResourceIdString: 'Kalender',
      editDialogStatusString: 'Status',
      editDialogColorString: 'Farbe',
      editDialogColorPlaceHolderString: 'Farbe wählen',
      editDialogTimeZoneString: 'Zeitzone',
      editDialogSelectTimeZoneString: 'Wählen Sie Zeitzone',
      editDialogSaveString: 'Sparen',
      editDialogDeleteString: 'Löschen',
      editDialogCancelString: 'Abbrechen',
      editDialogRepeatString: 'Wiederholen',
      editDialogRepeatEveryString: 'Wiederholen alle',
      editDialogRepeatEveryWeekString: 'woche(n)',
      editDialogRepeatEveryYearString: 'Jahr (en)',
      editDialogRepeatEveryDayString: 'Tag (e)',
      editDialogRepeatNeverString: 'Nie',
      editDialogRepeatDailyString: 'Täglich',
      editDialogRepeatWeeklyString: 'Wöchentlich',
      editDialogRepeatMonthlyString: 'Monatlich',
      editDialogRepeatYearlyString: 'Jährlich',
      editDialogRepeatEveryMonthString: 'Monate (n)',
      editDialogRepeatEveryMonthDayString: 'Day',
      editDialogRepeatFirstString: 'erste',
      editDialogRepeatSecondString: 'zweite',
      editDialogRepeatThirdString: 'dritte',
      editDialogRepeatFourthString: '