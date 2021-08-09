import React,{useState} from 'react';
import './app.css';
import axios from "axios";

import SearchInput from './Component/Search'
import Filter from './Component/filter'
import MultiHouse from './Component/Houses/MultiHouse'

export default function App() {
 
	const [query, setQuery] = useState('')
	const [field,setField] = useState('ZIP OR POSTAL CODE')
	const [data,setData] = useState([])
	const [button,setButton] = useState('')

	const handleInput = (e) => {
		setQuery(e.target.value)
	}

	const handleField = (e) => {
		setField(e.target.value)
	}

	const submitForm =(e) => {
		e.preventDefault();
		loadData()
	  };

	const loadData=()=>{
		var obj={query:query,field:field}
		// fetch('http://localhost:9000/search',obj,{ headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' } })
		// .then(data => console.log(data.json()))

		axios.post('http://localhost:9000/search',{
			method:"POST",
			body:(obj),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})
		.then(data => data.data)
		.then(res => {
			setData(res)
			setButton('All')
		})

	}

	const getValue =(value)=>{
		setButton(value)
	}


	return (
		<div className=''>
			<SearchInput query={query} onQueryChange={handleInput} onFieldChange={handleField} field={field} submitForm={submitForm}/>

			{data.length > 0 ? <Filter parentCallback ={getValue}/>:null}

			<MultiHouse button={button} data={data}/>
		</div>
  );
	
}

