import { useLoaderData } from "react-router-dom";
import UpcomingGamesCard from "./UpcomingGamesCard";


const UpcomingGames = () => {
    const gamesData = useLoaderData();
    return (
        <div className="">
            <h2 className="text-3xl font-bold ml-2 mb-3">UPCOMING GAMES :</h2>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
           {
            gamesData.map(gameData => <UpcomingGamesCard key={gameData.game_id} gameData={gameData}></UpcomingGamesCard>)
           }
        </div>
        </div>
    );
};

export default UpcomingGames;