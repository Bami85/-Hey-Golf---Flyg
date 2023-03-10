import React, { useState, useEffect } from 'react';

export default function Flight() {
  const [data,setData]=useState();

  const url = 'https://travel-advisor.p.rapidapi.com/airports/search?query=new%20york&locale=en_US';
  

  useEffect(()=>{
   
  const options = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': '8e0745a5admshf51c0217e0542cep134952jsnc4c461e4e424',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };  
  fetch(url, options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response);
    setData(response)
  })
  .catch(err=>{
    console.error(err);
  })
  },[]);
  





  return (
    <>
     <div>
     {
          data && data.map((d) => {
          return(
            <div key={d.id}>
            <h2>{d.name}</h2>
            {d.description}
            {d.country_code
}
          </div>
        )
        })
    } 
     </div>
  </>
  );
}


// import { useEffect, useState } from 'react'
// import { createInferTypeNode } from 'typescript';



// export default function Flight() {
//   const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/airports/search',
//   params: {query: 'new york', locale: 'en_US'},
//   headers: {
//     'X-RapidAPI-Key': '8e0745a5admshf51c0217e0542cep134952jsnc4c461e4e424',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//   return (
//     <>
//      <div>
//        <h1></h1>
//      </div>
//     </>
//   )
// }














