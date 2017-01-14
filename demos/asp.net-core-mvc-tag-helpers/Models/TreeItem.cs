using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class TreeItem
    {
        public bool Expanded
        {
            get;
            set;
        }
        public string Label
        {
            get;
            set;
        }

        public string Icon
        {
            get;
            set;
        }

        public List<TreeItem> Items
        {
            get;
            set;
        }
    }
}
