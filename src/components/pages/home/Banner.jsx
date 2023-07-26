/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div>
      <div className="hero md:h-screen bg-[url('https://e0.pxfuel.com/wallpapers/113/696/desktop-wallpaper-frankenstein-foods-you-re-probably-eating-right-now-episode-interactive-background-anime-background-anime-background-grocery-shopping.jpg')] bg-fixed bg-cover">
        <div className="bg-black/60 w-full hero h-screen">
          <div className="text-center text-sky-100">
            <div className="flex justify-center mb-2">
              <img
                src="/src/assets/repliqLogo.png"
                alt=""
                className="w-16 md:w-20 p-2 bg-white rounded-full shadow-md shadow-sky-600"
              />
            </div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="text-3xl md:text-5xl font-semibold mb-4"
            >
              Wellcome to SHOP online
            </h1>

            <p
              data-aos="zoom-in"
              data-aos-duration="1800"
              className="text-base w-9/12 mx-auto backdrop-blur-[2px] italic"
            >
              "Embrace the Future with TechXpert - Your ultimate tech
              destination. Stay ahead with the latest gadgets, cutting-edge
              electronics, and innovative accessories. Whether you're a tech
              enthusiast or a casual user, TechXpert has something to elevate
              your digital experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
