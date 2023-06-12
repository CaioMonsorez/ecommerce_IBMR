import React, { useState, useEffect } from 'react';
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { ProductsArea } from '../css/style';
import { Cabecalho} from '../components/Header/Header';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const Store = () => {

  const [data, setData] = useState([]);
  const [cart, setCart] =  useState(getItem('carrinhoYt') || []);
  const [favorites, setFavorites] = useState(getItem('favoritosYt') || []);
  
  useEffect(() => {
    const fetchApi = async () => {
    const url = 'http://localhost:3030';
    const response = await fetch(url);
    const objJson = await response.json();
    setData(objJson.results)
    } 
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id)
      setCart(arrFilter)
      setItem('carrinhoYt', arrFilter)
    } else {
      setCart([...cart,obj]);
      setItem('carrinhoYt',[...cart,obj])
    }
  };

  const clickFavorite = (obj) => {
    const element = favorites.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = favorites.filter((e) => e.id !== obj.id);
      setFavorites(arrFilter);
      setItem('favoritosYt', arrFilter);
    } else {
      setFavorites([...favorites, obj]);
      setItem('favoritosYt', [...favorites, obj]);
    }
  };

  return (
    <div>
     <Cabecalho/>
      <ProductsArea>
        {data.map((item) => (
          <div className='card' key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" />
            <h4>Preço R$: {item.price}</h4>
            <div className='buttons'>
            <button onClick={() => handleClick(item)}>
              {cart.some((itemCart) => itemCart.id === item.id) ? (<BsFillCartCheckFill />) : (<BsFillCartPlusFill />)}
            </button>
            <button onClick={() => clickFavorite(item)}>
                {favorites.some((itemFavorite) => itemFavorite.id === item.id) ? (
                <AiFillHeart className='coracao' />
                ) : (
                <AiOutlineHeart className='coracao' />
                )}
            </button>

            </div>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};

export default Store;
