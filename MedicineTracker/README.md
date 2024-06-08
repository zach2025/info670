# Assignment 4 - Medicine Tracker App

## Design & Purpose
This is a medicine tracker app to help keep a log of what medicines, how much, and at what time you have taken them. When a user is about to take a medicine they want to log, they simply open up the app and on the default page add the medicine and the dosage. The date and time are automatically registered once the user saves the entry and the entry and previous ones can be viewed in a list with all the relevent information. This helps users easily track what medicines they have taken and when so they can properly take whatever dosages of their medications in the proper recommended intervals.


## Usage
The navigation bar at the bottom shows two usable tabs. The 'Add Medicine' tab, the default landing page when the app is loaded, consists of two fields for the medicine name and dosage. Once a user clicks save, that medicine name, dosage, and the current date and time are saved in a MySQL database. The other tab, labled 'View History', consists of individual entries in a list format for all the medicinal logs the user has inputed, with the name, dosage, and date and time prominently display in individual cards. When an entry is added, users can navigate to this page and click the Refresh icon to get the latest full medicine log


## Screenshots

User landing page of the 'Add Medicine' screen which allows users to enter in the medicine they are taking and the dosage

![Add Medicine](<./images/AddMedicine.png>)

If a user clicks the 'View History' tab, it shows the list of medicines logged

![Medicine Log Before](<./images/MedicineLogBefore.png>)

If a user clicks the 'Refresh' icon, it will get the most up to date medicine log and display this list

![Medicine Log After](<./images/MedicineLogAfter.png>)


## Database

zt86_medicine: MySQL Database based on the schema wk77_INFO300_202103
![MySQL Database Schema](<./images/DatabaseSchema.png>)


## API

### getMedicine
HTTP Method: GET

Endpoint: https://www.cs.drexel.edu/~zt86/getMedicine.php

Query Parameters: None

Response: 

    Status Code: 200 OK
    
    Response:
    [
        {
            "id": "1",
            "name": "Tylenol",
            "dosage": "200mg",
            "date": "Thu Jun 06 2024 22:58:05 GMT-0400 (Eastern Daylight Time)"
        },
        {
            "id": "2",
            "name": "Zyrtec",
            "dosage": "1 tablet",
            "date": "Wed Jun 05 2024 23:00:11 GMT-0400 (Eastern Daylight Time)"
        },
        {
            "id": "3",
            "name": "Benadryl",
            "dosage": "2 tablets",
            "date": "Tue Jun 04 2024 23:05:55 GMT-0400 (Eastern Daylight Time)"
        }
    ]

### addMedicine
HTTP Method: GET

Endpoint: https://www.cs.drexel.edu/~zt86/addMedicine.php?name=${name}&dosage=${dosage}&date=${datetime}

Query Parameters: 

    name: String
    
    dosage: String

    date: String

Response: 

    Status Code: 200 OK
    
    Response: 
        1