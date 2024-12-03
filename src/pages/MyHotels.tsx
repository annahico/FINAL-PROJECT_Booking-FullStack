import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { BsBuilding, BsMap } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../apiClient";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-blue-600 text-white font-bold text-xl p-2 hover:bg-blue-500 rounded-lg"
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols gap-8">
        {hotelData.map((hotel) => (
          <div
            key={hotel._id}
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="grid grid-cols-6 gap-2">
              {hotel.imageUrls.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="hotel-images"
                  className="rounded-lg"
                />
              ))}
            </div>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 text-sm flex items-center">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 text-sm flex items-center">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 text-sm flex items-center">
                <BiMoney className="mr-1" />${hotel.pricePerNight} Per Night
              </div>
              <div className="border border-slate-300 rounded-sm p-3 text-sm flex items-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} Adults, {hotel.childCount} Children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 text-sm flex items-center">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Ratings
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit/hotel/${hotel._id}`}
                className="flex bg-blue-600 text-white font-bold text-lg p-2 hover:bg-blue-500 rounded-lg"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
