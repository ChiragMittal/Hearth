import React,{useState} from 'react';
import { render } from 'react-dom';

import SingleHouse from './SingleHouse'

export default function MultiHouse({button,data}) {

    return(
        <div className="together">
            <h1>{button}</h1>
            {button === "All"? data.map((item)=> <SingleHouse item={item} /> ):null}
            {button === "Condo/Co-op" ? data.filter(house => house['PROPERTY TYPE']=== "Condo/Co-op").map((item)=> <SingleHouse item={item} /> ):null}
            {button === "Townhouse" ? data.filter(house => house['PROPERTY TYPE']=== "Townhouse").map((item)=> <SingleHouse item={item} /> ):null}
            {button === "Multi-Family" ? data.filter(house => house['PROPERTY TYPE'].includes("Multi-Family")).map((item)=> <SingleHouse item={item} /> ):null}
            {button === "Single Family Residential" ? data.filter(house => house['PROPERTY TYPE']=== "Single Family Residential").map((item)=> <SingleHouse item={item} /> ):null}
        </div>
    )

}