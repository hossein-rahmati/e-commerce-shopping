import { useFormik } from "formik";
import Input from "../common/Input";
import * as yup from "yup";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number") //set a limit to the length of the phone number
    .nullable(),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "must be at least 6 characters"),

  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"), // for checking if the password is the same
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: initialValues, //initial values of the form
    // onSubmit, //function to run when the form is submitted
    validationSchema, //validation schema for the form
    validateOnMount: true, //validate the forms when the component is mounted
  });

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
              name="phone"
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
              disabled={!formik.isValid} //disable the button if the form had errors
              type="submit"
              className="px-6 py-2 btn w-full my-4 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
          <div className="text-white">
            <Link to="/login">
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
