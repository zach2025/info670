# Final Project - Replay: A Music Review App

## Design & Purpose
Replay is a music reviewing app which allows users to search for any distributed song on Spotify and give it a rating on a scale from 0 to 5, in 0.5 increments. The app is targeted for both music lovers who need to keep track of all their favorites from the hundreds of songs they have listened to, to hobbyists who simply want to track the songs they have heard recently with the upside of rating them to understand where their taste lies in both genres and artists.


## Usage with Screenshots

User landing page where a user can see all of their reviews, using the 'Get Latest Replay' button to get the latest reviews

![Home Screen](<./images/HomeScreen.png>)

If a user clicks the floating action button in the bottom right of the home screen, the screen navigates to the search page, where the last search is stored

![Empty Search](<./images/EmptySearch.png>)

If a user clicks the 'Search' button, an API call using the inputed search query will be sent a send back a list of all the songs related to the query

![Query Search](<./images/QuerySearch.png>)

If a sees a song they want to review, they simply click the song and can input the star/numerical rating and save it, sending you back to the home screen upon successful save

![Review](<./images/Review.png>)

Once a user clicks the 'Get Latest Replay' button, the latest reviews will appear

![Home Refresh](<./images/HomeRefresh.png>)

If a user clicks on a review/Replay, it navigates to a new screen to expand the view of the song's information, as well as a button to open the song in Spotify

![Replay](<./images/Replay.png>)


## Database

zt86_replay: MySQL Database based on the schema wk77_INFO300_202103
![MySQL Database Schema](<./images/DatabaseSchema.png>)


## API

### getMedicine
HTTP Method: GET

Endpoint: https://www.cs.drexel.edu/~zt86/getReplays.php

Query Parameters: None

Response:

    Status Code: 200 OK

    Response Body:
    [
        {
            "id": "1",
            "track": "Here Comes The Sun - Remastered 2009",
            "artist": "The Beatles",
            "review": 3,
            "link": "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2",
            "image": "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25"
        },
        ...
    ]


### addMedicine
HTTP Method: GET

Endpoint: https://www.cs.drexel.edu/~zt86/addReplay.php?track=${track}&artist=${artist}&review=${rating}&link=${link}&image=${image}

Query Parameters:

	track: string

	artists: string

	rating: string

	link: string

	image: string

Response:
    Status Code: 200 OK

    Response Body: 1

## Environment Variables
A key aspect of this app is it's integration with Spotify to not only handle Spotify outbound links, but also for the search and song information retrieval. To utilize it in this app, a client id and secret are needed, however this is sensitive information, so to use your own for development and testing purposes, follow these steps below (Note: These steps are accurate as of June 12, 2024)

Head to https://developer.spotify.com/dashboard, login with a Spotify developer account (should be the same as any Spotify account), and create an app using the 'Create app' button

![Spotify Dev](<./images/SpotifyDev.png>)

After, continue with creating the necessary fields as you please, these values do not really matter unless you plan on using the Spotify app for any other purposes

![Create Spotify App](<./images/CreateSpotifyApp.png>)

Once created, click the 'Settings' button to get to the 'Basic Information' screen where you will find your Client ID and, after clicking 'View client secret', Client Secret. These can then be pasted as is into each field in the .env file respecitvely

![Basic Info](<./images/BasicInfo.png>)