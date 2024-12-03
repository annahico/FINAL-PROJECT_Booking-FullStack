import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as apiClient from "../apiClient";
import { useAppContext } from "../context/AppContext";

export type SignInFormDate = {
  email: string;
  password: string;
};

const SignIn = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormDate>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      // 1. show the toast
      showToast({ message: "Logged In", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      // 2. navigate to the home page
      // location state saved the previous location and if it is there it will redirect to that page
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      // show the toast
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold w-full md:w-1/2">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold w-full md:w-1/2">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?{" "}
          <Link to="/register" className="underline">
            Create an Account
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl rounded-lg"
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default SignIn;
