import './Sort.css'
import { useState } from 'react'

function Sort({ data, setData }) {
    const [selectValue, setSelectValue] = useState("");
    const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
        switch (value) {
            case ('hiToLo') : {setData((prev) => [...prev].sort((a, b) => b.price - a.price))}
            break;
            case ('loToHi') : {setData((prev) => [...prev].sort((a, b) => a.price - b.price))}
            break;
            case ('rHiToLo') : {setData((prev) => [...prev].sort((a, b) => b.rentZestimate - a.rentZestimate))}
            break;
            case ('rLoToHi') : {setData((prev) => [...prev].sort((a, b) => a.rentZestimate - b.rentZestimate))}
            break;
        }
    };


    return (
        <>
            <select defaultValue={'blank'} onChange={onChange} name="sort" id="sort">
                <option value={'blank'} disabled>Sort by:</option>
                <option value="hiToLo">Price: HI to LO</option>
                <option value="loToHi">Price: LO to HI</option>
                <option value="rHiToLo">Rent price: HI to LO</option>
                <option value="rLoToHi">Rent price: LO to HI</option>
            </select>
        </>
    )
}

export default Sort