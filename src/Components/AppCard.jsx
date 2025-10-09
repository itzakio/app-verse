import millify from "millify";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const {id, title, ratingAvg, image, downloads } = app;
  return (
    <Link to={`/app-details/${id}`} className="flex flex-col hover:-translate-y-2 transition-all duration-150 bg-white space-y-2 rounded-lg overflow-hidden p-4">
      <img className="flex-1 border rounded-lg w-full" src={image} alt="" />
      <h4 className="font-semibold text-xl">{title}</h4>
      <div className="flex justify-between items-center">
        <p className="px-3 py-1 bg-gray-100 rounded font-medium text-green-500 flex gap-2 items-center"><FiDownload /> {millify(downloads, { precision: 1 })}</p>
        <p className="px-3 py-1 bg-gray-100 rounded font-medium text-yellow-500 flex gap-2 items-center"><FaStar /> {ratingAvg}</p>
      </div>
    </Link>
  );
};

export default AppCard;
