using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace jQWidgets.AspNet.Core.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID
        {
            get;
            set;
        }
        public int? ManagerID
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

        public string Title
        {
            get;
            set;
        }

        public string Country
        {
            get;
            set;
        }

        public string City
        {
            get;
            set;
        }

        public string Address
        {
            get;
            set;
        }

        public DateTime HireDate
        {
            get;
            set;
        }

        public DateTime BirthDate
        {
            get;
            set;
        }
    }

 

 
  
}
