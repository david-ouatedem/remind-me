import cron from "node-cron";
import { Twilio } from "twilio";

// Twilio credentials
const accountSid = "ACdf49bf858b9aeb8e5b5d991bb95449a0";
const authToken = "54a1c78c64d412de97fca4f7befd1980";
const twilioNumber = "+14155238886";
const recipientNumber = "+237687139102";

// Create Twilio client
const client = new Twilio(accountSid, authToken);

// Function to send a WhatsApp message
const sendWhatsAppMessage = async (message: string) => {
  try {
    await client.messages.create({
      from: `whatsapp:${twilioNumber}`,
      to: `whatsapp:${recipientNumber}`,
      body: message,
    });
    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Schedule sending message every Sunday at 5 PM
cron.schedule(
  "0 17 * * 0",
  () => {
    const message = "Your message goes here.";
    sendWhatsAppMessage(message);
  },
  {
    timezone: "Africa/Douala",
  }
);
