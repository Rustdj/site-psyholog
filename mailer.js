// require('dotenv').config()
// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });

// const mailOptions = {
//     from: 'rukaspirit820@gmail.com', 
//     to: 'rukaspirit820@gmail.com',
//     subject: 'Письмо отправленное node',
//     text: 'Текст самого письма'
// }

// transporter.sendMail(mailOptions)



const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

async function run() {
    let sendResult = await smptTransport.sendMail({
        from: 'rukaspirit820@gmail.com',
        to: 'rukaspirit820@gmail.com',
        subject: 'Hello from NodeMailer',
        text: 'Hello World!!!',
        html: '<body><h1>Hello World!</h1><p>This is a test message from nodeMailer.</p></body>'
    })

    console.log(sendResult)

}
run().catch(err => console.error(err))