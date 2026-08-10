import chartUp from "../../assets/chart-Up.svg";
import chartDown from "../../assets/chart-down.svg";
import styled from "./TableCoin.module.css";
import { currencySymbolMap } from "../../utiles/currency";
import { coinMarket } from "../../services/CryptoApi";

function Tablecoin({ coins,currency,setChart}){

  return (

    <div className={styled.container}>
    <table className={styled.table} >
      <thead>

        <tr>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
          <th>Gragh</th>
        </tr>

      </thead>
      <tbody>
        {coins.map((coin) => (
          <TableRow coin={coin} currency={currency} key={coin.id} setChart={setChart}/>
        ))}
        
      </tbody> 
    </table>
    </div>
  );
}

export default Tablecoin;
const TableRow = ({ coin, currency, setChart }) => {
  const {
    name,
    id,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  } = coin;

  const currencySymbol = currencySymbolMap[currency];

  const showHandler = async () => {
    try {
      const res = await fetch(coinMarket(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styled.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>

      <td>{name}</td>

      <td>
        {currencySymbol}{" "}
        {currency === "jpy"
          ? Math.round(current_price)
          : current_price.toLocaleString()}
      </td>

      <td
        className={
          price_change_percentage_24h > 0
            ? styled.success
            : styled.error
        }
      >
        {price_change_percentage_24h}%
      </td>

      <td>{currencySymbol} {total_volume.toLocaleString()}</td>

      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
  );
};
