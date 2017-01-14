using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public virtual ICollection<Product> Products { get; set; }

        public AppointmentDataFields fields = new AppointmentDataFields() { From = "start", To = "end" };
        public WorkTime time = new WorkTime() { FromHour = 10, ToHour = 20, FromDayOfWeek = 1, ToDayOfWeek = 6 };
        public List<SchedulerView> views = new List<SchedulerView>()
        {
             new SchedulerView(){Type= SchedulerViewType.DayView},
             new SchedulerView(){Type= SchedulerViewType.WeekView},
             new SchedulerView(){Type= SchedulerViewType.MonthView}
        };
        public DateTime? date = new DateTime(2016, 6, 6);
    }

    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
    }
}
