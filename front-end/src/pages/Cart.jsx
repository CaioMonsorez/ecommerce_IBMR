import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductsArea } from '../css/style'
import { Cabecalho  } from '../components/header/Header';
import styles from './Cart.module.css';

export const Cart = ()=> {
    const[data,setData] = useState(getItem('carrinhoYt') ||[])
    const removeItem = (obj) => {
    const arrFilter = data.filter((e)=>e.id !== obj.id)
    setData(arrFilter)
    setItem('carrinhoyt',arrFilter)    
    }
    const Subtotal = data.reduce((acc,cur)=> acc + cur.price, 0)
    return(
        <div>
            <Cabecalho/>
            <h2>{`Subtotal: R$ ${Subtotal}`}</h2>
            <ProductsArea className={styles.carrinhoFundo}>
            {
                data.map((e) => (
                 <div key={e.id} className={styles.carrinhoProdutos}>
                    <h4>{e.title}</h4> 
                    <img src={e.thumbnail} alt={e.title}/>
                    <h4>{`R$${e.price}`}</h4> 
                    <button onClick={()=> removeItem(e)} >
                        <BsFillCartDashFill/>  
                    </button>
                 </div>
                ))
            }
            </ProductsArea>
        </div>
    )
}