// import { useState, useEffect } from "react";
import './Filter.css'

function Filter({ data, setData }) {
    
    let filterer = data.results;
    const onChange = (event) => {
        const value = event.target.value;
        if (event.target.checked === true) {
            
            switch (value) {
                case ('to500'): {
                    filterer = filterer.filter((value) => value.price <= 500000);
                }
                    break;
                case ('above500'): {
                    filterer = filterer.filter((value) => value.price > 500000);
                }
                    break;
                case ('to1500'): {
                    filterer = filterer.filter((value) => value.rentZestimate <= 1500);
                }
                    break;
                case ('above1500'): case ('to1500'): {
                    filterer = filterer.filter((value) => value.rentZestimate > 1500);
                }
                    break;
                case ('to2'): {
                    filterer = filterer.filter((value) => value.bedrooms <= 2);
                }
                    break;
                case ('above2'): {
                    filterer = filterer.filter((value) => value.bedrooms > 2);
                }
            }
        }
    };
    const onClick = () => {
        setData(filterer)
    }


    return (
        <div id="filterContainer">
            <button id="shower">
                <img id="img-filter" src="https://img.icons8.com/small/16/1A1A1A/filter.png" /> Filter
            </button>
            <div id="optContainer">
                <div id="flexer">
                    <div className="innerContainers" id="priceRangeContainer">
                        <div style={{ fontWeight: 'bold' }} className="optLine">Price range:</div>

                        <div className="optLine">
                            <input id="to500" type="checkbox" value={"to500"} onChange={onChange} />
                            <label htmlFor="to500">0 - 500,000$</label>
                        </div>
                        <div className="optLine">
                            <input id="above500" type="checkbox" value={"above500"} onChange={onChange} />
                            <label htmlFor="above500">500,000$ and above</label>
                        </div>
                    </div>
                    <div className="innerContainers" id="rentRangeContainer">
                        <div style={{ fontWeight: 'bold' }} className="optLine">Rent range:</div>
                        <div className="optLine">
                            <input id="to1500" type="checkbox" value={'to1500'} onChange={onChange} />
                            <label htmlFor="to1500">0 - 1,500$</label>
                        </div>
                        <div className="optLine">
                            <input id="above1500" type="checkbox" value={'above1500'} onChange={onChange} />
                            <label htmlFor="above1500">1,500$ and above</label>
                        </div>
                    </div>
                    <div className="innerContainers" id="numberBedroomsContainer">
                        <div style={{ fontWeight: 'bold' }} className="optLine">Number of bedrooms:</div>
                        <div className="optLine">
                            <input id="to2" type="checkbox" value={'to2'} onChange={onChange} />
                            <label htmlFor="to2">1-2 bedrooms</label>
                        </div>
                        <div className="optLine">
                            <input id="above2" type="checkbox" value={'above2'} onChange={onChange} />
                            <label htmlFor="above2">3 or more bedrooms</label>
                        </div>
                    </div>
                </div>
                <div id="btnFlexer">
                    <button type="button" id="subBtn" onClick={onClick}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Filter