import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card'
import netflixData from './netflix'

// console.log(netflixData[0])

// function iCard(val) {
//   console.log(val)

//   return (
//     <Card imgSrc={val.imageSrc}
//     title={val.title} 
//     link={val.link} />
//     )
// }

ReactDOM.render(
  <>
  <h1 className="heading_style">List of 10 Series</h1>
  <div className="cards">
    {netflixData.map( val => {
      return (
    <Card imgSrc={val.imageSrc}
    title={val.title} 
    link={val.link} />
    )
    })}
    </div>
    </>,
  document.getElementById('root')
);

