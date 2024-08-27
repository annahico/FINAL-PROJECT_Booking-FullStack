import { loadStripe, Stripe } from "@stripe/stripe-js";
import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import Toast from "../components/Toast";

// Define el tipo de mensaje de toast
type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

// Define el tipo del contexto
type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
  stripePromise: Promise<Stripe | null>;
};

// Crea el contexto con un valor por defecto de `undefined`
const AppContext = createContext<AppContextType | undefined>(undefined);

// Carga la clave pública de Stripe
const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";
const stripePromise = loadStripe(STRIPE_PUB_KEY);

// Proveedor del contexto
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
        stripePromise,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
