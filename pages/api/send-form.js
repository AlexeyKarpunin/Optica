// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendForm from '../../API/api';

export default (req, res) => {
  const data = req.body;
  sendForm(data).then((response) => {
    console.log(response.data);
    res.statusCode = 200;
    res.json({ data: data })
  })
   .catch((error) => {
   console.log(error);
   res.json({eror: error})
  })
  
}