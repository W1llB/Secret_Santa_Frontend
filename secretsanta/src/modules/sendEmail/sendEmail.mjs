import emailjs from "@emailjs/browser";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default async function sendEmail(pair, recipientEmail, detailsObject) {
  const message = detailsObject.message;
  const budget = detailsObject.budget;
  const date = detailsObject.deadline;
  const organiser = detailsObject.organiserName;
  const recipient = pair.a;
  const gift_recipient = pair.b;

  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        to_name: recipient,
        from_name: organiser,
        gift_recipient: gift_recipient,
        message: message,
        budget: budget,
        date: date,
        email: recipientEmail,
      },
      publicKey
    );
    // console.log("SUCCESS!");
  } catch (err) {
    console.log("ERROR", err);
  }
}
