const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config()
// server used to send send emails

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "onkardev95@gmail.com",
//     pass: "Onkar@123"
//   },
// });

const contactEmail = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  service: process.env.SMPT_SERVICE,
  secure: true,
  auth: {
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
  },
});
contactEmail.verify((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.SMPT_MAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      // console.log(first)
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
