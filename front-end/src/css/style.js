import  styled from 'styled-components';

export const ProductsArea =styled.div`

    display: flex;
    gap:50px;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;

    div {
        height:320px;
        width:220px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding:20px;
        border: 1px solid gray;
    }
    button{
        font-size:30px;
        background:transparent;
        border:none;
        color: #B80F0A;
    }
    `;