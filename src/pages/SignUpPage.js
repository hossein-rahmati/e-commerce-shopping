import { useFormik } from "formik";
import Input from "../common/Input";
import * as yup from "yup";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import signupUser from "../services/signupService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../providers/AuthProvider";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "must be at least 6 characters"),

  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = ({ history }) => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const Auth = useAuth();

  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };

    signupUser(userData)
      .then((res) => {
        history.push(redirect);
        setAuth(res.data);
        localStorage.setItem("authState", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response.data.message && err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  const formik = useFormik({
    initialValues,
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
            Sign up
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <Input formik={formik} name="name" label="Name" />

            <Input formik={formik} name="email" label="Email" />

            <Input
              formik={formik}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />

            <Input
              formik={formik}
              name="password"
              label="Password"
              type="password"
            />

            <Input
              formik={formik}
              name="passwordConfirm"
              label="Password Confirmation"
              type="password"
            />

            <button
              disabled={!formik.isValid}
              type="submit"
              className="px-6 py-2 btn w-full my-4 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
          <div className="text-white">
            <Link to={`/login?redirect=${redirect}`}>
              already have an account?{" "}
              <span className="text-blue-300">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
