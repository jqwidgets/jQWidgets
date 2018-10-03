using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class BrowserShare
    {
        public string Browser
        {
            get;
            set;
        }
        public double Share
        {
            get;
            set;
        }
    }
}
