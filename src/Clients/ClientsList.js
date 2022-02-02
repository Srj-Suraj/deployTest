import "./clientsList.css";

import { Link } from "react-router-dom";

// images
import default_DP from "../img/default_DP.jpg";

// shorting buttons ........................................
const NameAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Name <i className="fa fa-angle-up" />
  </button>
);
const NameDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Name <i className="fa fa-angle-down" />
  </button>
);
const RegionAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Region <i className="fa fa-angle-up" />
  </button>
);
const RegionDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Region <i className="fa fa-angle-down" />
  </button>
);
const DateAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Date <i className="fa fa-angle-up" />
  </button>
);
const DateDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Date <i className="fa fa-angle-down" />
  </button>
);
const ClientStatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Client Status <i className="fa fa-angle-up" />
  </button>
);
const ClientStatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Client Status <i className="fa fa-angle-down" />
  </button>
);
const SponserStatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Sponser Status <i className="fa fa-angle-up" />
  </button>
);
const SponserStatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Sponser Status <i className="fa fa-angle-down" />
  </button>
);

// status buttons ..................................
const ClientPending = <b className="text-warning ">Pending</b>;
const ClientActive = <b className="text-success ">Active</b>;
const ClientDiactive = <b className="text-danger ">Diactive</b>;
const SponserNA = <b className="text-info ">N/A</b>;
const SponserPending = <b className="text-warning ">Pending</b>;
const SponserActive = <b className="text-success ">Active</b>;

// Client Verification Details Three Dot........
const StatusDropDown = (
  <div className="-item float-right ">
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
// Sponser Verification Details Three Dot........
const SponserDropDown = (
  <div className="-item float-right ">
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
      <Link to="/SponserList" className="dropdown-item">
        View List
      </Link>
    </div>
  </div>
);

function ClientsList() {
  return (
    <>
      <div className="container">
        <div className="row col-md-12 mb-5 mx-0 px-0">
          <h5 className="mt-2">Clients</h5>

          {/* Level change Button  */}
          <div
            className="btn-group btn-group-toggle mx-auto "
            data-toggle="buttons"
          >
            <label className="btn btn-primary active">
              <input type="radio" name="options" id="option1" defaultChecked />{" "}
              Manufacturer <span className="badge badge-light">6</span>
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" id="option2" />
              Stockist <span className="badge badge-light">12</span>
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" id="option3" />
              Retailer <span className="badge badge-light">5</span>
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" id="option4" />
              Customer <span className="badge badge-light">11</span>
            </label>
          </div>

          {/* change layout buttons  */}
          <div className="btn-group btn-group-toggle " data-toggle="buttons">
            <Link to="/Clients" className="btn btn-primary active">
              <input type="radio" name="options" id="option1" />
              <i className="fa fa-list" />
            </Link>
            <Link to="" className="btn btn-primary ">
              <input type="radio" name="options" id="option2" />
              <i className="fa fa-th" />
            </Link>
          </div>
        </div>

        <div className="col-md-12 box  shadow p-4  mx-0 px-0">
          {/* filters */}
          <div className="row mb-4">
            <div className="col-md-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search Client"
              />
            </div>
            <div className="col-md-3">
              <select className="form-control" id="sponserSelector">
                <option>Manufacturer</option>
                <option>Sponser</option>
              </select>
            </div>
          </div>

          {/* table  */}
          <table className="table table-hover">
            <thead>
              <tr className="table-borderless">
                <th className=" dp-column"></th>
                <th className=""> {NameDescending} </th>
                <th className=""> {RegionDescending} </th>
                <th className=""> Category Name</th>
                <th className=""> {DateDescending} </th>
                <th className=""> {ClientStatusDescending} </th>
                <th className=""> {SponserStatusDescending} </th>
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
                <td className="align-middle text-right">
                  {ClientPending}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {SponserDropDown}
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
                <td className="align-middle text-right">
                  {ClientPending}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {StatusDropDown}
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
                <td className="align-middle text-right">
                  {ClientActive}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserActive}
                  {StatusDropDown}
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
                <td className="align-middle text-right">
                  {ClientDiactive}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {StatusDropDown}
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
                <td className="align-middle text-right">
                  {ClientPending}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {StatusDropDown}
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
                <td className="align-middle text-right">
                  {ClientPending}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {StatusDropDown}
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
                <td className="align-middle text-right">
                  {ClientPending}
                  {StatusDropDown}
                </td>
                <td className="align-middle text-right">
                  {SponserNA}
                  {StatusDropDown}
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
    </>
  );
}

export default ClientsList;
