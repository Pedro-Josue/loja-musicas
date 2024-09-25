import { NavStyle } from "../css/NavStyle";
import { Link } from 'react-router-dom';
import logo from '../assets/icone.svg';

const Nav=()=>{
    return(
        <NavStyle>
            <nav className='navbar'>
                <img src={logo} alt="Ícone da loja" id='logo-nav' />
                <div className='nav-links'>
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/musicas' className='navlink'>Músicas</Link>
                </div>
            </nav>
        </NavStyle>
    )
}
export default Nav