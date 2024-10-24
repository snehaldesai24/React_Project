import React from "react";
import Search from "./Search";
import GithubDetails from "./GithubDetails";
import GithubUser from "./GithubUser";

function GithubHome(){
    return(
      <div className="container shadow mt-3 p-3 w-75 mx-auto">
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <div className="col-4">
          <GithubUser />
        </div>
        <div className="col-8">
          <GithubDetails />
        </div>
      </div>
    </div>
    )
}

export default GithubHome;
