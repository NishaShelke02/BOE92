import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      address,
      product,
      hsnCode,
      message,
    } = await req.json();

    if (!fullName || !email || !product || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"BOE9 Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Website Enquiry from ${fullName}`,
      html: `
        <h2>New Enquiry Received</h2>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Address</strong></td><td>${address}</td></tr>
          <tr><td><strong>Product</strong></td><td>${product}</td></tr>
          <tr><td><strong>HSN Code</strong></td><td>${hsnCode}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}