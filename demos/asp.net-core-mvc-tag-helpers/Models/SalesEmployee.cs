using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class SalesEmployee
    {
        [Key]
        public string ID
        {
            get;
            set;
        }

        public int? ReportsTo
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }
        public string FirstName
        {
            get;
            set;
        }

        public string LastName
        {
            get;
            set;
        }

        public bool Available
        {
            get;
            set;
        }

        public float Price
        {
            get;
            set;
        }

        public string ProductName
        {
            get;
            set;
        }

        public int Quantity
        {
            get;
            set;
        }

        public float Total
        {
            get;
            set;
        }


        public DateTime Date
        {
            get;
            set;
        }
    }

}
