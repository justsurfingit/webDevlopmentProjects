import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState(null);
  // setData(FetchUserData());
  // const val = FetchUserData();
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data?.followers}
        <br />
        Welcome, {data?.login}
        <img src={data?.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
};
async function FetchUserData() {
  const da = await fetch("https://api.github.com/users/justsurfingit");
  const dj = await da.json();
  // console.log(dj);s
  // return da.json();
  return dj;
}
export { FetchUserData };
export default Github;
