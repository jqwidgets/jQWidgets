using System.Linq;
using jQWidgets.AspNet.Core.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System;
using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.Internal;

namespace jQWidgets.AspNet.Core.Controllers
{
    public class JSONData
    {
        public List<SalesEmployee> Employees
        {
            get;
            set;
        }
        public int TotalRecords
        {
            get;
            set;
        }
    }
    public class TagHelpersController : Controller
    {
        private jQWidgetsDemosContext _context;
        public TagHelpersController(jQWidgetsDemosContext context)
        {
            _context = context;
        }
        //
        // GET: /Widgets/
        public ActionResult Index()
        {
            return View("ScrollView/ScrollView");

            return View("ScrollView/ScrollView", _context.SalesEmployees);
        //    return View("DataTable/DataTableRowDetails", _context.Employee.ToList());
        }
        [HttpPost]
        public FileContentResult ExportData(FormPostBack data)
        { 
             return ExportHelper.ExportData(data);
        }

        [HttpPost]
        public string GetEmployees()
        {
            List<SalesEmployee> allEmployees = _context.SalesEmployees.ToList(); 
            JSONData data = new JSONData();
            data.TotalRecords = allEmployees.Count;
            data.Employees = allEmployees;
            return JsonConvert.SerializeObject(data);
        }

        [HttpPost]
        public string GetChildren(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("ID");
            List<SalesEmployee> allEmployees = _context.SalesEmployees.ToList();
            JSONData data = new JSONData();
            List<SalesEmployee> employees = new List<SalesEmployee>();
            for (int i = 0; i < allEmployees.Count; i++)
            {
                if (String.IsNullOrEmpty(id))
                {
                    if (i < 5)
                    {
                        employees.Add(allEmployees[i]);
                    }
                }
                else
                {
                    if (allEmployees[i].ReportsTo == Int32.Parse(id))
                    {
                        employees.Add(allEmployees[i]);
                    }
                }
            }
            data.TotalRecords = allEmployees.Count;
            data.Employees = employees;
            return JsonConvert.SerializeObject(data);
        }

        [HttpPost]
        public string GetPageData(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);

            List<JToken> filterGroups = token.SelectToken("filterGroups").Children().ToList();
            int pageSize = (int)token.SelectToken("pagesize");
            int pageNum = (int)token.SelectToken("pagenum");
            string sortField = (string)token.SelectToken("sortdataField");
            string sortOrder = (string)token.SelectToken("sortorder");
            int count = 0;
            List<SalesEmployee> employees = new List<SalesEmployee>();
            List<SalesEmployee> allEmployees = _context.SalesEmployees.ToList();
            if (sortField != "")
            {
                if (sortOrder == "asc")
                {              
                    allEmployees = (from p in allEmployees
                                    orderby (p.GetType().GetProperty(sortField).GetValue(p))
                                 select p).ToList();

                }
                else if (sortOrder == "desc")
                {
                    allEmployees = (from p in allEmployees
                                    orderby (p.GetType().GetProperty(sortField).GetValue(p)) descending
                                    select p).ToList();
                }
            }
            if (filterGroups.Count > 0)
            {
                List<SalesEmployee> filteredEmployees = allEmployees;
                for (int j = 0; j < filterGroups.Count; j++)
                {
                    List<JToken> filters = filterGroups[j].SelectToken("filters").Children().ToList();

                    List<SalesEmployee> filterGroup = filteredEmployees;
                    List<SalesEmployee> filterGroupResult = new List<SalesEmployee>();
                    for (int i = 0; i < filters.Count; i++)
                    {
                        string filterLabel = (string)filters[i].SelectToken("label");
                        string filterValue = (string)filters[i].SelectToken("value");
                        string filterDataField = (string)filters[i].SelectToken("field");
                        string filterCondition = (string)filters[i].SelectToken("condition");
                        string filterType = (string)filters[i].SelectToken("type");
                        string filterOperator = (string)filters[i].SelectToken("operator");

                        List<SalesEmployee> currentResult = new List<SalesEmployee>();

                        switch (filterCondition)
                        {
                            case "NOT_EMPTY":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)) != null)
                                                     select p).ToList();
                                break;
                            case "NOT_NULL":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString() != "")
                                                     select p).ToList();
                                break;
                            case "NULL":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)) == null)
                                                     select p).ToList();
                                break;
                            case "EMPTY":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString() == "")
                                                     select p).ToList();
                                break;
                            case "CONTAINS_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().Contains(filterValue))
                                                     select p).ToList();
                                break;
                            case "CONTAINS":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().IndexOf(filterValue, StringComparison.CurrentCultureIgnoreCase) != -1)
                                                     select p).ToList();
                                break;
                            case "DOES_NOT_CONTAIN_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where (!(p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().Contains(filterValue))
                                                     select p).ToList();
                                break;
                            case "DOES_NOT_CONTAIN":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().IndexOf(filterValue, StringComparison.CurrentCultureIgnoreCase) == -1)
                                                     select p).ToList();
                                break;
                            case "EQUAL_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString() == filterValue)
                                                     select p).ToList();
                                break;
                            case "EQUAL":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().IndexOf(filterValue, StringComparison.CurrentCultureIgnoreCase) == 0)
                                                     select p).ToList();
                                break;
                            case "NOT_EQUAL_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString() != filterValue)
                                                     select p).ToList();
                                break;
                            case "NOT_EQUAL":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().IndexOf(filterValue, StringComparison.CurrentCultureIgnoreCase) != 0)
                                                     select p).ToList();
                                break;
                            case "GREATER_THAN":
                                currentResult = (from p in filterGroup
                                                 where (float.Parse(p.GetType().GetProperty(filterDataField).GetValue(p).ToString()) > float.Parse(filterValue))
                                                     select p).ToList();
                                break;
                            case "LESS_THAN":
                                currentResult = (from p in filterGroup
                                                 where (float.Parse(p.GetType().GetProperty(filterDataField).GetValue(p).ToString()) < float.Parse(filterValue))
                                                     select p).ToList();
                                break;
                            case "GREATER_THAN_OR_EQUAL":
                                currentResult = (from p in filterGroup
                                                 where (float.Parse(p.GetType().GetProperty(filterDataField).GetValue(p).ToString()) >= float.Parse(filterValue))
                                                     select p).ToList();
                                break;
                            case "LESS_THAN_OR_EQUAL":
                                currentResult = (from p in filterGroup
                                                 where (float.Parse(p.GetType().GetProperty(filterDataField).GetValue(p).ToString()) <= float.Parse(filterValue))
                                                     select p).ToList();
                                break;
                            case "STARTS_WITH_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().StartsWith(filterValue))
                                                     select p).ToList();
                                break;
                            case "STARTS_WITH":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().StartsWith(filterValue, StringComparison.CurrentCultureIgnoreCase))
                                                     select p).ToList();
                                break;
                            case "ENDS_WITH_CASE_SENSITIVE":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().EndsWith(filterValue))
                                                     select p).ToList();
                                break;
                            case "ENDS_WITH":
                                currentResult = (from p in filterGroup
                                                 where ((p.GetType().GetProperty(filterDataField).GetValue(p)).ToString().EndsWith(filterValue, StringComparison.CurrentCultureIgnoreCase))
                                                     select p).ToList();
                                break;
                        }

                        if (filterOperator == "or")
                        {
                            filterGroupResult.AddRange(currentResult);
                        }
                        else
                        {
                            filterGroup = currentResult;
                            filterGroupResult = currentResult;
                        }
                    }
                    filteredEmployees = filterGroupResult;
                }
                allEmployees = filteredEmployees;
             }
                 
            for (int i = pageNum * pageSize; i < allEmployees.Count && count < pageSize; i++)
            {
                employees.Add(allEmployees[i]);
                count++;
            }
            JSONData data = new JSONData();
            data.TotalRecords = allEmployees.Count;
            data.Employees = employees;
            return JsonConvert.SerializeObject(data);
        }



        [HttpPost]
        public bool AddItem(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string label = (string)token.SelectToken("label");
            SalesEmployee employee = new SalesEmployee() { Name = label };
            _context.SalesEmployees.Add(employee);
            return true;
        }

        [HttpPost]
        public bool DeleteItem(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("value");
            string label = (string)token.SelectToken("label");
            for (int i = 0; i < _context.SalesEmployees.Count; i++)
            {
                SalesEmployee currentEmployee = _context.SalesEmployees[i];
                if (currentEmployee.ID == id)
                {
                    _context.SalesEmployees.Remove(currentEmployee);
                    return true;
                }
            }
            return false;
        }
        [HttpPost]
        public bool EditItem(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("value");
            string label = (string)token.SelectToken("label");
            for (int i = 0; i < _context.SalesEmployees.Count; i++)
            {
                SalesEmployee currentEmployee = _context.SalesEmployees[i];
                if (currentEmployee.ID == id)
                {
                    currentEmployee.Name = label;

                    return true;
                }
            }
            return false;
        }

        [HttpPost]
        public bool Add(string jsonData)
        {
            SalesEmployee employee = (SalesEmployee)JsonConvert.DeserializeObject(jsonData, typeof(SalesEmployee));
            _context.SalesEmployees.Add(employee);
            return true;
        }

        [HttpPost]
        public bool Delete(string jsonData)
        {
            SalesEmployee employee = (SalesEmployee)JsonConvert.DeserializeObject(jsonData, typeof(SalesEmployee));
            for (int i = 0; i < _context.SalesEmployees.Count; i++)
            {
                SalesEmployee currentEmployee = _context.SalesEmployees[i];
                if (currentEmployee.ID == employee.ID)
                {
                    _context.SalesEmployees.Remove(currentEmployee);
                    return true;
                }
            }
            return false;
        }
        [HttpPost]
        public bool Edit(string jsonData)
        {
            SalesEmployee employee = (SalesEmployee)JsonConvert.DeserializeObject(jsonData, typeof(SalesEmployee));
            for (int i = 0; i < _context.SalesEmployees.Count; i++)
            {
                SalesEmployee currentEmployee = _context.SalesEmployees[i];
                if (currentEmployee.ID == employee.ID)
                {
                    currentEmployee.FirstName = employee.FirstName;
                    currentEmployee.LastName = employee.LastName;
                    currentEmployee.ProductName = employee.ProductName;
                    currentEmployee.Price = employee.Price;
                    currentEmployee.Quantity = employee.Quantity;
                    currentEmployee.Date = employee.Date;
                    currentEmployee.Available = employee.Available;
                       
                    return true;
                }
            }
            return false;
        }

        [HttpPost]
        public bool AddAppointment(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("id");
            string subject = (string)token.SelectToken("subject");
            string from = (string)token.SelectToken("from");
            string to = (string)token.SelectToken("to");
            string description = (string)token.SelectToken("description");
            string location = (string)token.SelectToken("location");
            string resourceId = (string)token.SelectToken("resourceId");

            DateTime fromDate =DateTime.Parse(from);
            DateTime toDate = DateTime.Parse(to);
            Appointment appointment = new Appointment() { Start = fromDate, End = toDate, Calendar = resourceId, Description = description, ID = id, Location = location, Name = subject };
            _context.Appointments.Add(appointment);
            return true;
        }

        [HttpPost]
        public bool DeleteAppointment(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("id");
            string subject = (string)token.SelectToken("subject");
            string from = (string)token.SelectToken("from");
            string to = (string)token.SelectToken("to");
            string description = (string)token.SelectToken("description");
            string location = (string)token.SelectToken("location");
            string resourceId = (string)token.SelectToken("resourceId");
            for (int i = 0; i < _context.Appointments.Count; i++)
            {
                Appointment currentAppointment = _context.Appointments[i];
                if (currentAppointment.ID == id)
                {
                    _context.Appointments.Remove(currentAppointment);
                    return true;
                }
            }
            return false;
        }
        [HttpPost]
        public bool EditAppointment(string jsonData)
        {
            JToken token = JObject.Parse(jsonData);
            string id = (string)token.SelectToken("id");
            string subject = (string)token.SelectToken("subject");
            string from = (string)token.SelectToken("from");
            string to = (string)token.SelectToken("to");
            string description = (string)token.SelectToken("description");
            string location = (string)token.SelectToken("location");
            string resourceId = (string)token.SelectToken("resourceId");
            DateTime fromDate = DateTime.Parse(from);
            DateTime toDate = DateTime.Parse(to);
            for (int i = 0; i < _context.Appointments.Count; i++)
            {
                Appointment currentAppointment = _context.Appointments[i];
                if (currentAppointment.ID == id)
                {
                    currentAppointment.Calendar = resourceId;
                    currentAppointment.Description = description;
                    currentAppointment.End = toDate;
                    currentAppointment.Start = fromDate;
                    currentAppointment.Location = location;
                    currentAppointment.Name = subject;
                    return true;
                }
            }
            return false;
        }
        // Bar Gauge
        public ActionResult BarGauge(string theme)
        {
            ViewData["Theme"] = theme;
            return View("BarGauge/BarGauge", _context);
        }
        // Bullet Chart
        public ActionResult BulletChart(string theme)
        {
            ViewData["Theme"] = theme;
            return View("BulletChart/BulletChart", _context);
        }
        public ActionResult BulletChartRangeStyling(string theme)
        {
            ViewData["Theme"] = theme;
            return View("BulletChart/BulletChartRangeStyling", _context);
        }
        // Button
        public ActionResult Button(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Button/Button", _context);
        } 
        // ButtonGroup
        public ActionResult ButtonGroup(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ButtonGroup/ButtonGroup", _context);
        }
        
        // Calendar
        public ActionResult Calendar(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Calendar/Calendar", _context);
        }
        // Chart
        public ActionResult Chart(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/Chart", _context.BrowserShares);
        }
        public ActionResult ChartBubble(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/ChartBubble", _context.ChartSalesData);
        }
        public ActionResult ChartScatter(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/ChartScatter", _context.ChartSalesData);
        }
        public ActionResult ChartColumn(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/ChartColumn", _context.ChartData);
        }
        public ActionResult ChartLine(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/ChartLine", _context.ChartData);
        }

        public ActionResult ChartRangeSelector(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Chart/ChartRangeSelector", _context.StockData);
        }
        // CheckBox
        public ActionResult CheckBox(string theme)
        {
            ViewData["Theme"] = theme;
            return View("CheckBox/CheckBox", _context);
        }  
        // ColorPicker
        public ActionResult ColorPicker(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ColorPicker/ColorPicker", _context);
        }
        // ComboBox
        public ActionResult ComboBox(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ComboBox/ComboBox", _context.SalesEmployees);
        }
        // ComplexInput
        public ActionResult ComplexInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ComplexInput/ComplexInput", _context);
        }
        // DockPanel
        public ActionResult DockPanel(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DockPanel/DockPanel", _context);
        }   
        // DragDrop
        public ActionResult DragDrop(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DragDrop/DragDrop", _context);
        }
        // DataTable
        public ActionResult DataTable(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTable", _context.Employee.ToList());
        }
        public ActionResult DataTableSorting(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTableSorting", _context.Employee.ToList());
        }
        public ActionResult DataTableRowDetails(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTableRowDetails", _context.SalesEmployees.ToList());
        }
        public ActionResult DataTableServerPaging(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTableServerPaging", _context.SalesEmployees.ToList());
        }
        public ActionResult DataTableFiltering(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTableFiltering", _context.SalesEmployees.ToList());
        }
        public ActionResult DataTableLocalization(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DataTable/DataTableLocalization", _context.Employee.ToList());
        }
        // DateTimeInput
        public ActionResult DateTimeInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DateTimeInput/DateTimeInput", _context);
        }
        // Docking
        public ActionResult Docking(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Docking/Docking", _context);
        }
        // DockingLayout
        public ActionResult DockingLayout(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DockingLayout/DockingLayout", _context.TreeData);
        }
        // DropDownButton
        public ActionResult DropDownButton(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DropDownButton/DropDownButton", _context);
        }

        // DropDownList
        public ActionResult DropDownList(string theme)
        {
            ViewData["Theme"] = theme;
            return View("DropDownList/DropDownList", _context.SalesEmployees);
        }

        // Editor
        public ActionResult Editor(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Editor/Editor", _context);
        }
        // Expander
        public ActionResult Expander(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Expander/Expander", _context);
        }
        // FileUpload
        public ActionResult FileUpload(string theme)
        {
            ViewData["Theme"] = theme;
            return View("FileUpload/FileUpload", _context);
        }
        // FormattedInput
        public ActionResult FormattedInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("FormattedInput/FormattedInput", _context);
        }
        // Gauge
        public ActionResult Gauge(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Gauge/Gauge", _context);
        }
        // GET: /Widgets//Grid
        public ActionResult Grid(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/Grid", _context.Employee.ToList());
        }
        public ActionResult PivotGrid(string theme)
        {
            ViewData["Theme"] = theme;
            return View("PivotGrid/PivotGrid", _context.PivotDataRows.ToList());
        }
        public ActionResult GridAggregates(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridAggregates", _context.SalesEmployees.ToList());
        }
        public ActionResult GridCellEdit(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridCellEdit", _context.SalesEmployees.ToList());
        }
        public ActionResult GridCellsRendering(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridCellsRendering", _context.SalesEmployees.ToList());
        }
        public ActionResult GridEdit(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridEdit", _context.SalesEmployees.ToList());
        }
        public ActionResult GridExport(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridExport", _context.SalesEmployees.ToList());
        }

        public ActionResult GridFilter(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridFilter", _context.Employee.ToList());
        }
        public ActionResult GridGrouping(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridGrouping", _context.SalesEmployees.ToList());
        }
        public ActionResult GridLocalization(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridLocalization", _context.Employee.ToList());
        }

        public ActionResult GridRightToLeft(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridRightToLeft", _context.Employee.ToList());
        }
        public ActionResult GridRowDetails(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridRowDetails", _context.SalesEmployees.ToList());
        }
        public ActionResult GridServerEditPagingSortingFiltering(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridServerPaging", _context.SalesEmployees.ToList());
        }

        public ActionResult GridServerPaging(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridServerPaging", _context.SalesEmployees.ToList());
        }

        public ActionResult GridSort(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Grid/GridSort", _context.SalesEmployees.ToList());
        }
        // Input
        public ActionResult Input(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Input/Input", _context.SalesEmployees.ToList());
        }
        // Kanban
        public ActionResult Kanban(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Kanban/Kanban", _context);
        }
        // Knob
        public ActionResult Knob(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Knob/Knob", _context);
        }
        // Knob
        public ActionResult Layout(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Layout/Layout", _context.TreeData);
        }
        // LinearGauge
        public ActionResult LinearGauge(string theme)
        {
            ViewData["Theme"] = theme;
            return View("LinearGauge/LinearGauge", _context);
        }
        // LinkButton
        public ActionResult LinkButton(string theme)
        {
            ViewData["Theme"] = theme;
            return View("LinkButton/LinkButton", _context);
        }
        // ListBox
        public ActionResult ListBox(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ListBox/ListBox", _context.SalesEmployees);
        }
        // ListMenu
        public ActionResult ListMenu(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ListMenu/ListMenu", _context);
        }
        // MaskedInput
        public ActionResult MaskedInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("MaskedInput/MaskedInput", _context);
        }
        // Menu
        public ActionResult Menu(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Menu/Menu", _context);
        }
        // NavigationBar
        public ActionResult NavigationBar(string theme)
        {
            ViewData["Theme"] = theme;
            return View("NavigationBar/NavigationBar", _context);
        }
        // Notification
        public ActionResult Notification(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Notification/Notification", _context);
        }
        // NumberInput
        public ActionResult NumberInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("NumberInput/NumberInput", _context);
        }
        // Panel
        public ActionResult Panel(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Panel/Panel", _context);
        }
        // PasswordInput
        public ActionResult PasswordInput(string theme)
        {
            ViewData["Theme"] = theme;
            return View("PasswordInput/PasswordInput", _context);
        }
        // Popover
        public ActionResult Popover(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Popover/Popover", _context);
        }

        // ProgressBar
        public ActionResult ProgressBar(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ProgressBar/ProgressBar", _context);
        }
        // RadioButton
        public ActionResult RadioButton(string theme)
        {
            ViewData["Theme"] = theme;
            return View("RadioButton/RadioButton", _context);
        }
        // Rating
        public ActionResult Rating(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Rating/Rating", _context);
        }
        public ActionResult RangeSelector(string theme)
        {
            ViewData["Theme"] = theme;
            return View("RangeSelector/RangeSelector", _context);
        }
        // Ribbon
        public ActionResult Ribbon(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Ribbon/Ribbon", _context);
        }
        // Scheduler
        public ActionResult Scheduler(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Scheduler/Scheduler", _context);
        }
        public ActionResult SchedulerServerProcessing(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Scheduler/SchedulerServerProcessing", _context);
        }
        public ActionResult SchedulerTimelineViews(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Scheduler/SchedulerTimelineViews", _context);
        }
        public ActionResult SchedulerTimeRuler(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Scheduler/SchedulerTimeRuler", _context);
        }
        // Scrollbar
        public ActionResult Scrollbar(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Scrollbar/Scrollbar", _context);
        }
        // ScrollView
        public ActionResult ScrollView(string theme)
        {
            ViewData["Theme"] = theme;
            return View("ScrollView/ScrollView", _context);
        }
        // Slider
        public ActionResult Slider(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Slider/Slider", _context);
        }
        // Splitter
        public ActionResult Splitter(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Splitter/Splitter", _context);
        }
        // SwitchButton
        public ActionResult SwitchButton(string theme)
        {
            ViewData["Theme"] = theme;
            return View("SwitchButton/SwitchButton", _context);
        }
        // Tabs
        public ActionResult Tabs(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Tabs/Tabs", _context);
        }
        // TextArea
        public ActionResult TextArea(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TextArea/TextArea", _context.SalesEmployees);
        }
        // Toolbar
        public ActionResult Toolbar(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Toolbar/Toolbar", _context);
        }
        // Tooltip
        public ActionResult Tooltip(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Tooltip/Tooltip", _context);
        }
        // Tree
        public ActionResult Tree(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Tree/Tree", _context.TreeData);
        }
        public ActionResult TreeHtmlStructure(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Tree/TreeHtmlStructure", _context);
        }

        // Tag Cloud
        public ActionResult TagCloud(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TagCloud/TagCloud", _context.SalesEmployees.ToList());
        }

        // Tree Grid

        public ActionResult TreeGrid(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TreeGrid/TreeGrid", _context.Employee.ToList());
        }
        public ActionResult TreeGridLoadOnDemand(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TreeGrid/TreeGridLoadOnDemand", _context.SalesEmployees.ToList());
        }
        public ActionResult TreeGridConditionalFormatting(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TreeGrid/TreeGridConditionalFormatting", _context.SalesEmployees.ToList());
        }
        public ActionResult TreeGridLocalization(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TreeGrid/TreeGridLocalization", _context.Employee.ToList());
        }
        // TreeMap
        public ActionResult TreeMap(string theme)
        {
            ViewData["Theme"] = theme;
            return View("TreeMap/TreeMap", _context.Employee);
        }
        // Validator
        public ActionResult Validator(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Validator/Validator", _context.Employee);
        }
        // Window
        public ActionResult Window(string theme)
        {
            ViewData["Theme"] = theme;
            return View("Window/Window", _context.SalesEmployees);
        }



        // GET: /Widgets//Tree
        //public ActionResult Tree()
        //{
        //    object items = Request.Form["tree"];
        //    if (null == items)
        //        items = "";
        //    ViewData["Tree Items"] = items;
        //    return View();
        //}

        [HttpPost]
        public void Year()
        {
            this._context.ContractDuration = Contract.Year;
        }
        [HttpPost]
        public void HalfYear()
        {
            this._context.ContractDuration = Contract.HalfYear;
        }
        [HttpPost]
        public void QuarterYear()
        {
            this._context.ContractDuration = Contract.QuarterYear;
        }
        [HttpPost]
        public void Month()
        {
            this._context.ContractDuration = Contract.Month;
        }

        [HttpPost]
        public void Increment()
        {
            this._context.ClickCount++;
        }

        [HttpPost]
        public int ButtonValue()
        {
            return _context.ClickCount;
        }

        // GET: /Widgets//Store
        public ActionResult Store()
        {
            string shirt = Request.Form["shirt"];
            if (shirt != null)
            {
                string price = "0.00";
                switch (shirt)
                {
                    case "Brown":
                        price = "5.00";
                        break;
                    case "Red":
                        price = "6.00";
                        break;
                    case "Green":
                        price = "7.75";
                        break;
                    case "Black":
                        price = "8.25";
                        break;
                    case "White":
                        price = "9.50";
                        break;
                }
                return Json(price);
            }

            ViewData["Color"] = Request.Form["shirtDropdownList"];
            ViewData["Size"] = Request.Form["shirtDropDownListSize"];
            ViewData["Price"] = Request.Form["priceInput"];

            return View();
        }

        // /Widgets/LoginFailed
        public ActionResult LoginFailed()
        {
            return View();
        }

        // /Widgets/Login
        [HttpPost]
        public ActionResult Login()
        {
            ViewData["username"] = Request.Form["username"];
            ViewData["password"] = Request.Form["password"];
            ViewData["rememberme"] = Request.Form["rememberMe"];

            if (Request.Form["username"] != "admin" || Request.Form["password"] != "admin123")
            {
                return RedirectToAction("LoginFailed");
            }

            return View();
        }

        // /Widgets/RegistrationForm
        public ActionResult RegistrationForm(string theme)
        {
            ViewData["Theme"] = theme;
            return View("RegistrationForm");
        }

        // /Widgets/LoginForm
        public ActionResult LoginForm(string theme)
        {
            ViewData["Theme"] = theme;
            return View("LoginForm");
        }
        [HttpPost]
        public FileContentResult UploadFile()
        {
            FormFileCollection files = (FormFileCollection)Request.Form.Files;
   
            Stream file = files[0].OpenReadStream();
            byte[] binaryWriteArray = new byte[file.Length];
            file.Read(binaryWriteArray, 0,
              (int)file.Length);
            string contentDisposition = Request.Form.Files[0].ContentDisposition;

            string fileName = contentDisposition.Substring(contentDisposition.IndexOf("filename=") + 10).Replace("\"", "");
            FileContentResult result = new FileContentResult(binaryWriteArray, files[0].ContentType)
            {
                FileDownloadName = fileName

            };
            file.Dispose();
            return result; 
        }


        [HttpPost]
        public ActionResult CarFeatures(string data)
        {
            for (int i = 0; i < _context.CarFeatures.Count; i++)
            {
                bool newValue = Boolean.Parse(Request.Form["carFeatures"][i]);
                _context.CarFeatures[i] = new KeyValuePair<string, bool>(_context.CarFeatures[i].Key, newValue);
            }
            return View("CheckBox/CheckBox", _context);
        }
    }
}
