import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Crypto.css';

import Coin from './Coin';



function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  

  return (

    <div>
    
        <div className='coin-search'>
        <form>
        <input
        className='coin-input'
        type='text'
        onChange={handleChange}
        placeholder='Search a currency'
        />
        </form>
        </div>

        <div className='coin-app'>

        <div className='coin-title-container'>
        <div className='coin-title'>
          <h1 className='coin-name-title'>Name</h1>
          <h1 className='coin-symbol-title'>Symbol</h1>
          <h1 className='coin-price-title'>Price</h1>
          <h1 className='coin-volume-title'>Volume</h1>
          <h1 className='coin-percent-title'>Change</h1>
          <h1 className='coin-marketcap-title'>Mkt Cap</h1>
        </div>
        </div>
        

        {filteredCoins.map(coin => {
          return (
            <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
        </div>

    </div>

    
  );
}

export default Crypto