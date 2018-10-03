using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class ChartSalesDataItem
    {
        public double YoYGrowth
        {
            get;
            set;
        }
        public double YoYGrowthQ1
        {
            get;
            set;
        }
        public double YoYGrowthQ2
        {
            get;
            set;
        }
        public int SalesQ2
        {
            get;
            set;
        }
        public int SalesQ1
        {
            get;
            set;
        }
        public string City
        {
            get;
            set;
        }
    }
}
