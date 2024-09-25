import { HomeStyle } from "../css/HomeStyle"
import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <HomeStyle>
            <div className="home">
                <h1>A trilha sonora da sua vida começa aqui!</h1>
                <h3>Descubra os melhores álbuns e playlists que vão embalar sua rotina!</h3>
                <div className="btn-home">
                    <button>Assine agora</button>
                    <Link to='/login' className="btn-entrar">
                        Entrar
                    </Link>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home