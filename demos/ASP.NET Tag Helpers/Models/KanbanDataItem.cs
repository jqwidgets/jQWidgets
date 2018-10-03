using jQWidgets.AspNetCore.Mvc.TagHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class KanbanDataItem
    {
        public int Id
        {
            get;
            set;
        }
        public string State
        {
            get;
            set;
        }
        public string Label
        {
            get;
            set;
        }
        public string Tags
        {
            get;
            set;
        }
        public string Hex
        {
            get;
            set;
        }
        public int ResourceId
        {
            get;
            set;
        }
    }
}
