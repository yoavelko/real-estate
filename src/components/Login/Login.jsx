import './Login.css'
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import { useForm } from 'react-hook-form'
import UserName from './UserName';
import PassWord from './PassWord';
import { useState } from 'react';

function Login() {

    const [style, setStyle] = useState('linkedTermsNone')
    const termsShower = () => {
        setStyle('linkedTermsBlock')
    }

    return (
        <div id='backGround'>
            <div id='logSignContainer'>
                <div id='loginContainer' className='dualContainer'>
                    <h1 className='headers'>Login</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <UserName />
                    </div>
                    <div className='inputContainers'>
                        <img className='icons' width="36" height="36" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <PassWord />
                    </div>
                </div>

                <div id='breaker'>
                    <span id='or'>Or</span>
                </div>

                <div id='mediaBreaker'>
                    <span id='or'>Or</span>
                </div>

                <div id='signupContainer' className='dualContainer'>
                    <h1 className='headers'>Sign-Up</h1>
                    <div className='inputContainers'>
                        <img className='icons' width="32" height="32" src="https://img.icons8.com/small/32/1A1A1A/user-male-circle.png" alt="user-male-circle" />
                        <UserName />
                    </div>
                    <div className='inputContainers'>
                        <img className='icons' width="34" height="34" src="https://img.icons8.com/small/32/1A1A1A/private2.png" alt="private2" />
                        <PassWord />
                    </div>
                    <div id='terms'>
                        <input type="checkbox" /> Agree to <span id='termsLink' onClick={termsShower}>terms & conditions</span> 
                        <div className={style}>Be nice.</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login