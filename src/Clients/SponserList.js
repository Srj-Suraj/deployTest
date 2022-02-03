import "./clientsList.css"

import { Link } from "react-router-dom";
import ClientDetailsSponserPage from "./ClientDetailsSponserPage";


// images
import default_DP from "../img/default_DP.jpg";

// shorting buttons ........................................
const NameAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Sponser Name <i className="fa fa-angle-up px-3" />
  </button>
);
const NameDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Sponser Name <i className="fa fa-angle-down px-3" />
  </button>
);
const RegionAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Region <i className="fa fa-angle-up px-3" />
  </button>
);
const RegionDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Region <i className="fa fa-angle-down px-3" />
  </button>
);
const DateAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Date <i className="fa fa-angle-up px-3" />
  </button>
);
const DateDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Date <i className="fa fa-angle-down px-3" />
  </button>
);
const ClientStatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Client Status <i className="fa fa-angle-up px-3" />
  </button>
);
const ClientStatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Client Status <i className="fa fa-angle-down px-3" />
  </button>
);
const AdminStatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Sponser Status <i className="fa fa-angle-up px-3" />
  </button>
);
const AdminStatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Sponser Status <i className="fa fa-angle-down px-3" />
  </button>
);


// status buttons ..................................
const ClientPending = (
  <b className="text-warning ">Pending</b>
);
const ClientApproved = (
  <b className="text-success ">Approved</b>
);
const ClientDiactive = (
  <b className="text-danger ">Diactive</b>
);
// admin status dropdown
const SponserPanding = (
  <b className="text-warning ">Pending</b>
);
const SponserActive = (
  <b className="text-success ">Active</b>
);
const SponserDiactive = (
  <b className="text-danger ">Diactive</b>
);

// Client Verification Details Three Dot........
const AdminStatusDropDown = (
  <div className=" float-right ">
    <div
      className=" "
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className="fa fa-angle-down px-4 " />
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <Link to="/ClientVerification" className="dropdown-item">
        View Details
      </Link>
    </div>
  </div>
);


function SponserList() {
  return (
    <>
      <div className="container">
        
      <div className="col-md-12 pl-5 mb-3 mx-auto">
          <h5 className="mt-2">Sponsers of Client</h5>
      </div>
        
        {/* Client Details of Sponser Page */}
        <ClientDetailsSponserPage/>
      
        <div className="col-md-12 pl-5 mb-3 mt-5 mx-auto">
          <h5 className="mt-2">Sponsers List</h5>
      </div>

        <div className='row mt-2'>
        <div className="col-md-11 box  shadow p-4  mx-auto px-0">
          {/* filters */}
          <div className="row mb-4">
            <div className="col-md-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search Client"
              />
            </div>
           
          </div>

          {/* table  */}
          <table className="table table-hover">
            <thead>
              <tr className="table-borderless">
                <th  className=" dp-column"></th>
                <th className="text-dark-grey"> {NameDescending} </th>
                <th className="text-dark-grey"> {RegionDescending} </th>
                <th className="text-dark-grey"> Category Name</th>
                <th className="text-dark-grey"> {DateDescending } </th>
                <th className="text-dark-grey"> {ClientStatusDescending } </th>
                <th className="text-dark-grey"> {AdminStatusDescending } </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserPanding} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved}  
                </td>
                <td className="align-middle text-right"> 
                      {SponserDiactive} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserActive} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserPanding} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserPanding} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserPanding} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle ">Jenny Fouracre </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Appliances </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-center"> 
                      {ClientApproved} 
                </td>
                <td className="align-middle text-right"> 
                      {SponserPanding} 
                      {AdminStatusDropDown} 
                </td>
              </tr>
              
            </tbody>
          </table>

          {/* pagination  */}
          <div className="nav   justify-content-end">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <button className="page-link" tabIndex="-1">
                    Previous
                  </button>{" "}
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item ">
                  <button className="page-link">2 </button>{" "}
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">Next</button>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>




      </div>
    </>
  );
}

export default SponserList;
