import Layout from "../layout/Layout";

const SignUp = () => {
  const formik = useFormik({
    initialValues: formValue || initialValues, //initial values of the form
    onSubmit, //function to run when the form is submitted
    validationSchema, //validation schema for the form
    validateOnMount: true, //validate the forms when the component is mounted
    enableReinitialize: true, // load the last datas if it exists
  });
  return (
    <Layout>
      <h1>signup page</h1>
    </Layout>
  );
};

export default SignUp;
