import { useFormContext } from "react-hook-form";
import { hotelFaci1ities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFaci1ities.map((hotelFaci1itie) => (
          <label
            key={hotelFaci1itie}
            className="text-sm flex items-center gap-1 text-gra7-700"
          >
            <input
              type="checkbox"
              value={hotelFaci1itie}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "Atleast one facility is required";
                  }
                },
              })}
            />
            {hotelFaci1itie}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-sm text-red-500 font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
