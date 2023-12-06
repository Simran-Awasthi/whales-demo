import { Swiper, SwiperSlide } from "swiper/react";
import FooterIcon from "./assets/footer-icon.svg";
import BellIcon from "./assets/bell-icon.svg";
import EyeIcon from "./assets/eye-icon.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import ReviewCard from "./components/ReviewCard";
import { NotificationCard } from "./components/NotificationCard";
import NotificationAmountCard from "./components/NotificationAmountCard";
import NotificationDormantCard from "./components/NotificationDormantCard";
import SubscribeForm from "./components/SubscribeForm";

function App() {
  return (
    <div className="w-full lg:h-full flex flex-col lg:flex-row justify-center items-center min-h-screen bg-zinc-50 font-inter">
      <div className="w-full lg:max-w-[60%] h-full flex flex-col gap-8 relative overflow-x-hidden z-0 py-12">
        <div className="w-[100%] h-[100%] bg-[radial-gradient(92.19%_89.74%_at_0%_100%,rgba(31,169,17,0.81)_17.21%,#2F15D0_64.58%,rgba(0,0,0,1)_100%);] z-[-1] absolute top-[0%] left-[0%]"></div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-12 gap-4">
          <div className="w-full flex flex-col justify-center gap-4 text-white pl-12">
            <img src={BellIcon} alt="whales icon" className="w-10 h-10" />
            <h1 className="text-3xl font-[500]">
              Get notified when a highly correlated whale makes a move
            </h1>
            <p className="text-gray-400 font-normal text-[16px]">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="w-full h-full flex justify-end items-center relative py-4">
            {/* <div className="bg-[linear-gradient(90deg,#000000FF,#0000000A)] w-full h-full absolute z-10 right-0"></div> */}
            {/* <div className="bg-[linear-gradient(270deg,#FFFFFF00,#FFFFFFEB,#FFFFFF,#FFFFFFAA,#FFFFFF00)] opacity-10 w-full h-full absolute z-10"></div> */}
            <div className="w-full items-center flex gap-0 h-full max-w-md pl-8">
              <Swiper
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                loop={true}
                slidesPerView={1.8}
                spaceBetween={10}
                className="mySwiper">
                <SwiperSlide>
                  <NotificationCard />
                </SwiperSlide>
                <SwiperSlide>
                  <NotificationAmountCard />
                </SwiperSlide>
                <SwiperSlide>
                  <NotificationDormantCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row  justify-between items-center px-12 gap-4">
          <img
            className="w-full h-full max-w-[300px] rounded-md shadow-md drop-shadow-md"
            src="https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1702857600&Signature=kIxbN1guxEYYegk4iHEUe46UCJDGqoZFmlsJwf9vHhCy09sudBRHLWZ7RPmTXUOiqc3ja2izqv04NdNjzIRU0X85sxxDnB~5fhkwPu6WooFRwvL931ATDMT4ccSoDSAMGHkvhd7oQCnZY4h4bTf7SIh60mpOf4rNW9dBbRlMl5j9RV76ClSdfJk0H~bzijk1g9nPvyJGXgkdkXfQSoXsNkxrXzQ7ZHJRIh~MHQeMMC~ksP2rx6qQI4SFZ7qBtQqhYSBVUyRjhAMXf4tj4sTc3kDdukplwYvNSQgpqNJASdc1Nww6SqanbSna~bjDvOATWXIpzPrOFgFgzrhhGajfuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="dashboard ui"
          />
          <div className="w-full flex flex-col justify-center items-start md:items-end gap-4 text-white md:text-right">
            <img src={EyeIcon} alt="whales icon" className="w-10 h-10" />
            <h1 className="text-3xl font-[500]">
              Watch what the whales are doing
            </h1>
            <p className="text-gray-400 font-normal text-[16px]">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-end gap-4 px-12 text-white text-xl">
          <p>Testimonials</p>
          <hr className="border-neutral-400 w-full" />
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row items-end justify-end gap-8 md:pl-12">
          <img
            src={FooterIcon}
            alt="whales icon"
            className="self-start pl-12 lg:self-auto pb-8"
          />
          <div className="w-full max-w-[90%]">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={14}
              className="mySwiper w-full h-full flex">
              <SwiperSlide>
                <ReviewCard
                  name="Jack F"
                  title="Ex Blackrock PM"
                  review={`“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewCard
                  name="Yash P"
                  title="Research, 3poch Crypto Hedge Fund"
                  review={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewCard
                  name="Shiv S"
                  title="Co-Founder Magik Labs"
                  review={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[40%] h-full bg-[#fff] flex justify-center items-center py-12">
        <SubscribeForm />
      </div>
    </div>
  );
}

export default App;
