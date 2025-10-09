import React, { useEffect, useState } from "react";
import InstalledAppCard from "../Components/InstalledAppCard";
import { uninstallApps } from "../Utility/LocalStoreage";
import toast from "react-hot-toast";
import NoAppInstalled from "../Components/Error/NoAppInstalled";

const Installation = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [appList, setAppList] = useState([]);
  useEffect(() => {
    const installedAppList = JSON.parse(localStorage.getItem("installed"));
    if (installedAppList) {
      setAppList(installedAppList);
    }
  }, []);

  const sortedApps = (() => {
    if (sortOrder === "download-asc") {
      return [...appList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "download-desc") {
      return [...appList].sort((a, b) => b.size - a.size);
    } else {
      return appList;
    }
  })();

  const uninstallHandler = (id, title) => {
    uninstallApps(id);

    setAppList((prv) => prv.filter((p) => p.id !== id));
    toast.success(`${title} Successfully Uninstalled!`)
  };

  return (
    <div className="mt-5 md:mt-10 lg:mt-16 xl:mt-20 max-w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-indigo-950">
        Your Installed Apps
      </h2>
      <p className="text-center mt-4 text-gray-500 text-sm md:text-base">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-5 justify-between items-center">
        <p className="text-2xl font-semibold">({appList.length}) Apps Found</p>
        <label>
          <select
            className="select "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="download-asc">Low &gt; High</option>
            <option value="download-desc">High &gt; Low</option>
          </select>
        </label>
      </div>

      <div className="my-10 space-y-4">
        {sortedApps.length === 0? <NoAppInstalled/>:(
        sortedApps.map((app) => (
          <InstalledAppCard
            key={app.id}
            app={app}
            uninstallHandler={uninstallHandler}
          />)
        ))}
      </div>
    </div>
  );
};

export default Installation;
