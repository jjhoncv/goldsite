import React from "react";

import { useQuery } from "react-query";
import { Header } from "./../../shared/components/Header";
import { fetchUsers } from "./../../services/users";

import styles from "./Home.module.scss";
export const Home = () => {
  const { data, status } = useQuery("users", fetchUsers);
  // console.log("home view");
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.title}> 2sss 2Home</h1>
        <div className="App">
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" && (
            <div>
              {data?.map((user: any) => (
                <p key={user.id}>{user.name}</p>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
