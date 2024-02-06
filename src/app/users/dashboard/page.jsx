import NewProfile from "@/components/UserProfile/NewProfile";
import Profile from "@/components/UserProfile/profile";
import { poppins } from "@/components/Utilities/font";
import { getDataCheckUser } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import axios from "@/libs/axios";

const page = async () => {
  const user = await authUserSession();

  const checkUser = await getDataCheckUser(user.email);
  console.log(checkUser);

  // checkUser.data.success

  return (
    <div
      className={`${poppins.className} relative bg-[url('/PPbgWhite.png')] bg-cover bg-fixed bg-center`}
    >
      {checkUser && user ? (
        <NewProfile data={checkUser} />
      ) : user ? (
        <Profile data={user} />
      ) : (
        <div>
          <h1>LOGIN BANG</h1>
        </div>
      )}
    </div>
  );
};

export default page;

/* {user ? (
  <Profile data={user} />
) : (
  <div>
    <h1>LOGIN BANG</h1>
  </div>
)} */
