import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  // Configura la mutación para el cierre de sesión
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      // Invalidar la consulta de validación del token después de cerrar sesión
      await queryClient.invalidateQueries("validateToken");
      // Mostrar mensaje de éxito
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      // Mostrar mensaje de error si ocurre un problema
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  // Manejar el clic en el botón de cerrar sesión
  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
