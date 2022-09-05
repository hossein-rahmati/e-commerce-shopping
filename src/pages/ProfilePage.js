import Layout from "../layout/Layout";
import { useAuth, useAuthActions } from "../providers/AuthProvider";

const Profile = ({ history }) => {
  const Auth = useAuth();
  const setAuth = useAuthActions();

  const submitHandler = () => {
    setAuth(false);
    history.push("/");
  };

  return (
    <Layout>
      <div
        className="mx-auto w-72 sm:w-96
       bg-slate-600 p-4 rounded-md"
      >
        <h2 className="title text-white mb-6">Profile</h2>
        <div className="flex flex-col gap-y-4 text-gray-200 mb-6">
          <p>username: {Auth.name}</p>
          <p>Phone Number: {Auth.phoneNumber}</p>
          <p>Email: {Auth.email}</p>
        </div>
        <button
          className="btn bg-red-500 text-white w-24"
          onClick={submitHandler}
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Profile;
