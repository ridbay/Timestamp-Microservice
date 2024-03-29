# API Project: Timestamp Microservice

## User Stories (WIP):

The API endpoint is GET ```https://basalt-knight-1.glitch.me/api/timestamp/:date_string?```

A date string is valid if can be successfully parsed by new Date(date_string).

### Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In the test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

If the date string is valid the api returns a JSON having the structure

```{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }```
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }.


## Example Usage:

https://basalt-knight-1.glitch.me/api/timestamp/2015-12-25


https://basalt-knight-1.glitch.me/api/timestamp/1450137600

Example Output:

{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

