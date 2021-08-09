import React,{useState} from 'react';

export default function Filter({parentCallback}) {

    const [buttonValue,setButtonValue] = useState('')

    const getButtonValue =(e)=>{
        parentCallback(e.target.value)
		setButtonValue(e.target.value)
        
	}

    return(
        <div class="filter">
            <button className="filterButton" value="All" onClick={getButtonValue}>All</button>
            <button className="filterButton" value="Single Family Residential" onClick={getButtonValue}>Single</button>
            <button className="filterButton" value="Multi-Family" onClick={getButtonValue}>Multi</button>
            <button className="filterButton" value="Condo/Co-op" onClick={getButtonValue}>Condo</button>
            <button className="filterButton" value="Townhouse" onClick={getButtonValue}>Townhouse</button>
        </div>
    )
}