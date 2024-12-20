
const PopularGameCard = ({popularGameData}) => {
    const {name,image,description} = popularGameData;
    return (
        <div className="w-full">
        <div className="border-b flex-col md:flex-row lg:flex-row mb-2 space-y-3">
          <div className="w-full">
          <img
            src={image}
            className="w-full h-96" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl text-center font-bold"> {name} </h1>
            <p className="py-6 text-center">
              {description}
            </p>
            <a href="" target="_blank">
            <button className="btn btn-accent rounded-none w-full">Explore Now</button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default PopularGameCard;