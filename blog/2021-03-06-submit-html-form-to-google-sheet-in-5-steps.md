---
title: '[Updated] Submit HTML Form To Google Sheet in 5 Steps'
date: 2021-03-06T09:20:10+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /submit-html-form-to-google-sheet-in-5-steps/



---
Many times while working on static sites we need HTML forms to embeded on our site, We found several articles submitting HTML form to Google Sheets, but in 2021 all of them are out of date, this is latest method you should follow to Submit HTML Form To Google Sheet.

## Making Your HTML Form

Firstly you should have HTML form with you, if you don't have any form now, then for example you can freely copy paste our form, see example **Registration-file.html** form.

Registration-file.html

```vb title="file.vb"
Google Sheet , if you don't have one.

Now let's link google form to sheet, So that we can submit HTML Form To Google Sheet.

Click on **Script Editor**, Now it will open editor in next screen,
![Submit HTML Form To Google Sheet](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image.png) 



Now we will rename Our project , To rename just click on Untitled Project & in popup enter new project name and click **rename.**
![Submit HTML Form To Google Sheet](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-1.png) 

Now remove firstly written function from there and copy paste code below there, and click on **save button icon** , Once saved we will move forward for **initial setup**, For initial setup,

```vb title="file.vb"
function doGet(e){
 return handleResponse(e);
}
// Enter sheet name where data is to be written below
 var SHEET_NAME = "Sheet1";
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service
function handleResponse(e) {
 // shortly after my original solution Google announced the LockService[1]
 // this prevents concurrent access overwritting data
 // [1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
 // we want a public lock, one that locks for all invocations
 var lock = LockService.getPublicLock();
 lock.waitLock(30000); // wait 30 seconds before conceding defeat.
 try {
 // next set where we write the data - you could write to multiple/alternate destinations
 var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
 var sheet = doc.getSheetByName(SHEET_NAME);
 // we'll assume header is in row 1 but you can override with header_row in GET/POST data
 var headRow = e.parameter.header_row || 1;
 var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
 var nextRow = sheet.getLastRow()+1; // get next row
 var row = [];
 // loop through the header columns
 for (i in headers){
 if (headers[i] == "Timestamp"){ // special case if you include a 'Timestamp' column
 row.push(new Date());
 } else { // else use header name to get data
 row.push(e.parameter[headers[i]]);
 }
 }
 // more efficient to set values as [][] array than individually
 sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
 // return json success results
 return ContentService
 .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
 .setMimeType(ContentService.MimeType.JSON);
 } catch(e){
 // if error return this
 return ContentService
 .createTextOutput(JSON.stringify({"result":"error", "error": e}))
 .setMimeType(ContentService.MimeType.JSON);
 } finally { //release lock
 lock.releaseLock();
 }
}
function setup() {
 var doc = SpreadsheetApp.getActiveSpreadsheet();
 SCRIPT_PROP.setProperty("key", doc.getId());
}
```




![](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-3.png) 

Click on Setup Button to start setup

Once you start setup it will show you message that **Authorization Required**, Now let's authorize it,

It will ask you for some permissions , So simply **allow** all the permission , So that we can submit html form to google sheets,

Next step will be deployment, 
![Submit HTML Form To Google Sheet](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-4.png) 

Click on **Deploy** button and Select option **New deployment**

In Select Type select option **Web app** from list, this is last step on Google sheet site,
![Submit HTML Form To Google Sheet](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-6-1024x731.png) 

In **configuration** in **Description**, enter description of project ( Not required ) , this is not compulsory

In next box in **Execute** as box you will see **your email** , keep as it is,

In last **Who has access** select option **Anyone**, & Click on Deploy 
![Submit HTML Form To Google Sheet](http://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-7-1024x730.png) 

From this window copy URL & keep it safe,

## Creating File To Submit Data

In last step create file save-on-drive.html and just update url you copied from Google site, that's it, Your app is ready, You can use,

save-on-drive.html


```
"https://script.google.com/macros/s/**your-script-id**/exec?FirstName=";
final_url=final_url+FirstName+"&LastName="+LastName+"&Email="+Email+"&MobileNo="+MobileNo;
request.open('GET', final_url);
request.send();

## Live Preview ( How it Works )

Registration form

## Video 


## Download Complete Project

This project example is now available for free, Get it while it's free.

Download complete source code from link below


 
 [Download Source Code](https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/html/html-form-submit-google-sheet-exmple.rar)
 

```
