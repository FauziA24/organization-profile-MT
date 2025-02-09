import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const profiles = [
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599454100789-b211e369bd04?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1594568284297-7c64464062b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to Majelis Taklim Al-Khawarizmi
      </h1>
      <p className="text-xl text-center mb-6">
        We are a leading provider of innovative solutions in our industry.
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-lg mx-auto"
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index}>
            <img
              src={profile}
              alt={`Profile ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To deliver exceptional value to our clients through cutting-edge
            technology and unparalleled service.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To be the global leader in our field, driving innovation and setting
            industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}
