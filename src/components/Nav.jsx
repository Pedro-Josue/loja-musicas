import { NavStyle } from "../css/NavStyle";
import { Link } from 'react-router-dom';


const Nav=()=>{
    return(
        <>
            <nav className='navbar'>
                <div className='nav-links'>
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/musicas' className='navlink'>Musicas</Link>
                </div>
            </nav>
        </>
        
    )
}

export default Nav