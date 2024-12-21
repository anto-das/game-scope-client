
import UpcomingGamesCard from "./UpcomingGamesCard";
import Loading from "./Loading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UpcomingGames = () => {
    const {loading,setLoading,toggle} = useContext(AuthContext);
    const [gamesData,setGamesData] = useState([])

    useEffect(()=>{
        fetch("./UpcomingGame.json")
        .then(res => res.json())
        .then(data => {
            setGamesData(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="">
            <h2 className={toggle?"text-2xl font-bold ml-2 mb-3 text-gray-200":"text-2xl font-bold ml-2 mb-3"}>UPCOMING GAMES :</h2>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
           {
            gamesData.map(gameData => <UpcomingGamesCard key={gameData.game_id} gameData={gameData}></UpcomingGamesCard>)
           }
        </div>
        </div>
    );
};

export default UpcomingGames;