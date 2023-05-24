import './MyAssets.css'
import SavedBox from './SavedBox';
import { useState , useEffect } from 'react';
import { useContext } from 'react';
import { savedContext } from '../../contexts/savedContext';

function Assets() {
  const {saved, setSaved} = useContext(savedContext)

    return (
      <div id='body'>
        <div id='boxContainer'>
        <div id='assetsGreet'>
          <img id='aboveGreet' src='LOGO-fixed.jpg' alt="" />
          <div>Saved Assets</div>
        </div>
          { saved && <div id='content'>
            {saved.map((value, index) => {
              return <SavedBox key={index} index={index} />
            })}
          </div>
          }
        </div>
      </div>
    )
}

export default Assets