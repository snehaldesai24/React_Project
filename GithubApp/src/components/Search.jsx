import { useState } from "react";
import {getUserDetails} from "./Service";

function Search(){
  let [username, setUserName] = useState("");

  const getUser= () =>{
    getUserDetails(username).then((res)=>
      {console.log(res.data);})
      .catch((error)=>{
      console.log(error);
    });
  };

    return(
        <div class="container">
            <div class="row my-2">
                <h2 class="text-primary">GitHub Search Application</h2>
            </div>
            <div class="row my-2">
                <div class="col-8">
                    <input class="form-control" type="text" placeholder="Enter Username" onChange={(e) => {
              setUserName(e.target.value);}} />
                </div>
                <div class="col-4">
                    <button class="btn btn-primary px-5" onClick={getUser}>Search <i class="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Search;
