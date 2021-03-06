const nodemailer = require('nodemailer');

function validation(name, phone, comment) {

  if (name.length < 2) {return 'incorrect name';}
  if (typeof name !== 'string') {return 'incorrect name';}

  if (phone.length < 12) {return 'incorrect phone'}
  if (typeof phone !== 'string') {return 'incorrect phone';}
  if (phone.split('').filter( (num) => num !== '_' ).length < 12) {return 'incorrect phone';}

  if (typeof comment !== 'string') {return 'incorrect comment';}
  if (comment.length > 300) {return 'incorrect comment'}

  return 'success';
}

export default async (req, res) => {
  const {name, phone, comment} = req.body;

  const massege = `
  <ul style='list-style: none; font-style: normal; font-weight: 500; font-size: 20px; line-height: 140%; color: #1C8594;'>
    <li>name:  ${name}</li>
    <li>phone:  ${phone}</li>
    <li>comment:  ${comment}</li>
  </ul>
  `;

  const validationStatus = validation(name, phone, comment);

  if (validationStatus === 'success') {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'alexkarpuninaa@gmail.com',
          pass: 'jgkgsnbsebqskirr'
        }
    });
  
    const result = await transporter.sendMail({
      from: '"Topallof" <Topallof@example.com>',
      to: 'info@bzcekh.ru', // info@bzcekh.ru
      subject: 'Message from Topallof',
      text: 'This message was sent from Topallof.',
      html: massege
    });
  
    const status = await result;
  
    if (status) {
      res.json({message: 'success'})
    } else {
      res.json({message: 'server erorr'})
    }
  } else {
      res.json({message: validationStatus})
  }
 
}


