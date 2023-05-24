import './MyAssets.css'
import Box from '../Box/Box'
import data from '../../data.json'
import { useState, useEffect, useContext } from 'react';
import { savedContext } from '../../contexts/savedContext';

function Assets() {
    const [data2, setData2] = useState('');
    const { saved, setSaved } = useContext(savedContext);
    useEffect(() => {
        setData2(data.results.filter(value => saved.includes(value.zpid)))
    }, [saved])

    return (
        <div id='body'>
            <div id='boxContainer'>
                <div id='assetsGreet'>
                    <img id='aboveGreet' src='LOGO-fixed.jpg' alt="" />
                    <div>Discover a world of properties at your fingertips on our online real estate platform</div>
                </div>

                {data2 && <div id='content'>
                    {data2.map((value, index) => {
                        return <Box key={index} result={value} />
                    })}
                </div>
                }
            </div>
        </div>
    )
}

export default Assets