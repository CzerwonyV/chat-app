import React from 'react';
import Contact from './Contact';

  const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      online: true
    }
  ];


//on parcours a l'aide de map le tableaux USER et on affiche chaque element de ce tableaux a la manieres de contact mais avec les valeurs de cet élément.
const ContactList = () =>
  users.map(props => <Contact name = {props.name} avatar = {props.avatar} online = {props.online}/>);



  export default ContactList;