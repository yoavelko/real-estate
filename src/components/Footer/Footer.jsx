import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div id='footerBody'>
            <div id='foot-container'>
                <div id='left'>
                    <h4 className='foot-head'>NAVIGATE</h4>
                    <Link to={'/'}>
                        <div className='foot-cont'>Home</div>
                    </Link>
                    <Link to={'/assets'}>
                        <div className='foot-cont'>Assets</div>
                    </Link>
                    <Link to={'/login'}>
                        <div className='foot-cont'>Login</div>
                    </Link>
                </div>
                <div id='mid'>
                    <h4 className='foot-head'>CONTACT US</h4>
                    <a href="tel:+972525555555" target="_blank" rel="noopener noreferrer"><div className='foot-cont'>via Phone</div></a>
                    <a href="mailto:this-is-a-fake-mail@fake.com" target="_blank" rel="noopener noreferrer"><div className='foot-cont'>via e-Mail</div></a>
                    <a href="https://www.google.com/maps/place/%D7%A7%D7%A4%D7%99%D7%98%D7%95%D7%9C+%D7%9E%D7%93%D7%99%D7%A0%D7%AA+%D7%94%D7%95%D7%95%D7%90%D7%99%E2%80%AD/@21.3092766,-157.8525241,16.37z/data=!4m15!1m8!3m7!1s0x7c00183b8cc3464d:0x4b28f55ff3a7976c!2z15TXldeg15XXnNeV15zXlSwg15TXldeV15DXmSwg15DXqNem15XXqiDXlNeR16jXmdeq!3b1!8m2!3d21.3098845!4d-157.8581401!16s%2Fm%2F02hrh0_!3m5!1s0x7c006e755a0fffff:0xe67105e727887580!8m2!3d21.3072405!4d-157.8574296!16zL20vMDJsOHho" target="_blank" rel="noopener noreferrer"><div className='foot-cont'>our Address</div></a>
                </div>
                <div id='right'>
                    <h4 className='foot-head'>POLICIES</h4>
                    <a href="https://www.industrialrelations.nsw.gov.au/employers/nsw-employer-best-practice/workplace-policies-and-procedures-checklist/" target="_blank" rel="noopener noreferrer"><div className='foot-cont'>Company Policy</div></a>
                    <a href="https://www.indeed.com/career-advice/career-development/hr-policies" target="_blank" rel="noopener noreferrer"><div className='foot-cont'>Common Human Policity</div></a>
                </div>
            </div>
            <div id='top'>
                <a href="#">
                    <div className='top'><img src="https://img.icons8.com/small/16/1A1A1A/collapse-arrow.png" /></div>
                    <div className='top'>Go top</div>
                </a>
            </div>
            <div id='rights'>©Made by Yoav Elkobi</div>
        </div>
    )
}

export default Footer