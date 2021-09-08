import React from 'react';
import Card from './Card'
import netflixData from './netflix'


const App = () => (
  <>
  <h1 className="heading_style">List of 10 Series</h1>
  <div className="cards">
    {netflixData.map( val => {
      return (
    <Card 
    key={val.id}
    imgSrc={val.imageSrc}
    title={val.title} 
    link={val.link} />
    )
    })}
    </div>
    </>
  )


export default App;
