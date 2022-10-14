//TODO add DKIM to mails https://nodemailer.com/dkim/
export const sendMail = (destination, subject, html) => {
  var nodemailer = require("nodemailer");

  var transport = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 587,
    auth: {
      user: "contact@emovin.fr",
      pass: process.env.PASSWORD_MAIL_CONTACT,
    },
  });

  var mailOptions = {
    from: "contact@emovin.fr",
    to: destination,
    subject: subject,
    html: html,
    //headers: []
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      // console.log(error);
    } else {
      // console.log(info);
    }
  });

  // transport.close();
};
