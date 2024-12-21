import { useContext, useEffect, useState } from "react";
import PopularGameCard from "./PopularGameCard";
import Loading from "./Loading";
import { AuthContext } from "../Provider/AuthProvider";

const PupolarGames = () => {
    const {loading,setLoading,toggle} = useContext(AuthContext)
    const [pupolarGames,setPupolarGames] = useState([]);
    useEffect(() =>{
        fetch("./PupolarGames.json")
        .then(res => res.json())
        .then(data =>{
            setPupolarGames(data)
            setLoading(false)
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className={toggle?"divider mb-4 text-gray-100":"divider mb-4"}>Most Popular Game</div>
            <div className="space-y-5">
            {
                pupolarGames.map(popularGameData => <PopularGameCard key={popularGameData.id}popularGameData={popularGameData}></PopularGameCard>)
            }
            </div>
        </div>
    );
};

export default PupolarGames;