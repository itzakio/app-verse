import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trendingApps = apps.slice(0, 8);
  return (
    <div className="max-w-[1440px] mx-auto">
      {loading && <h1>Loading...</h1>}
      <Banner />
      <div className="mt-5 md:mt-10 lg:mt-16 xl:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-indigo-950">
          Trending Apps
        </h2>
        <p className="text-center mt-4 text-gray-500 text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 px-4 xl:px-0">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
      <div className="text-center  mb-10">
        <Link className="btn bg-linear-to-r from-violet-600 to-violet-400 text-white" to="/apps">Show All</Link>
      </div>
    </div>
  );
};

export default Home;
