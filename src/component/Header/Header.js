import ReactDOM from 'react-dom';
import todoimg from './Toooodo.png';
import './Header.css'
import { UserConsumer } from '../../UserContext';

// <center>Todo</center>
const Header = ()=> {
    const HeaderBody = (
        <header className='header-container'>
        <img className='headerContainer-image' src={todoimg} alt='logo' height="90rem"/>
        <UserConsumer>
            {
                (userName)=>{
                    return <p>LogedIn as : {userName}</p>
                }
            }
        </UserConsumer>
        </header>
    )
    const HeaderPosition = document.getElementById('header-root')
    return (
        ReactDOM.createPortal(HeaderBody, HeaderPosition)
    )
}

export default Header;