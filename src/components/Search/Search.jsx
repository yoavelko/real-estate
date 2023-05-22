import './Search.css'
import { useState, useEffect } from 'react'

function Search({ data, setData }) {

    let searcher = data.results.map(value2 => value2 && {...value2, streetAddress: value2.streetAddress.toLowerCase()})
    let regexer = '';
    let value1= '';
    
    const onChange = (event) => {
        value1 = event.target.value.toLowerCase();
        searcher = searcher.filter(x => x.streetAddress.includes(value1))
        setData(searcher)
    }

    return (
        <input id='search-bar' type="text" placeholder='Search by address...' onChange={onChange}/>
    )
}

export default Search