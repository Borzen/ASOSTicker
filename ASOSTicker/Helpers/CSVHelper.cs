using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace ASOSTicker.Helpers
{
    public class CSVHelper
    {
        string filepath = "asos.csv";

        public List<string> GetCSVData()
        {
            return File.ReadLines(filepath).ToList();
        }
    }
}
