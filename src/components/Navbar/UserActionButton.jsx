import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user =  await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="hidden md:flex tracking-wider gap-2">
      {user ? (
        <Link
          href="/users/dashboard"
          className="hidden md:block border border-[#333] px-4 py-2 rounded-2xl text-[#333] hover:bg-[#333] hover:text-white transition-all"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="hidden md:block border border-[#333] px-4 py-2 rounded-2xl text-[#333] hover:bg-[#333] hover:text-white transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton

