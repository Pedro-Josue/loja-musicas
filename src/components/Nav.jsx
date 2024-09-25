import { NavStyle } from "../css/NavStyle";
import { Link } from 'react-router-dom';


const Nav=()=>{
    return(
        <NavStyle>
            <nav className='navbar'>
                <div className='nav-links'>
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/musicas' className='navlink'>Musicas</Link>
                </div>
            </nav>
        </NavStyle>
    )
}

export default Nav