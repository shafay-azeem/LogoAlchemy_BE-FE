const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
// const { EMAIL, PASSWORD } = require("../env.js");

const sendEmailFromServer = (req, res) => {
  let packageName = req.query.product;
  let packagePrice = req.query.amount;
  let config = {
    service: "SMTP",
    host: "test.lifoapp.co.uk",
    port: 465,
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Order Arrived",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: "The Logo Alchemy",
      intro: "Payment Successful",
      message: "Thank you for your payment!",
      table: {
        data: [
          {
            pakageName: packageName,
            price: packagePrice,
          },
        ],
      },
      outro: "Looking forward to do more business",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.Email,
    to: process.env.Email,
    subject: "New Order Has Arrived",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.redirect("https://thelogoalchemy/"); // replace with your success URL
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

const contactInfoMail = (req, res) => {
  const { userName, userEmail, userPhoneNumber, userHelp, userNotes } =
    req.body;

  let config = {
    service: "SMTP",
    host: "thelogoalchemy.com",
    port: 465,
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: userName,
      link: "https://thelogoalchemy.com/",
    },
  });

  let response = {
    body: {
      name: "Hello Logo Alchemy",
      intro: "A messsage for you !",
      table: {
        data: [
          {
            name: userName,
            email: userEmail,
            help: userHelp,
            phonenumber: userPhoneNumber,
            notes: userNotes,
          },
        ],
      },
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: "info@thelogoalchemy.com",
    to: "info@thelogoalchemy.com",
    subject: "Client Contact",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "Email has been sent.",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = {
  sendEmailFromServer,
  contactInfoMail,
};
