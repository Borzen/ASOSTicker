using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASOSTicker.Helpers;


namespace ASOSTicker.Controllers
{
    public class StoryStuff
    {
        public string sport { get; set; }
        public string story { get; set; }
        public bool currentstory { get; set; }
    }

    public class TickerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<StoryStuff> GetSheetData()
        {
            //GoogleSheetsHelper gsHelper = new GoogleSheetsHelper();
            //var data = gsHelper.getSpreadSheets("1uecbj1KIfGPwmkYRZWYS9FFYc7JmQMCIjaTva26x_rQ", "ticker!A2:B");
            CSVHelper csvHelper = new CSVHelper();

            List<StoryStuff> stories = new List<StoryStuff>();
            return null;
        }
    }
}