// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendForm from '../../API/api';

const nodemailer = require('nodemailer');

export default async (req, res) => {
  const data = req.body;

  // const testEmailAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'imap.yandex.ru',
    port: 993,
    secure: true,
    auth: {
      user: 'AlexKarpuninAA',
      pass: 'lesha1997'
    }
  });

  const result = await transporter.sendMail({
    from: '"Topallof" <Topallof@example.com>',
    to: 'mr.offlain@mail.ru',
    subject: 'Message from Node js',
    text: 'This message was sent from Topallof js server.',
    html: 'This <i>message</i> was sent from <strong>Topallof js</strong> server.'
  });

  const status = await result;
  if (status) {
    res.json({message: 'YES'})
  } else {
    res.json({message: 'NOT'})
  }
  console.log(result);
 
}