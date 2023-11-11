import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      {user ? (
        <div>
          <h3>DASHBOARD</h3>
          <h5>Welkom, {user.name}</h5>
          <Image src={user.image} alt="..." width={250} height={250} />
        </div>
      ) : (
        <div>
          <h1>LOGIN NGENTOT</h1>
        </div>
      )}
    </div>
  );
};

export default page;
