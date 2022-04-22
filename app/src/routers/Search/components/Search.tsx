import * as React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Header } from "./../../../shared/components/Header";
import { fetchSearch } from "./../Services/search";

export const Search = () => {
  const q = "";
  const { data, status } = useQuery(["search", q], () => fetchSearch(q));

  return (
    <>
      <Header />
      <main>
        <h1>Search</h1>

        <div className="App">
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" && (
            <div>
              {data?.map((item: any, id: number) => (
                <React.Fragment key={id}>
                  <p key={item.id}>{item.title}</p>
                  <Link to={"/product/" + item.id}>Detail</Link>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
