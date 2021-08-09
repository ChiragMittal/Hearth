import React,{useState} from 'react';
import { render } from 'react-dom';

export default function SingleHouse({item}) {

    const format = (num)=>{
       var numArray = num.toString().split('').reverse();
        for(let i = 3; i < numArray.length; i+=4){
          numArray.splice(i, 0, ',');
          }
        return numArray.reverse().join("");
      }

    return(

        <div class="card">
            <div class="container">
                <p><span>Name:</span> <a href={item['URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)']} target="_blank">{item['ADDRESS']}</a></p>
                <p><span>Property Type:</span>{item['PROPERTY TYPE']}</p>
                <p><span>Price: $</span>{format(item['PRICE'])}</p>
            </div>
        </div>

    )

}