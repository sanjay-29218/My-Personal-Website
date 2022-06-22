import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore About Me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sanjay.jpg'
              text='Chormara , Nawalparasi'
              label='Adventure'
              path='/services'
            /></ul>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Kohalpur,Banke'
              label='Adventure'
              path='/services'
            /></ul>
          <ul className='cards__items'>
            <CardItem
              src='images/2.jpg'
              text='Narayani River'
              label='Adventure'
              path='/services'
            /></ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Pokhara'
              label='Educational Trip'
              path='/services'
            /></ul>
            
        </div>
      </div>
    </div>
  );
}

export default Cards;
