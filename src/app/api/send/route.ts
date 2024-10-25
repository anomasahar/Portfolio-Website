import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json() as { email: string; subject: string; message: string };

     // Basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
       throw new Error("Invalid email address.");
     }
     
    console.log(email, subject, message);

    const emailContent = `
      <html>
        <body>
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>${message}</p>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: fromEmail!,
      to: [fromEmail!, email],
      subject: subject,
      react: emailContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message });
  }
}
