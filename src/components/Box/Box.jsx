import './Box.css';
import { useContext, useEffect, useState } from 'react';
import { savedContext } from '../../contexts/savedContext';

function Box({ result }) {

    let { saved, setSaved } = useContext(savedContext);
    let [buttonText, setButtonText] = useState('🤍 Save Property')
    useEffect(()=> {
        setButtonText(saved.includes(result.zpid)? '❤️ Unsave property' : '🤍 Save property')
    })
    const fixPrice = result?.price.toString().split('');

    if (7 > fixPrice.length && fixPrice.length > 3) {
        fixPrice[fixPrice.length - 4] += ','
    }
    if (fixPrice.length > 6) {
        fixPrice[fixPrice.length - 4] += ','
        fixPrice[fixPrice.length - 7] += ','
    };
    const fixRent = result.rentZestimate?.toString().split('');
    if (fixRent?.length > 3) {
        fixRent[fixRent?.length - 4] += ','
    }

    const Like = () => {
        if (!saved.includes(result.zpid)) {
            setSaved([...saved , result.zpid]);
            setButtonText('❤️ Unsave Property');
        } else {
            setSaved(saved.filter(value => value != result.zpid));
            setButtonText('🤍 Save Property');
        }
    }

    return (
        <div id='container'>
            <div id='pic-container'>
                <img id='pic' src={result?.imgSrc} alt="" />
            </div>
            <div id='description-container'>
                <div className='description' id='address'>
                    <a href={`https://www.google.com/maps/place/${result?.streetAddress}+${result?.city}+${result?.state}`} target="_blank" rel="noopener noreferrer">
                        <span className='detail'>Address:</span> {result?.streetAddress}. , {result?.city}, {result?.state} <img id='mapsLogo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACeElEQVR4nO2Wz2sTURDHnz0oilbdkOx8v29JJASUgOLFm568qAdbfyHiXQv+AFFsFQ9F6L/gwR9X/Qt6rKgUfx3UmyIVxfoDREGsB7WllQmzdAmbTTUb9JCBgbczbzKfNy87O871JCep1WorAJwC8JDkd1VdAzhZr9eXu25KFEUewDOSC2kK4Knu+eMfLpfL6733h0heJ/kGwHsAt0gOhWG4IXHyOPlzAAOFQmGNKoBBAC8M4slSKtEnIttIXiI5SXKu1am892c0AMDpOHmlUlnX/INqiyFInmiZGcAoyU9NpfsJYALA+YR9SKsgInWLe2R7B/TZe78HwLSqiOxWm4jstz0PWgJw8bSvAFwhubdYLK5O+BsAKXEzateSG9B04gBv1RYEQb/ZvmUBLKQlaOcH8EXtYRiWWgGUSqXQnj93A+C++Q7rs5ZdE6uKyC7bc8T2TOYOQPKc+e5mxN6zPWdzBwjDsGSNR0s82OwHsM9iZ+JryhVABcBlA5jSvtAwLvaIKfONuixhZwCr4kQkxxIxY5b8ZRRFK51zy7oCoAJgB8lZkvP6CpvqehbAdttzzHULQAXARTvxV1Vbj6hPW3dX+kBC+lQBjCf6wLjZFW4iM54dAsR3X61W15J8rC1a10uNdzkAzAM4+rfxLgcALfmPfwrATv5D7AHwP7yCIAj6bZq5lni3GzMhgE1Z8RprH6Kr+mk2/1xbgCiKNusIBuA2gF+tZkLTjzFQAjA11gbaC1kAr1MSaG+/A2DYe7+F5EYROU7yJoAPbeDi2BGSWzM/RCokd9r0quP3De/9wWQnSxO9BgXSKigQgHc6wovIgXaxPemJM/kNRuFzYo+ZOJwAAAAASUVORK5CYII="></img>
                    </a>
                </div>
                <div className='description'>{result?.bedrooms} Bedrooms</div>
                <div className='description'>{result?.bathrooms} Bathrooms</div>
                <div className='description'><span className='detail'>Buying price:</span> {fixPrice} <span style={{ fontSize: 'xx-small' }}>USD</span></div>
                <div className='description'><span className='detail'>Renting price:</span> {fixRent} <span style={{ fontSize: 'xx-small' }}>USD</span></div>
                <button id='like' onClick={Like}>
                    {buttonText}
                </button>
            </div>
            <div id='mediaContainer'>
                <button id='likeMedia' onClick={Like}>
                    {buttonText}
                </button>
            </div>
        </div>
    )

}
export default Box