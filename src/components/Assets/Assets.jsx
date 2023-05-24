import './Assets.css'
import Box from '../Box/Box'
import data from '../../data.json'
import { useState , useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';

function Assets() {
  const [data1, setData] = useState('');
  useEffect(() => {
      setData(data.results)
  }, [])

    return (
      <div id='body'>
        <div id='boxContainer'>
        <div id='assetsGreet'>
          <img id='aboveGreet' src='LOGO-fixed.jpg' alt="" />
          <div>Discover a world of properties at your fingertips on our online real estate platform</div>
        </div>
        <div id='search-container'>
            <Search data={data} setData={setData}/>
            <Filter data={data} setData={setData}/>
            <Sort data={data} setData={setData}/>
        </div>
          { data1 && <div id='content'>
            {data1.map((value, index) => {
              return <Box key={index} result={value} />
            })}
          </div>
          }
        </div>
      </div>
    )
}

export default Assets