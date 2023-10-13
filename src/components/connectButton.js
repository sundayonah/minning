import { useState } from 'react';

export default function ConnectButton() {


   
   // Avoid seperating related state
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [emailName, setEmailName] = useState('');

   // prefer grouping related state via an object
   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
   });






   return <w3m-button balance="hide" />;
}
