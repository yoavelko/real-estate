import { savedContext } from "../../contexts/savedContext";
import { useContext } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";


function SavedBox({value, index}) {

    const {saved, setSaved} = useContext(savedContext);
    console.log(index)

    return (
        <div id='container'>
            <div id='pic-container'>
                <img id='pic' src={saved[index]?.img} alt="" />
            </div>
            <div id='description-container'>
                <div className='description' id='address'>
                    <a href={`https://www.google.com/maps/place/${saved[index].street}+${saved[index].city}+${saved[index].state}`} target="_blank" rel="noopener noreferrer">
                        <span className='detail'>Address:</span> {saved[index].street}. , {saved[index].city}, {saved[index].state} <img id='mapsLogo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACeElEQVR4nO2Wz2sTURDHnz0oilbdkOx8v29JJASUgOLFm568qAdbfyHiXQv+AFFsFQ9F6L/gwR9X/Qt6rKgUfx3UmyIVxfoDREGsB7WllQmzdAmbTTUb9JCBgbczbzKfNy87O871JCep1WorAJwC8JDkd1VdAzhZr9eXu25KFEUewDOSC2kK4Knu+eMfLpfL6733h0heJ/kGwHsAt0gOhWG4IXHyOPlzAAOFQmGNKoBBAC8M4slSKtEnIttIXiI5SXKu1am892c0AMDpOHmlUlnX/INqiyFInmiZGcAoyU9NpfsJYALA+YR9SKsgInWLe2R7B/TZe78HwLSqiOxWm4jstz0PWgJw8bSvAFwhubdYLK5O+BsAKXEzateSG9B04gBv1RYEQb/ZvmUBLKQlaOcH8EXtYRiWWgGUSqXQnj93A+C++Q7rs5ZdE6uKyC7bc8T2TOYOQPKc+e5mxN6zPWdzBwjDsGSNR0s82OwHsM9iZ+JryhVABcBlA5jSvtAwLvaIKfONuixhZwCr4kQkxxIxY5b8ZRRFK51zy7oCoAJgB8lZkvP6CpvqehbAdttzzHULQAXARTvxV1Vbj6hPW3dX+kBC+lQBjCf6wLjZFW4iM54dAsR3X61W15J8rC1a10uNdzkAzAM4+rfxLgcALfmPfwrATv5D7AHwP7yCIAj6bZq5lni3GzMhgE1Z8RprH6Kr+mk2/1xbgCiKNusIBuA2gF+tZkLTjzFQAjA11gbaC1kAr1MSaG+/A2DYe7+F5EYROU7yJoAPbeDi2BGSWzM/RCokd9r0quP3De/9wWQnSxO9BgXSKigQgHc6wovIgXaxPemJM/kNRuFzYo+ZOJwAAAAASUVORK5CYII="></img>
                    </a>
                </div>
                <div className='description'>{saved[index].bedrooms} Bedrooms</div>
                <div className='description'>{saved[index].bathrooms} Bathrooms</div>
                <div className='description'><span className='detail'>Buying price:</span> {saved[index].price} <span style={{ fontSize: 'xx-small' }}>USD</span></div>
                <div className='description'><span className='detail'>Renting price:</span> {saved[index].rent} <span style={{ fontSize: 'xx-small' }}>USD</span></div>
                <button id='like'>
                    <FormControlLabel
                        control={<Checkbox size='small'
                            icon={<FavoriteBorderIcon />}
                            checkedIcon={<FavoriteIcon />}
                        />}
                        label="Save property"
                    />
                </button>
            </div>
            <div id='mediaContainer'>
                <button id='likeMedia'>
                    <FormControlLabel
                        control={<Checkbox size='small'
                            icon={<FavoriteBorderIcon />}
                            checkedIcon={<FavoriteIcon />}
                        />}
                        label="Save property"
                    />
                </button>
            </div>
        </div>
    )
}

export default SavedBox