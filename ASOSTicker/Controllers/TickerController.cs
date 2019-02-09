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
            var data = csvHelper.GetCSVData();
            List<StoryStuff> stories = new List<StoryStuff>();
            char[] delim = new char[] { ',' };
            foreach(string row in data)
            {
                string[] results = row.Split(delim);
                StoryStuff story = new StoryStuff()
                {
                    sport = results[0],
                    story = results[1],
                };
                stories.Add(story);
            }
            return stories;
        }
    }
}