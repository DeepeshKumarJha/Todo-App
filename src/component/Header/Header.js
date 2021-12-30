import ReactDOM from 'react-dom';
import todoimg from './Toooodo.png';
import './Header.css'

// <center>Todo</center>
const Header = ()=> {
    const HeaderBody = (
        <header className='header-container'>
        <img className='headerContainer-image' src={todoimg} alt='logo' height="100rem"/>
        </header>
    )
    const HeaderPosition = document.getElementById('header-root')
    return (
        ReactDOM.createPortal(HeaderBody, HeaderPosition)
    )
}

export default Header;