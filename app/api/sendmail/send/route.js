// const express = require("express");
import nodemailer from "nodemailer";
export async function POST(req) {
  const body = await req.json();
  const { name, email, messages } = body;
  console.log(body);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "forprojectsandtest@gmail.com",
        pass: "eled jwpw grdh lhso",
      },
    });
    const mailOptions = {
      from: email,
      to: "atingafrancis123@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${messages}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
        Response.json({ error: "An error occurred while sending the email" });
        return;
      } else {
        console.log("Email sent:", info.response);

        Response.json({ message: "Email sent successfully" });
        return;
      }
    });

    return Response.json({ message: "Email sents successfully" });
  } catch (error) {
    console.log(error);
  }
}

// Create a Nodemailer transporter

// // Configure the email details

// // Send the email

// Start the server
