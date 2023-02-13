//TODO add DKIM to mails https://nodemailer.com/dkim/
export const sendMail = async (destination, subject, html) => {
  var nodemailer = require("nodemailer");

  var transport = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secureConnection: true,
    auth: {
      user: "contact@emovin.fr",
      pass: process.env.PASSWORD_MAIL_CONTACT,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  var mailOptions = {
    from: "contact@emovin.fr",
    to: destination,
    subject: subject,
    html: html,
    //headers: []
  };

  // transport.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //     console.log(mailOptions);
  //   } else {
  //     console.log(info);
  //   }
  // });

  await new Promise((resolve, reject) => {
    // send mail
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  transport.close();
};
