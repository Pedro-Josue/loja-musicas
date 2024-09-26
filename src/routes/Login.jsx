import { LoginStyled } from '../css/LoginStyle'
import icone from '../assets/icone.svg'

const Login=()=>{
    return(
        <LoginStyled>
            <section className="container">
            <div className="container-login">
                <div className="login">
                    {/*form do login */}
                    <form className="login-form">
                        <span className="titulo-login">Faça seu Login</span>
                        {/* Campo input usuario */}
                        <div className="w-input">
                        <input
                            type="text"
                            className="input-form"
                            id="usuario"
                        />
                        <span placeholder="Usuario"></span>

                        </div>


                        {/*Campo input Senha */}
                        <div className="w-input">
                        <input
                            type="password"
                            className="input-form"
                            id="senha"
                        />
                        <span placeholder="Senha"></span>

                        </div>
                        {/*Botão Login */}

                        <div className="login-btn">
                            <button type="submit" className="login-form-btn">Login</button>
                        </div>
                        {/* Utils */}
                        <ul className="utils">
                            <li>
                                <span className="text1">Esqueçeu sua Senha:</span>
                            </li>
                            <li>
                                <span className="text1">Não possui conta ?</span>
                                <a href="#" className="text2">
                                    Criar Conta
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
                <img src={icone} alt="Imagem Login"/>
            </div>
        </section>
        </LoginStyled>
    )
}

export default Login