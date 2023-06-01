import React, { useState, useEffect } from 'react';
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { ProductsArea } from '../css/style';
import { Cabecalho} from '../components/Header/Header';

export const Store = () => {

  const [data, setData] = useState([]);
  const [cart, setCart] =  useState(getItem('carrinhoYt') || []);

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

  return (
    <div>
     <Cabecalho/>
      <ProductsArea>
        {data.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" />
            <h4>Preço R$: {item.price}</h4>
            <button onClick={() => handleClick(item)}>
              {cart.some((itemCart) => itemCart.id === item.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};

export default Store;
