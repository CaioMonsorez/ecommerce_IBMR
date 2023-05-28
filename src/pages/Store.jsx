import React, { useState, useEffect } from 'react';
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorage';
export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem('carrinhoyt') || []);

  const fetchApi = async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=iphone';
    const response = await fetch(url);
    const objJson = await response.json();

    setData(objJson.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem('carrinhoyt',arrFilter)
    } else {
      setCart([...cart, obj]);
      setItem('carrinhoyt',[...cart,obj])
    }
  };

  return (
    <div>
      <h1>Loja de Iphone </h1>
      <div>
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
      </div>
    </div>
  );
};

export default Store;
