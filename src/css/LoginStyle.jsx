import styled from "styled-components";

export const LoginStyled = styled.section`

.container{
    width:100%;
    margin:0 auto;
    background-color: #1a1a4b;
    color: white;
}
.container-login{
    width:100%;
    min-height:100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:15px;
    background:transparent;
}
.login{
    width:350px;
    margin-right:50px;
    background:transparent;
}

.login-form{
    width:100%;
}
.titulo-login{
    display:block;
    font-size:40px;
    line-height:1.3;
    text-align:center;
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border-bottom:2px solid #D9D9D9;
}
.input-form{
    font-size:1rem;
    color:#555;
    line-height:1.2;
    display:block;
    width:100%;
    height:30px;
    padding: 0 5px;
    border:none;
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center;
}
.login-form-btn{
    border: none;
    font-size:1rem;
    color:#fff;
    background-color: #334580;
    width:100%;
    height:50px;
    border-radius:15px;
    cursor: pointer;
}

.utils{
    margin-top: 20px;
    margin-bottom: 10px;
}
.text1{
    color: white;
}
.text2{
    color: black;
}

img{
    width:300px;
    height:300px;
    margin-left:50px;
}

`