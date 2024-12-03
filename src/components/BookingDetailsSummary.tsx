import { HotelType } from "../apiClient";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:{" "}
        <p className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</p>
      </div>
      <div className="flex justify-between">
        <div>
          Check-In
          <p className="font-bold">{checkIn.toDateString()}</p>
        </div>
        <div>
          Check-Out
          <p className="font-bold">{checkOut.toDateString()}</p>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <p className="font-bold">{numberOfNights} nights</p>
      </div>
      <div>
        Guests
        <div className="font-bold">
          {adultCount} adults & {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
