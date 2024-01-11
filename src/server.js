const sendgrid = require("@sendgrid/mail");
const dotenv = require("dotenv").config();
sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/contact", async (req, res) => {
  const emailHtml = `<div>Data received from the contact form on <a href="https://www.parentheseslabs.com/">https://www.parentheseslabs.com/</a> : <br></br> <b>Name: </b> ${req.body.name} <br></br> <b>Email: </b> ${req.body.email} <br></br> <b>Message: </b> ${req.body.message} <br></br></div>`;
  //   console.log(emailHtml);
  const options = {
    from: "sourav@parentheses.co.in",
    to: `${req.body.email}`,
    subject: "Contact Form",
    html: emailHtml,
  };

  const result = await sendgrid.send(options);
  if (result[0].statusCode === 202) {
    res.send({ status: 200, message: "Email sent successfully" });
  } else {
    res.send({
      status: 400,
      message: "Some error occured, please try again later",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
