import Axios from 'axios';

export default function sendForm(info) {
      return (
          Axios.post('mailto/send.php', `order=${info}`)
          
       ) // http://${host}
  }
