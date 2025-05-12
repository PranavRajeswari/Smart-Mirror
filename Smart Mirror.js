/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
address: "localhost", // Address to listen on, can be:
// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
// - another specific IPv4/6 to listen on a specific interface
// - "0.0.0.0", "::" to listen on any interface
// Default, when address config is left out or empty, is "localhost"
port: 8080,
basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
// you must set the sub path here. basePath must end with a /
ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
// or add a specific IPv4 of 192.168.1.5 :
// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

useHttps: false, // Support HTTPS or not, default "false" will use HTTP
httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

language: "en",
locale: "en-US",   // this variable is provided as a consistent location
  // it is currently only used by 3rd party modules. no MagicMirror code uses this value
  // as we have no usage, we  have no constraints on what this field holds
  // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
timeFormat: 24,
units: "metric",

modules: [
{
module: "alert",
},
{
module: "updatenotification",
position: "top_bar"
},
{
module: "clock",
position: "top_left"
},
/*{
module: 'MMM-Voice-Control',
position: 'lower_third',
config: {
language: 'en',
voiceTextRestTimeout: 3000,
listOfCommandsNotificationTime: 10000
}
},
{
module: 'MMM-Voice-Control',
position: 'bottom_left',
config:{
debug: true,
micConfig:{
language: 'en',
device: 'plughw:3,0',
recorder: "arecord",
        wakeWord: "MAGICMIRROR"
}
    }
},*/
{
module: "calendar",
header: "US Holidays",
position: "top_left",
config: {
calendars: [
{
fetchInterval: 7 * 24 * 60 * 60 * 1000,
symbol: "calendar-check",
url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
}
]
}
},
                {
module: "compliments",
position: "lower_third"
},
{
module: "weather",
position: "top_right",
config: {
weatherProvider: "openmeteo",
type: "current",
lat: 11.031835,
lon: 76.910519
}
},
{
module: "newsfeed",
position: "bottom_bar",
config: {
feeds: [
{
title: "New York Times",
url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
}
],
showSourceTitle: true,
showPublishDate: true,
broadcastNewsFeeds: true,
broadcastNewsUpdates: true
}
},
{
module: 'MMM-Screencast',
position: 'bottom_left', // This position is for a hidden <div /> and not the screencast window
config: {
position: 'bottomLeft',
height: 300,
width: 500,
}
        },
/*{
 module: "MMM-VoiceControl",
 position: "bottom_left",
 config: {
   accessKey: "YHiyESxtgXsd4yTScBYiOFeX0mon7+6+sLP8HNQMYVojQm/9LilBow==", // 🔥 Replace with your actual Picovoice Access Key
   microphone: {
     recordProgram: "arecord", // or "sox" if you prefer
     device: "plughw:3,0"      // 🔥 Replace based on `arecord -l`
   },
   recognition: {
     engine: "rhino",
     accessKey: "YHiyESxtgXsd4yTScBYiOFeX0mon7+6+sLP8HNQMYVojQm/9LilBow==",
     context: "rhino_contexts/MagicMirror_en_raspberry-pi_v3_0_0.rhn",
     sensitivity: 0.6
   },
   commands: {
     "wake up": {
notificationExec: {
 notification: "REMOTE_ACTION",
 payload: { action: "MONITORON" }
}
     },
     "go to sleep": {
notificationExec: {
 notification: "REMOTE_ACTION",
 payload: { action: "MONITOROFF" }
}
     },
     "show calendar": {
moduleExec: {
 module: ["calendar"],
 exec: "SHOW"
}
     },
     "hide calendar": {
moduleExec: {
 module: ["calendar"],
 exec: "HIDE"
}
     },
     "show weather": {
moduleExec: {
 module: ["weather"],
 exec: "SHOW"
}
     },
     "hide weather": {
moduleExec: {
 module: ["weather"],
 exec: "HIDE"
}
     }
   },
   debug: true
 }
},*/
{
   /* Don't share your credentials! */
module: "MMM-OnSpotify",
position: "bottom_right", /* bottom_left, bottom_center */
config: {
clientID: "59c2eddeb08d49939a2716ce4c894f87",
clientSecret: "415797079af8449ebb5495b20171fa5a",
accessToken: "BQBolwH2mK8k6GDvxqx_0bZhSNPoQp5VY1y6hpr-GcN4CRsWbcEAAdLr4vLyOi7j9gwvz_fcIZttpUxdAC0V5bF_UM4z4mXm0NFFK1CWGOc65i_aPyn8h-OvCCGH5hu45ITjQWkiXOjryYGLO10y9dyw5l7_4fQ3hsyPrVMylvYy-AyzcnEZ3Z6rz8cZY6ztLxitFUqNZHd0hwB5XP2LimG6XgrYq3p9Onxvn_Md3ypnn4dDbDRRGUf6Ze88OA",
refreshToken: "AQDixvVTJ9gKkp9SN4qPJJOomUS8PbhWxcnOhOybtkkpRWHHFC481zhrqywXoSjuIDGuA2_CAzmyyeAihrFUpagfh7s5mq0NHk2URQ-r7mcv_R1Ns9JYVIZO4xRf1lwf_3g",
/* Add here your configurations */
}
},

]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

