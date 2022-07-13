const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = (text: object) => {
  console.log(text)
    const msg = {
        to: 'josephwxlk3r@gmail.com',
        from: 'joewxlk3r@gmail.com', 
        subject: 'This email was sent from your portfolio',
        text: 'hello bro',
        html: `<strong>${text}</strong>`,
      }
       return sgMail
        .send(msg)
        .then(() => {
          console.log(`sending email`)
          return true
        })
        .catch((error: string) => {
          console.log(error)
          return error
        })
}