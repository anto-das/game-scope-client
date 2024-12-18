
import ImgOne from "../assets/The-Division-2-Review.jpg"
import ImgTwo from "../assets/freefire-2.jpg"
import ImgThird from "../assets/wp13111901.webp"
import ImgFourth from "../assets/prince of persia.jpg"
const Banner = () => {
    return (
      <div>
      <div className="carousel w-full z-0">
      <div id="slide1" className="carousel-item relative w-full ">
      <div className="w-full relative">
      <img
          src={ImgOne}
          className="w-full h-96 bg-cover bg-no-repeat bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white bg-black opacity-50">PUBG MOBILE</h1>
            <p className="text-center my-2 text-gray-200 text-lg font-semibold">PUBG is a popular battle royale game released in 2017. <br /> In this game, 100 players parachute onto a large island, <br /> gather weapons and gear, and fight to be the last person (or team) standing.</p>
            <a href="https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&pli=1" target="_blank" className="btn opacity-40 hover:opacity-100">Explore Now</a>
          </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle w-8 md:w-12">❮</a>
          <a href="#slide2" className="btn btn-circle w-8 md:w-12">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="w-full relative">
      <img
          src={ImgTwo}
          className="w-full h-96 bg-cover bg-no-repeat bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white opacity-50">Explore The Game Of Battle</h1>
            <p className="text-center my-2 text-gray-200 text-lg font-semibold">Free Fire is a fast-paced battle royale game where players fight for survival on an island, <br /> using unique characters, diverse weapons, and strategic gameplay to be the last one standing..</p>
            <a href="https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=en" target="_blank" className="btn">Explore Now</a>
          </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle w-8 md:w-12">❮</a>
          <a href="#slide3" className="btn btn-circle w-8 md:w-12">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="w-full relative">
      <img
          src={ImgThird}
          className="w-full h-96 bg-cover bg-no-repeat bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white">eFootball</h1>
            <p className="text-center my-2 text-gray-200 text-lg font-semibold">eFootball is a free-to-play football simulation game by Konami. It features realistic graphics, fluid gameplay, and dynamic player animations. <br /> Players can build teams, compete online, and enjoy frequent updates, making it a popular choice for football gaming enthusiasts.</p>
            <a href="https://play.google.com/store/apps/details?id=jp.konami.pesam&hl=en" target="_blank" className="btn opacity-40 hover:opacity-100">Explore Now</a>
          </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle w-8 md:w-12">❮</a>
          <a href="#slide4" className="btn btn-circle w-8 md:w-12">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className="w-full relative">
      <img
          src={ImgFourth}
          className="w-full h-96 bg-cover bg-no-repeat bg-center" />
         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white bg-black opacity-50">Prince Of Persia</h1>
            <p className="text-center my-2 text-gray-200 text-lg font-semibold">Prince of Persia is an iconic action-adventure game series featuring captivating storylines, parkour-inspired gameplay, <br /> and time manipulation mechanics. Set in ancient Persia, it offers thrilling battles and puzzles in beautifully designed environments.</p>
            <a href="https://en.wikipedia.org/wiki/Prince_of_Persia" target="_blank" className="btn opacity-40 hover:opacity-100">Explore Now</a>
          </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle w-8 md:w-12">❮</a>
          <a href="#slide1" className="btn btn-circle w-8 md:w-12">❯</a>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Banner;