// // TO PHONE NUMBER
// // Download the helper library from https://www.twilio.com/docs/node/install
// // Find your Account SID and Auth Token at twilio.com/console
// // and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.calls
//     .create({
//         url: 'http://demo.twilio.com/docs/voice.xml',
//         to: '+919611658349',
//         from: '+15017122661'
//     })
//     .then(call => console.log(call.sid));




// Import the Twilio library
const twilio = require('twilio');

// Load environment variables from a .env file
require('dotenv').config();

// Get your Account SID and Auth Token from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create a new Twilio client
const client = twilio(accountSid, authToken);

// Function to make a call
function makeCall(to, from, url) {
  client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+919740430089',
    from: '+12075062903'
  })
  .then(call => console.log(`Call initiated with SID: ${call.sid}`))
  .catch(error => console.error(`Error making call: ${error.message}`));
}

// Example usage
const toPhoneNumber = '+919740430089'; // Replace with the recipient's phone number
const fromPhoneNumber = '+12075062903'; // Replace with your Twilio phone number
const twimlUrl = 'http://demo.twilio.com/docs/voice.xml'; // URL for TwiML instructions

makeCall(toPhoneNumber, fromPhoneNumber, twimlUrl);
