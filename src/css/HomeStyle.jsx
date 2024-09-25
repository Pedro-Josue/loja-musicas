import styled from "styled-components";

export const HomeStyle = styled.section`

.home h1 {
    margin-top: 7%;
    font-size: 400%;
    color: white;
}
.home h3 {
    font-size: 150%;
    margin-bottom: 7%;
    color: white;
}
.home {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1;
    background-color: #1a1a4b;
    font-family: 'Roboto', sans-serif;
}
.btn-home {
    display: flex;
    justify-content: center;
    gap: 20px; 
}
.btn-home button, 
.btn-entrar { 
    border-radius: 15px;
    border: none;
    height: 40px;
    width: 200px;
    background-color: #334580;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
}
`