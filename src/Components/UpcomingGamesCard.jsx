

const UpcomingGamesCard = ({gameData}) => {
    const {game_name,game_description,game_company,game_image} = gameData;
    return (
        <div className="bg-base-100 shadow-lg">
    <img
      src={game_image}
      alt={game_name} className="h-52 w-full"/>
  <div className="card-body">
    <h2 className="card-title">
      {game_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{game_description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-accent">{game_company}</div>
    </div>
  </div>
</div>
    );
};

export default UpcomingGamesCard;