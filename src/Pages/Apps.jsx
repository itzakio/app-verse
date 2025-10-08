import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import NoAppFound from "../Components/Error/NoAppFound";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("")
  const term = search.trim().toLocaleLowerCase()

  const searchedApp = term?apps.filter(app => app.title.toLocaleLowerCase().includes(term)):apps;

  return (
    <div className="mt-5 md:mt-10 lg:mt-16 xl:mt-20 max-w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-indigo-950">
        Our All Applications
      </h2>
      <p className="text-center mt-4 text-gray-500 text-sm md:text-base">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-semibold">({searchedApp.length}) Apps Found</p>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
        </label>
      </div>


      {
        loading?<h1>Loading</h1>:
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 px-4 xl:px-0">
        {searchedApp.length === 0?
        <NoAppFound setSearch={setSearch}/>:
        searchedApp.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      }

    </div>
  );
};

export default Apps;
