import React from 'react';
import '../App.css';
import Button from './Button';
import { default as Card, default as handleAddButton } from './Card';
import Data from './Data';
import Main from './Main';
import Search from './Search';


function Home() {
  return (
    <>
        <div className='main'>
          <Main />
          <Button/>
          <Search/>
          <Card item="Finance Calculator" 
            onAddButton={handleAddButton}  isFirstCard={true}  />
          <Card item ="Featured Conversions" backgroundColor="lightblue" isFirstCard={false}/>
          <Card item ="Health" backgroundColor="cadetblue" isFirstCard={false}/>
          <Card item="Handy and Fun" backgroundColor="#a1c6a1" isFirstCard={false}/>
          <Card item = "Cooking Calculators" backgroundColor="#d2aad2;" isFirstCard={false}/>
          <Card item = "Unit Conversions" backgroundColor="#d9a898" isFirstCard={false}/> 
          <Data/>
        </div>
 
    </>
  )
}

export default Home

