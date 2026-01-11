import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter configuration for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // App password, not regular password
    }
});

// Verify connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.log("Transporter error:", error);
    } else {
        console.log("Server is ready to take messages");
    }
});

// POST route for mailing
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: `New Portfolio Message: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Failed to send email. Please check your SMTP configuration."
            });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
