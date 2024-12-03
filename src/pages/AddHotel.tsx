import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as apiClient from "../apiClient";
import { useAppContext } from "../context/AppContext";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";

const AddHotel = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "New Hotel added!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error adding new Hotel!", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
    navigate("/my-hotels");
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
