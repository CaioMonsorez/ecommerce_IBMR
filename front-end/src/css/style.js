import  styled from 'styled-components';

export const ProductsArea =styled.div`

    background-color: red;
    display: flex;
    gap:50px;
    padding: 0px 20px 10px 20px;
    flex-wrap:wrap;
    justify-content: space-around;

    div {
        height:320px;
        width:240px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding:20px;
        border: 3px solid rgb(25, 25, 125);
        border-radius: 30px;
        background-color: white;
    }
    
    button{
        font-size:35px;
        background:transparent;
        border:none;
        color: #19197d;
        transition: all 0.5s;
        cursor: pointer;
    }

    button:hover {
        color: #00cc00;
    }
    `;