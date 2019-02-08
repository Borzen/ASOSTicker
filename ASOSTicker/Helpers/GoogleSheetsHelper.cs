using Google.Apis.Auth.OAuth2;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System;
using System.IO;
using System.Threading;
using System.Collections.Generic;

namespace ASOSTicker.Helpers
{
    public class GoogleSheetsHelper
    {
        string[] Scopes = { SheetsService.Scope.SpreadsheetsReadonly };
        string ApplicationName = "ASOSTicker";

        UserCredential credential;

        string credPath;

        SheetsService service;

        public GoogleSheetsHelper()
        {
            using (var stream = new FileStream(@"credentials.json", FileMode.Open, FileAccess.Read))
            {
                credPath = "token.json";
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
            }
            service = new SheetsService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "asosticker",
            });
        }

        public IList<IList<object>> getSpreadSheets(string spreadsheetID, string range)
        {
            SpreadsheetsResource.ValuesResource.GetRequest request = service.Spreadsheets.Values.Get(spreadsheetID, range);
            ValueRange response = request.Execute();
            return response.Values;
        }
    }
}
