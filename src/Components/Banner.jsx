import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-7xl font-semibold text-indigo-950">
          We Build
          <br />
          <span className="bg-linear-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent font-bold">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center mt-4">
            At AppVerse, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-4 items-center my-10">
            <button className="btn w-50">Google Play</button>
            <button className="btn w-50">App Store</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
