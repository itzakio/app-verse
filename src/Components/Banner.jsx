import playStore from "../assets/play-store.png"
import appStore from "../assets/app-store.png"
import heroImg from "../assets/hero.png"

const Banner = () => {
  return (
    <div>
      <div className=" mt-5 md:mt-10 lg:mt-16 xl:mt-20 ">
        <div className="max-w-4xl mx-auto px-5 xl:px-0">
            <h1 className="text-center text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold text-indigo-950">
          We Build
          <br />
          <span className="bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent font-bold">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center mt-4 text-gray-500 text-sm md:text-base">
            At AppVerse, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-4 items-center my-10">
            <a href="https://play.google.com/store/apps?hl=en" target="_blank">
              <button className="btn w-40">
                <img className="w-5" src={playStore} alt="" />
                <span>Google Play</span>
                </button>
            </a>
            <a href="https://apps.apple.com/bj/developer/apple/id284417353?mt=12" target="_blank">
              <button className="btn w-40">
                <img className="w-5" src={appStore} alt="" />
                <span>App Store</span>
                </button>
            </a>
            
        </div>
        <img src={heroImg} alt="" />
        </div>

        

      </div>
      <div className="py-5 md:py-10 lg:py-16 xl:py-20 text-center text-white bg-linear-to-r from-violet-600 to-violet-400">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Trusted by Millions, Built for You</h2>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-15 lg:gap-20 justify-center items-center max-w-4xl mx-auto">
                <div className="space-y-2">
                    <p className="text-gray-300">Total Downloads</p>
                    <h4 className="text-6xl font-extrabold">29.6M</h4>
                    <p className="text-gray-300">21% more than last month</p>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-300">Total Reviews</p>
                    <h4 className="text-6xl font-extrabold">906K</h4>
                    <p className="text-gray-300">46% more than last month</p>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-300">Active Apps</p>
                    <h4 className="text-6xl font-extrabold">132+</h4>
                    <p className="text-gray-300">31 more will Launch</p>
                </div>

            </div>

        </div>
    </div>
  );
};

export default Banner;
