import React, { useState} from 'react';
import { ProductsArea } from '../css/style'
import { Cabecalho  } from '../components/Header/Header';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { AiFillHeart } from 'react-icons/ai';
import styles from './Cart.module.css';

export const Favorites = () => {
    const[data,setData] = useState(getItem('favoritosYt') ||[])
    const removeItem = (obj) => {
    const arrFilter = data.filter((e)=>e.id !== obj.id)
    setData(arrFilter)
    setItem('favoritosYt',arrFilter) 
    }

    return ( <>
            <Cabecalho />
            <h2> Meus favoritos </h2>
            <ProductsArea>
         
                {data.map((e) => (
                    <div key={e.id} className={styles.carrinhoProdutos}>
                        <h4>{e.title}</h4> 
                        <img src={e.thumbnail} alt={e.title}/>
                        <h4>{`R$${e.price}`}</h4> 
                        <button className='coracao' onClick={()=> removeItem(e)} >
                            <AiFillHeart/>  
                        </button>
                </div>
                ))}
            </ProductsArea>
           </> 



    )     
}
