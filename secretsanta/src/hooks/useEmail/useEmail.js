// take in pairs array, details form object, email form object
// send emails for each pair array object
// return success, error & function
// if error returned then show error message
// if no error && success, show some kind of animation - tree???

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function useEmail(
  sendEmails = false,
  pairsArrays,
  memberEmails,
  detailsObject
) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function sendEmail(pair, recipientEmail, detailsObject) {
    const message = detailsObject.message;
    const budget = detailsObject.budget;
    const date = detailsObject.deadline;
    const organiser = detailsObject.organiserName;
    const recipient = pair.a;
    const gift_recipient = pair.b;

    try {
      setError(false);
      setSuccess(false);
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
      console.log("SUCCESS!");
      setSuccess(true);
    } catch (err) {
      console.log("ERROR", err);
      setError(error);
    }
  }

  useEffect(() => {
    if (sendEmails) {
      for (const pair of pairsArrays) {
        sendEmail(pair, memberEmails[pair.a], detailsObject);
      }
    }
  }, [sendEmails]);
  return [error, success];
}
