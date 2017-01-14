/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxScheduler = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['appointmentOpacity','appointmentsMinHeight','appointmentDataFields','appointmentTooltips','columnsHeight','contextMenu','contextMenuOpen','contextMenuClose','contextMenuItemClick','contextMenuCreate','changedAppointments','disabled','date','dayNameFormat','enableHover','editDialog','editDialogDateTimeFormatString','editDialogDateFormatString','editDialogOpen','editDialogCreate','editDialogKeyDown','editDialogClose','exportSettings','height','legendPosition','legendHeight','localization','min','max','ready','renderAppointment','rendering','rendered','rtl','resources','rowsHeight','showToolbar','showLegend','scrollBarSize','source','statuses','touchRowsHeight','theme','touchAppointmentsMinHeight','touchScrollBarSize','timeZone','touchDayNameFormat','toolBarRangeFormat','toolBarRangeFormatAbbr','toolbarHeight','views','view','width'];
      let options = {};
    for(let item in this.props) {
        if(item === 'settings') {
          for(let itemTwo in this.props[item]) {
            options[itemTwo] = this.props[item][itemTwo];
              }
          } else {
              if(properties.indexOf(item) !== -1) {
              options[item] = this.props[item];
              }
          }
      }
      return options;
    },
  createComponent : function (options) {
    if(!this.style) {
        for (let style in this.props.style) {
          $('#' +this.componentSelector).css(style, this.props.style[style]);
        }
    }
    if(this.props.className !== undefined) {
      let classes = this.props.className.split(' ');
      for (let i = 0; i < classes.length; i++ ) {
        $('#' +this.componentSelector).addClass(classes[i]);
      }
    }
    if(!this.template) {
        $('#' +this.componentSelector).html(this.props.template);
    }
    $('#' +this.componentSelector).jqxScheduler(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxScheduler('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxScheduler(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  appointmentOpacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("appointmentOpacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("appointmentOpacity");
    }
  },
  appointmentsMinHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("appointmentsMinHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("appointmentsMinHeight");
    }
  },
  appointmentDataFields: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("appointmentDataFields", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("appointmentDataFields");
    }
  },
  appointmentTooltips: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("appointmentTooltips", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("appointmentTooltips");
    }
  },
  columnsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("columnsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("columnsHeight");
    }
  },
  contextMenu: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("contextMenu", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("contextMenu");
    }
  },
  contextMenuOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("contextMenuOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("contextMenuOpen");
    }
  },
  contextMenuClose: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("contextMenuClose", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("contextMenuClose");
    }
  },
  contextMenuItemClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("contextMenuItemClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("contextMenuItemClick");
    }
  },
  contextMenuCreate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("contextMenuCreate", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("contextMenuCreate");
    }
  },
  changedAppointments: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("changedAppointments", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("changedAppointments");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("disabled");
    }
  },
  date: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("date", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("date");
    }
  },
  dayNameFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("dayNameFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("dayNameFormat");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("enableHover");
    }
  },
  editDialog: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialog", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialog");
    }
  },
  editDialogDateTimeFormatString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogDateTimeFormatString", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogDateTimeFormatString");
    }
  },
  editDialogDateFormatString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogDateFormatString", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogDateFormatString");
    }
  },
  editDialogOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogOpen");
    }
  },
  editDialogCreate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogCreate", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogCreate");
    }
  },
  editDialogKeyDown: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogKeyDown", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogKeyDown");
    }
  },
  editDialogClose: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("editDialogClose", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("editDialogClose");
    }
  },
  exportSettings: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("exportSettings", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("exportSettings");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("height");
    }
  },
  legendPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("legendPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("legendPosition");
    }
  },
  legendHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("legendHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("legendHeight");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("localization");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("max");
    }
  },
  ready: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("ready", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("ready");
    }
  },
  renderAppointment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("renderAppointment", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("renderAppointment");
    }
  },
  rendering: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("rendering", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("rendering");
    }
  },
  rendered: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("rendered", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("rendered");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("rtl");
    }
  },
  resources: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("resources", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("resources");
    }
  },
  rowsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("rowsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("rowsHeight");
    }
  },
  showToolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("showToolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("showToolbar");
    }
  },
  showLegend: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("showLegend", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("showLegend");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("scrollBarSize");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("source");
    }
  },
  statuses: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("statuses", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("statuses");
    }
  },
  touchRowsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("touchRowsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("touchRowsHeight");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("theme");
    }
  },
  touchAppointmentsMinHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("touchAppointmentsMinHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("touchAppointmentsMinHeight");
    }
  },
  touchScrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("touchScrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("touchScrollBarSize");
    }
  },
  timeZone: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("timeZone", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("timeZone");
    }
  },
  touchDayNameFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("touchDayNameFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("touchDayNameFormat");
    }
  },
  toolBarRangeFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("toolBarRangeFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("toolBarRangeFormat");
    }
  },
  toolBarRangeFormatAbbr: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("toolBarRangeFormatAbbr", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("toolBarRangeFormatAbbr");
    }
  },
  toolbarHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("toolbarHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("toolbarHeight");
    }
  },
  views: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("views", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("views");
    }
  },
  view: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("view", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("view");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScheduler("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxScheduler("width");
    }
  },
  addAppointment: function (item) {
    $("#" +this.componentSelector).jqxScheduler("addAppointment", item);  
  },
  beginAppointmentsUpdate: function () {
    $("#" +this.componentSelector).jqxScheduler("beginAppointmentsUpdate");  
  },
  clearAppointmentsSelection: function () {
    $("#" +this.componentSelector).jqxScheduler("clearAppointmentsSelection");  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxScheduler("clearSelection");  
  },
  closeMenu: function () {
    $("#" +this.componentSelector).jqxScheduler("closeMenu");  
  },
  closeDialog: function () {
    $("#" +this.componentSelector).jqxScheduler("closeDialog");  
  },
  deleteAppointment: function (appointmenId) {
    $("#" +this.componentSelector).jqxScheduler("deleteAppointment", appointmenId);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxScheduler("destroy");  
  },
  endAppointmentsUpdate: function () {
    $("#" +this.componentSelector).jqxScheduler("endAppointmentsUpdate");  
  },
  ensureAppointmentVisible: function (id) {
    $("#" +this.componentSelector).jqxScheduler("ensureAppointmentVisible", id);  
  },
  ensureVisible: function (item, resourceId) {
    $("#" +this.componentSelector).jqxScheduler("ensureVisible", item, resourceId);  
  },
  exportData: function (format) {
    return $("#" +this.componentSelector).jqxScheduler("exportData", format);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxScheduler("focus");  
  },
  getAppointmentProperty: function (appointmentId, name) {
    return $("#" +this.componentSelector).jqxScheduler("getAppointmentProperty", appointmentId, name);  
  },
  getSelection: function () {
    return $("#" +this.componentSelector).jqxScheduler("getSelection");  
  },
  getAppointments: function () {
    return $("#" +this.componentSelector).jqxScheduler("getAppointments");  
  },
  getDataAppointments: function () {
    return $("#" +this.componentSelector).jqxScheduler("getDataAppointments");  
  },
  hideAppointmentsByResource: function (resourcesId) {
    $("#" +this.componentSelector).jqxScheduler("hideAppointmentsByResource", resourcesId);  
  },
  openMenu: function (left, top) {
    $("#" +this.componentSelector).jqxScheduler("openMenu", left, top);  
  },
  openDialog: function (left, top) {
    $("#" +this.componentSelector).jqxScheduler("openDialog", left, top);  
  },
  selectAppointment: function (appointmentId) {
    $("#" +this.componentSelector).jqxScheduler("selectAppointment", appointmentId);  
  },
  setAppointmentProperty: function (appointmentId, name, value) {
    $("#" +this.componentSelector).jqxScheduler("setAppointmentProperty", appointmentId, name, value);  
  },
  selectCell: function (date, allday, resourceId) {
    $("#" +this.componentSelector).jqxScheduler("selectCell", date, allday, resourceId);  
  },
  showAppointmentsByResource: function (resourceId) {
    $("#" +this.componentSelector).jqxScheduler("showAppointmentsByResource", resourceId);  
  },
  scrollWidth: function () {
    return $("#" +this.componentSelector).jqxScheduler("scrollWidth");  
  },
  scrollHeight: function () {
    return $("#" +this.componentSelector).jqxScheduler("scrollHeight");  
  },
  scrollLeft: function (left) {
    $("#" +this.componentSelector).jqxScheduler("scrollLeft", left);  
  },
  scrollTop: function (top) {
    $("#" +this.componentSelector).jqxScheduler("scrollTop", top);  
  },
  render: function () {
    let id = 'jqxScheduler' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxScheduler;

