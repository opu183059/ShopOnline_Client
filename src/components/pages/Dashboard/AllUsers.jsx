import { useEffect, useState } from "react";
import UserRow from "./UserRow";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://shop-online-server.vercel.app/allusers")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, [user]);
  console.log(user);
  return (
    <div>
      <h1 className="text-lg md:text-2xl mb-6 italic font-bold text-sky-700">
        All Users
      </h1>
      <div>
        {user?.map((userData, index) => (
          <UserRow
            key={userData._id}
            userData={userData}
            index={index}
          ></UserRow>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
