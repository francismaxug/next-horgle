"use server";
import nodemailer from "nodemailer";
export async function send(name, email, messages, country, phone, region) {
  console.log("hello");
  console.log(name, email, messages, country, phone, region);
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "forprojectsandtest@gmail.com",
    //     pass: "eled jwpw grdh lhso",
    //   },
    // });
    // const mailOptions = {
    //   from: email,
    //   to: "atingafrancis123@gmail.com",
    //   subject: "New Form Submission",
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRegion: ${region}\nCountry: ${country}\nMessage: ${messages}`,
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error("Error:", error);
    //     return;
    //   } else {
    //     console.log("Email sent:", info.response);
    //     return;
    //   }
    // });

    const transporter = nodemailer.createTransport({
      // port: 465,
      service: "gmail",
      auth: {
        user: "forprojectsandtest@gmail.com",
        pass: "eled jwpw grdh lhso",
      },
      secure: true,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: email,
      to: "atingafrancis123@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRegion: ${region}\nCountry: ${country}\nMessage: ${messages}`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
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
