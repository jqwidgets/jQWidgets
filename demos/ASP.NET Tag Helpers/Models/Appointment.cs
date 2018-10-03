using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class Appointment
    {
        [Key]
        public string ID
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Description
        {
            get;
            set;
        }

        public string Location
        {
            get;
            set;
        }


        public DateTime Start
        {
            get;
            set;
        }

        public DateTime End
        {
            get;
            set;
        }

        public string Calendar
        {
            get;
            set;
        }
    }

}
