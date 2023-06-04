import  styled from 'styled-components';

export const ProductsArea =styled.div`

    background-color: #f5f5f5;
    display: flex;
    gap:30px;
    padding: 20px 20px 40px 20px;
    flex-wrap:wrap;
    justify-content: space-around;

    .card {
        margin-top: 40px;
        height:320px;
        width:240px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding:20px;
        border: 1px inset rgb(25, 25, 125);
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

    .coracao {
        font-size:35px;
        background:transparent;
        border:none;
        color: #19197d;
        transition: all 0.5s;
        cursor: pointer;
    }

    .coracao:hover {
        color: #00cc00;
    }

    .buttons {
        display: flex;
        gap: 40px;
    }
    `;