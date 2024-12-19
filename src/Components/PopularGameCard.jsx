
const PopularGameCard = ({popularGameData}) => {
    const {name,image,description} = popularGameData;
    return (
        <div className="">
        <div className="hero-content border-b flex-col lg:flex-row-reverse mb-2">
          <div className="w-full">
          <img
            src={image}
            className="w-full h-96 shadow-2xl" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold"> {name} </h1>
            <p className="py-6">
              {description}
            </p>
            <a href="" target="_blank">
            <button className="btn btn-accent rounded-none">Explore Now</button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default PopularGameCard;