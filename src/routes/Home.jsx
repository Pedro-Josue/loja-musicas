import { HomeStyle } from "../css/HomeStyle"

const Home=()=>{
    return(
        <HomeStyle>
            <div className="home">
                <h1>A trilha sonora da sua vida começa aqui!</h1>
                <h3>Descubra os melhores álbuns e playlists que vão embalar sua rotina!</h3>
                <div className="btn-home">
                    <button>Crie uma conta</button>
                    <button id="btn-entrar">Entrar</button>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home