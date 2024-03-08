"use server";
import nodemailer from "nodemailer";
export async function send(name, email, messages,country, phone, region) {
  console.log("hello");
  console.log(name, email, messages,country, phone, region);
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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRegion: ${region}\nCountry: ${country}\nMessage: ${messages}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
        return;
      } else {
        console.log("Email sent:", info.response);
        return;
      }
    });

    
  } catch (error) {
    console.log(error);
  }
}
  // try {
  //   const response = await fetch(" http://localhost:3000/api/sendmail/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       messages,
  //       phone,
  //       region,
  //       country
  //     }),
  //   });
  //   if (response.ok) {
  //     console.log("sent successfully");
  //     return await response.json();
  //   }
  // } catch (error) {
  //   console.log("eerr", error);
  // }

