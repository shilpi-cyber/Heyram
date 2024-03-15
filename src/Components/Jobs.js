import React, { useContext } from "react";
import "./css/job.css";
import { JobData } from "../Context/JobContext";
import JCards from "./JCards";

function Jobs() {
  let Data = useContext(JobData);
  return (
    <>
      <div className="container-fluid open ">
        <div className="row text-center open  ">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="card-open">
              <h1 className="text-white title-open display-1 pt-4 pb-4 ">
                Job Openings
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {Data.data.map((e, i) => {
            return (
              <div className="col-md-4">
                <JCards input={e} key={i} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Jobs;
