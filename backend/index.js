const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path")

const app = express();
const port = 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Replace with your Gmail address
    pass: process.env.PASSWORD, // Replace with your App Password
  },
});

app.get("/api/v1/test", (req, res) => {
  res.send("Hello World")
})

// Email route
app.post("/api/v1/send-email", (req, res) => {
  const { name, email, phone, company, service, comments } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Set the sender as the client's email
    replyTo: email, // Allow replies to the client's email
    to: process.env.EMAIL, // Your receiving email address
    subject: `Service request from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || "Not provided"}
      Service: ${service}
      Comments: ${comments}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

const dir = path.resolve()
app.use(express.static(path.join(dir, "/client/build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(dir, "client", "build", "index.html"))
  console.log("index.html")
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
