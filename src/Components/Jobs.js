import React, { useContext, useEffect } from "react";
import "./css/job.css";
import { JobData } from "../Context/JobContext";
import JCards from "../Components/Cards/JCards";
import { motion } from 'framer-motion'

function Jobs() {
  let Data = useContext(JobData);
  useEffect(() => {
    document.title = "Heyram Infrastructure Career"
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <motion.div className="container-fluid " initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <div className="row text-center open  ">
          <div className="col-md-12 d-flex justify-content-center">
          </div>
        </div>
        <div className="ps-5 row job-portal">
          <div className="col-md-12 text-white">
            <div className="h1 heading-job">
              Current Openings
            </div>
            <p className="titl-pc w-75 pt-3 pb-3">Explore exciting career opportunities at Heyram Infrastructure. Join our team of experts in marketing and technology and help us shape the future of digital marketing and software development.</p>
          </div>
        </div>
        <div className="row p-3 job-cards">
          {Data.data.map((e, i) => {
            return (
              <div className="col-md-4">
                <JCards input={e} key={i} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Jobs;