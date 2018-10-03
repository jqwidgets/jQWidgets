using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class StockPrice
    {
        public DateTime Date
        {
            get;
            set;
        }
        public double Open
        {
            get;
            set;
        }
        public double High
        {
            get;
            set;
        }
        public double Low
        {
            get;
            set;
        }
        public double Close
        {
            get;
            set;
        }
        public double Volume
        {
            get;
            set;
        }
        public double AdjClose
        {
            get;
            set;
        }
    }

}
