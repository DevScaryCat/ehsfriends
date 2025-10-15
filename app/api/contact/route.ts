// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, phone, email, service, message } = body;

  // 🔽 이 부분을 수정합니다. 🔽
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com", // SMTP 서버명
    port: 465, // SMTP 포트
    secure: true, // 보안 연결(SSL) 필요
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  //🔼 여기까지 수정 🔼

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `[EHS프렌즈] ${company} (${name}) 님의 상담 신청`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h1 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">EHS프렌즈 상담 신청</h1>
        <p><strong>상담 분야:</strong> ${service}</p>
        <p><strong>성함:</strong> ${name}</p>
        <p><strong>회사명:</strong> ${company}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <h3 style="margin-top: 20px;">문의 내용</h3>
        <p style="white-space: pre-wrap;">${message || "입력된 내용이 없습니다."}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
