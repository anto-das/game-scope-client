import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImgOne from "../assets/The-Division-2-Review.jpg"
import ImgTwo from "../assets/freefire-2.jpg"
import ImgThird from "../assets/wp13111901.webp"
import ImgFourth from "../assets/prince of persia.jpg"
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import Slide from './Slide';
const Banner = () => {
    return (
        <Swiper
        cssMode={true}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay:4000,
          disableOnInteraction:false
        }}
        navigation={true}
        pagination={{
          clickable:true,
        }}
        modules={[Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide 
          img={ImgOne}
          title={'PUBG MOBILE'}
          description={'PUBG is a popular battle royale game released in 2017. In this game, 100 players parachute onto a large island, gather weapons and gear, and fight to be the last person (or team) standing.'}
          link={'https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&pli=1'}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
          img={ImgTwo}
          title={'Explore The Game Of Battle'}
          description={'Free Fire is a fast-paced battle royale game where players fight for survival on an island, <br /> using unique characters, diverse weapons, and strategic gameplay to be the last one standing..'}
          link={'https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&pli=1'}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
          img={ImgThird}
          title={'eFootball'}
          description={'eFootball is a free-to-play football simulation game by Konami. It features realistic graphics, fluid gameplay, and dynamic player animations. <br /> Players can build teams, compete online, and enjoy frequent updates, making it a popular choice for football gaming enthusiasts.'}
          link={'https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&pli=1'}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
          img={ImgFourth}
          title={'Prince Of Persia'}
          description={'Prince of Persia is an iconic action-adventure game series featuring captivating storylines, parkour-inspired gameplay, <br /> and time manipulation mechanics. Set in ancient Persia, it offers thrilling battles and puzzles in beautifully designed environments.'}
          link={'https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&pli=1'}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner;