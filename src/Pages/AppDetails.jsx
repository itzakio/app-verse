import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import millify from "millify";
import downloadIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import AppBarChart from "../Components/AppBarChart";
import AppNotFound from "../Components/Error/AppNotFound";
import { loadApps, updateAppList } from "../Utility/LocalStoreage";
import toast from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const appDetails = apps.find((app) => app.id === Number(id));

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = loadApps();
    const alreadyInstalled = installedApps.some((app) => app.id === Number(id));
    setIsInstalled(alreadyInstalled);
  }, [id]);

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (!appDetails) return <AppNotFound />;

  const {
    title,
    size,
    reviews,
    ratings,
    ratingAvg,
    image,
    downloads,
    description,
    companyName,
  } = appDetails;


  const installedHandler = () =>{
    toast.success(`${title} Successfully Installed!`)
    updateAppList(appDetails)
    setIsInstalled(true);
  }

  return (
    <div className="max-w-[1440px] mx-auto my-20">
      {/* top section */}
      <div className="flex flex-col lg:flex-row gap-10">
        <img className="w-88 mx-auto" src={image} alt="" />
        <div className="flex-1 flex flex-col space-y-5 justify-between">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">
              Developed by{" "}
              <span className="text-violet-600">{companyName}</span>
            </p>
          </div>

          <hr className="w-full text-gray-400" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex flex-col items-center lg:items-start">
              <img src={downloadIcon} alt="" />
              <p className="text-gray-500">Downloads</p>
              <p className="text-4xl font-extrabold">
                {" "}
                {millify(downloads, { precision: 1 })}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img src={ratingsIcon} alt="" />
              <p className="text-gray-500">Average Ratings</p>
              <p className="text-4xl font-extrabold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img src={reviewIcon} alt="" />
              <p className="text-gray-500">Total Reviews</p>
              <p className="text-4xl font-extrabold">
                {" "}
                {millify(reviews, { precision: 1 })}
              </p>
            </div>
          </div>

          <button
            disabled={isInstalled}
            onClick={()=>installedHandler()}
            className={`btn w-fit mx-auto lg:mx-0 transition-all duration-100  ${isInstalled?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-green-500 text-white hover:bg-green-600"}`}
          >
             {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="w-full my-10 text-gray-400" />

      {/* rating section */}
      <AppBarChart ratings={ratings} />

      <hr className="w-full my-10 text-gray-400" />

      {/* description section */}
      <div className="space-y-5 px-5">
        <h4 className="text-2xl font-semibold">Description:</h4>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
