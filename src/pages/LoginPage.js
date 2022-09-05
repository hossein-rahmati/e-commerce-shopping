import { useFormik } from "formik";
import Input from "../common/Input";
import * as yup from "yup";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import loginUser from "../services/loginService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../providers/AuthProvider";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "must be at least 6 characters"),
});

const Login = ({ history }) => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const Auth = useAuth();

  const onSubmit = (values) => {
    loginUser(values)
      .then((res) => {
        history.push(redirect);
        setAuth(res.data);
        localStorage.setItem("authState", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          toast.error(err.response.data.message);
        }
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (Auth) history.push(redirect);
  }, [redirect, Auth]);

  return (
    <Layout>
      <div className="centerItem">
        <div className="bg-slate-600 p-3 rounded-md">
          <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 text-white">
            Login
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <Input formik={formik} name="email" label="Email" />

            <Input
              formik={formik}
              name="password"
              label="Password"
              type="password"
            />

            <button
              disabled={!formik.isValid}
              type="submit"
              className="px-6 py-2 btn w-full my-4 cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="text-white">
            <Link to={`/signup?redirect=${redirect}`}>
              Don't have an account?{" "}
              <span className="text-blue-300">Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
