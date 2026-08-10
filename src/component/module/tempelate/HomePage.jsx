import { getApiList } from "../../../services/CryptoApi";
import Chart from "../Chart";
import Pagination from "../Pagination";
import Searchbox from "../Search";
import Tablecoin from "../Tablecoin";
import { useEffect, useState } from "react" 

function HomePage(){

    const [page,setPage] =useState(1)
    const [coins,setCoins] = useState([])
    const [currency,setCurrency] =useState("usd")
    const [chart,setChart] = useState(null)


    useEffect(()=> {

      const getData = async() => {
        try{
         const res = await fetch(getApiList(page,currency))
        const json =await res.json()
        setCoins(json);
        }catch(error){
        console.log(error);
        
        }
      };

      getData();

    },[page,currency])

    return(
        <div>
            <Searchbox currency = {currency} setCurrency={setCurrency} />
            <Tablecoin coins={coins} currency = {currency} setChart={setChart}/>
             <Pagination  page={page} setPage={setPage}/>
             {!!chart && <Chart chart={chart} setChart={setChart}/>}              
        </div>
    )
}

export default HomePage; 