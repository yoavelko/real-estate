import './MyAssets.css'
import Box from '../Box/Box'
import data from '../../data.json'
import { useState , useEffect , useContext } from 'react';
import { savedContext } from '../../contexts/savedContext';

function Assets() {
  const [data1, setData] = useState('');
  const {saved, setSaved} = useContext(savedContext);
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

          { saved && <div id='content'>
            {saved.map((value, index) => {
              return <Box key={index} result={value}/>
            })}
          </div>
          }
        </div>
      </div>
    )
}

export default Assets