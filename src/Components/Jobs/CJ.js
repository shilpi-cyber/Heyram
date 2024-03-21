import React from "react";
import "./Jobcs.css";

function CJ() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 text-center job-title-card">
            <div
              style={{ fontSize: "1.5rem" }}
              className="pt-3 pb-3 company-title"
            >
              HeyRam Infrastructure | Full Time
            </div>
            <div className="h1 pt-3 pb-3">CLOUD COMPUTING</div>
            <div className="d-flex justify-content-center buttons">
              <div style={{ fontWeight: "350" }}>SHARE IT TO</div>
            </div>
            <div className="icons">
              <a href="" rel="noreferrer noopener" target="_blank">
                <i
                  style={{ color: "blue" }}
                  class="fa-brands ps-2 pe-2 fa-3x fa-facebook"
                ></i>
              </a>
              <a href="" rel="noreferrer noopener" target="_blank">
                <i
                  style={{ color: "black" }}
                  class="fa-brands ps-2 pe-2 fa-3x fa-x-twitter"
                ></i>
              </a>
              <a href="" rel="noreferrer noopener" target="_blank">
                <i class="fa-brands ps-2 pe-2 fa-3x fa-linkedin"></i>
              </a>
              <a href="" rel="noreferrer noopener" target="_blank">
                <i
                  style={{ color: "green" }}
                  class="fa-brands p-2 fa-3x fa-whatsapp"
                ></i>
              </a>
              <a href="" rel="noreferrer noopener" target="_blank">
                <i class="fa-brands ps-2 pe-2 fa-3x fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row pt-5 ps-3 pe-3 pb-5">
          <div className="col-md-8">
            <div className="h1 ">Job Description</div> <br />
            <p className="pe-5 cs-5">
              <b className="cs-5">Role Description:</b> A Cloud Computing
              professional is responsible for designing, implementing, and
              managing cloudbased solutions to meet the organization's needs.
              They work with various cloud service providers to deploy and
              maintain cloud infrastructure, applications, and services. They
              also ensure the security, scalability, and performance of cloud
              environments.{" "}
            </p>
            <div className="roles-respond">
              <div className="h4">Responsibilities:</div>
              <ul>
                <li className="cs-5">
                  Designing and implementing cloud-based solutions that align
                  with the organization's goals and requirements.
                </li>
                <li className="cs-5">
                  Managing cloud infrastructure, including virtual servers,
                  storage, and networking resources.
                </li>
                <li className="cs-5">
                  Monitoring and optimizing the performance of cloud services to
                  ensure reliability and scalability.
                </li>
                <li className="cs-5">
                  Ensuring the security of cloud environments by implementing
                  best practices and security measures.
                </li>
                <li className="cs-5">
                  Collaborating with cross-functional teams to integrate cloud
                  solutions with existing systems and applications.
                </li>
                <li className="cs-5">
                  Troubleshooting and resolving issues related to cloud services
                  and infrastructure.
                </li>
                <li className="cs-5">
                  Keeping up-to-date with the latest trends and technologies in
                  cloud computing to continuously improve the organization's
                  cloud strategy.
                </li>
              </ul>
            </div>
            <div className="roles-respond">
              <div className="h4">Qualifications:</div>
              <ul>
                <li className="cs-5">
                  Bachelor's degree in Computer Science or a related field
                </li>
                <li className="cs-5">
                  Knowledge of cloud computing concepts, virtualization,
                  networking, and security best practices is also important.
                </li>
                <li className="cs-5">
                  Obtaining certifications from cloud service providers such as
                  Amazon Web Services (AWS), Microsoft Azure, or Google Cloud
                  Platform can demonstrate expertise in specific cloud
                  technologies.
                </li>
                <li className="cs-5">
                  Excellent problem-solving and communication skills.
                </li>
              </ul>
            </div>
            <div className="roles-respond">
              <div className="h4">Salary</div>
              <ul>
                <li className="cs-5">Salary will be 20k to 40k</li>
                <li className="cs-5">
                  If you are selected, you will have a 1-month training period.
                  In that training period, salary will not be provided; after
                  that, you will be selected based on your performance. After
                  that, six months contract.
                </li>
              </ul>
            </div>
            <div className="apply-button p-3">
              <div className="btn text-center p-2 btn-primary">APPLY NOW</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h1 ">Job Information</div>
            <div className="cs-5 pt-1 pb-1">Country</div>
            <div className="h5">India</div> <br />
            <div className="cs-5 pt-1 pb-1">Industry</div>
            <div className="h5">Technology</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CJ;
