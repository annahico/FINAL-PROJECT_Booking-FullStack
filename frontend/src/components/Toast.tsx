import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    // Configura un temporizador para cerrar el toast automáticamente después de 5 segundos
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    // Limpia el temporizador cuando el componente se desmonte
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  // Estilos condicionales basados en el tipo de toast
  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
