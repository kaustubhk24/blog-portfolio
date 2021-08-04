---
title: Free Bank IFSC API
date: 2021-05-01T02:56:37+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /free-bank-ifsc-api/




---
Free Bank IFSC API, If you are making app that is using IFSC code as input, then you must show bank details after user enter's their details, So user can verify it, To do this you will need data of banks and it's not easy to maintain data of around 3 Lakh bank branches in our country and there is no standard api yet provided by RBI ( Reserve Bank of India ) to do this,

There are some api's but they are paid, So you have to pay per request, they charge you because they also have to pay for their hosting's , servers & maintenance etc.

After searching for API's for indian banks we found one GitHub repository, which offers free banking API, You don't have to pay anything for using this,as it is open source you can always use this api without any worry, So In this tutorial we will guide you from beginning to end how to use this api.

## How to use Free Bank IFSC API

Use API Base URL as : 

This guide is for API version : V1 

Incase in future if api receives any update , then you will find the complete guide here, You can subscribe our newsletter to get updates & notifications,

You can also fork repository here



[Fork Repository](https://github.com/kaustubhk24/Indian-Banks-Data/)



You may want to follow author here for updates

* 
* 



## 1. API To Get Bank Details Using IFSC

If you have the IFSC Code of Bank & you want to get complete details of the respective bank, You need to send�**HTTP GET**�Request to the given URL 
`https://bank-apis.justinclicks.com/API/V1/IFSC/IFSC_CODE_OF_BANK/` 
Make sure you are using proper casing as shown in the above URL,

Make sure you pass the IFSC code only in UPPERCASE. 
For example, if you want to access data of branch having IFSC code as �**MAHB0001012**�, then your request URL will be 
`https://bank-apis.justinclicks.com/API/V1/IFSC/MAHB0001012/`

You will be get response in JSON , for example

```vb title="file.vb"
{
 "ADDRESS":"TAL-DAUND-PUNE",
 "BANK":"Bank of Maharashtra",
 "BANKCODE":"MAHB",
 "BRANCH":"KHUTBHAV",
 "CENTRE":"KHUTBAO",
 "CITY":"KHUTBAO",
 "CONTACT":"284252",
 "DISTRICT":"PUNE",
 "IFSC":"MAHB0001012",
 "IMPS":true,
 "MICR":"412014009",
 "NEFT":true,
 "RTGS":true,
 "STATE":"MAHARASHTRA",
 "SWIFT":"",
 "UPI":true
}
```

See Example
![Free Bank IFSC API](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/05/image-1024x408.png) 

## 2. API To Get Data By Selections

This API useful if you don't know the IFSC code of the bank but know it's location, So as API as follows to Get Bank Data

### [](https://github.com/kaustubhk24/Indian-Banks-Data/wiki/V1-Documentation#step-1-get-state-list)Step 1: Get State List 


URL�`https://bank-apis.justinclicks.com/API/V1/STATE/` 
In response, you will get the names of STATES available

```vb title="file.vb"

[
 "ANDAMAN AND NICOBAR ISLAND",
 "ANDHRA PRADESH",
 "ARUNACHAL PRADESH",
 "ASSAM",
 "BIHAR",
 "CHANDIGARH",
 "CHHATTISGARH",
 "DADRA AND NAGAR HAVELI",
 "DAMAN AND DIU",
 "DELHI",
 "GOA",
 "GUJARAT",
 "GUJRAT",
 "HARYANA",
 "HIMACHAL PRADESH",
 "JAMMU AND KASHMIR",
 "JHARKHAND",
 "KARNATAKA",
 "KERALA",
 "LAKSHADWEEP",
 "MADHYA PRADESH",
 "MAHARASHTRA",
 "MANIPUR",
 "MEGHALAYA",
 "MIZORAM",
 "NAGALAND",
 "NARSINGHPUR",
 "NEW DELHI",
 "ODISHA",
 "PONDICHERRY",
 "PUNJAB",
 "RAJASTHAN",
 "SIKKIM",
 "TAMILNADU",
 "TELANGANA",
 "TRIPURA",
 "UTTAR PRADESH",
 "UTTARAKHAND",
 "WEST BENGAL"
]
```

### Step 2: Get District List

Now In this Step, we will pass the STATE name in Request, this will return the districts names list, 
URL Format�`https://bank-apis.justinclicks.com/API/V1/STATE/STA_\_NAME/`�, 
Example�`https://bank-apis.justinclicks.com/API/V1/STATE/MAHARASHTRA/`

### [](https://github.com/kaustubhk24/Indian-Banks-Data/wiki/V1-Documentation#step-3-get-citys-list)Step 3: Get City's List

To get city list 
URL Format�`https://bank-apis.justinclicks.com/API/V1/STATE/STA_\_NAME/DISTRI_\_NAME/` 
Example�`https://bank-apis.justinclicks.com/API/V1/STATE/MAHARASHTRA/PUNE/`

### [](https://github.com/kaustubhk24/Indian-Banks-Data/wiki/V1-Documentation#step-4-get-centers-list)Step 4: Get Center's List

To get Center list 
URL Format�`https://bank-apis.justinclicks.com/API/V1/STATE/STA_\_NAME/DISTRI_\_NAME/CI_\_NAME` 
Example�`https://bank-apis.justinclicks.com/API/V1/STATE/MAHARASHTRA/PUNE/KHUTBAO`

### [](https://github.com/kaustubhk24/Indian-Banks-Data/wiki/V1-Documentation#step-5-get-branch-list)Step 5: Get Branch List

To get Branch list 
URL Format�`https://bank-apis.justinclicks.com/API/V1/STATE/STA_\_NAME/DISTRI_\_NAME/CI_\_NAME/CENT_\_NAME/` 
Example�`https://bank-apis.justinclicks.com/API/V1/STATE/MAHARASHTRA/PUNE/KHUTBAO/KHUTBAO/`�we made .json files for each branch hence it will give the list of�*_ank\\_ame\\_.json**�Example of response�`["KHUTBHAV.json"]`

### [](https://github.com/kaustubhk24/Indian-Banks-Data/wiki/V1-Documentation#step-6--get-branch-data)Step 6 : Get Branch Data:

To get Branch list 
URL Format�`https://bank-apis.justinclicks.com/API/V1/STATE/STA_\_NAME/DISTRI_\_NAME/CI_\_NAME/CENT_\_NAME/BRAN_\_NAME.json` 
Example�`https://bank-apis.justinclicks.com/API/V1/STATE/MAHARASHTRA/PUNE/KHUTBAO/KHUTBAO/KHUTBHAV.json` 
This will send a response of bank details in JSON format, for example

```vb title="file.vb"
{
 "ADDRESS":"TAL-DAUND-PUNE",
 "BANK":"Bank of Maharashtra",
 "BANKCODE":"MAHB",
 "BRANCH":"KHUTBHAV",
 "CENTRE":"KHUTBAO",
 "CITY":"KHUTBAO",
 "CONTACT":"284252",
 "DISTRICT":"PUNE",
 "IFSC":"MAHB0001012",
 "IMPS":true,
 "MICR":"412014009",
 "NEFT":true,
 "RTGS":true,
 "STATE":"MAHARASHTRA",
 "SWIFT":"",
 "UPI":true
}
```

See example
![Free Bank IFSC API](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/05/image-1-1024x372.png) 

## 3 . Get Excel File of Any Bank

To get Excel File�`.xlsx`�of any branch request URL below URL Format�`https://bank-apis.justinclicks.com/API/V1/Excel/` 
in this request, your response will be a list of Banks excel files available 
Example

```vb title="file.vb"
[
"bank_name_1.xlsx",
"bank_name_2.xlsx",'
"bank_name_3.xlsx"
]

```

To download the excel from the Given list URL Format

```vb title="file.vb"

https://bank-apis.justinclicks.com/API/V1/Excel/bank_name_1.xlsx
```

see example


![Free Bank IFSC API](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/05/image-2-1024x369.png) 

## Video Guide

