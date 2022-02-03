import ProductClientDetails from "./ProductClientDetails";

import { Link } from "react-router-dom";

// images
import default_DP from "../img/default_DP.jpg";

// shorting buttons ........................................

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

const StatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Status <i className="fa fa-angle-up px-3" />
  </button>
);
const StatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold text-dark-grey">
    Status <i className="fa fa-angle-down px-3" />
  </button>
);

// status buttons ..................................
const CetegoryPending = <b className="text-warning ">Pending</b>;
const CetegoryActive = <b className="text-success ">Active</b>;
const CetegoryDiactive = <b className="text-danger ">Diactive</b>;

// Client Verification Details Three Dot........
function StatusDropDown() {
  return (
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
        <Link to="" className="dropdown-item">
          Pending
        </Link>
        <Link to="" className="dropdown-item">
          Active
        </Link>
        <Link to="" className="dropdown-item">
          Diactive
        </Link>
      </div>
    </div>
  );
}

function ProductView() {
  return (
    <>
      <Link to="/ProductView" className="btn btn-primary">
        View
      </Link>
    </>
  );
}

export default function ProductApproval() {
  return (
    <div className="container">
      <div className="col-md-12 pl-5 mb-3 mx-auto">
        <h5 className="mt-2">Client Details</h5>
      </div>

      {/* Client Details of Sponser Page */}
      <ProductClientDetails />

      <div className="col-md-12 pl-5 mb-3 mt-5 mx-auto">
        <h5 className="mt-2">Client's Product List</h5>
      </div>

      <div className="row mt-2">
        <div className="col-md-11 box  shadow p-4  mx-auto px-0">
          {/* filters */}
          <div className="row mb-4">
            <div className="col-md-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search Product"
              />
            </div>

            {/* Counter  */}
            <div className="col-md-4 ml-auto p-0 text-right ">
              <div className="btn btn-success mr-3 rounded-pill">
                Active <span className="badge badge-light">1</span>
              </div>
              <div className="btn btn-warning mr-3 rounded-pill">
                Pending <span className="badge badge-light">2</span>
              </div>
              <div className="btn btn-danger mr-3 rounded-pill">
                Diactive <span className="badge badge-light">0</span>
              </div>
            </div>
          </div>

          {/* table  */}
          <table className="table table-hover">
            <thead>
              <tr className="table-borderless">
                <th className="text-dark-grey"> {RegionDescending} </th>
                <th className="text-dark-grey"> Category Name</th>
                <th className="text-dark-grey"> Product</th>
                <th className="text-dark-grey"> {DateDescending} </th>
                <th className="text-dark-grey"> View </th>
                <th className="text-right pr-4"> {StatusDescending} </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Electronincs </td>
                <td className="align-middle ">Switch </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle ">
                  {" "}
                  <ProductView />{" "}
                </td>
                <td className="align-middle text-right">
                  {CetegoryPending}
                  <StatusDropDown />
                </td>
              </tr>
              <tr>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Electronincs </td>
                <td className="align-middle ">AC </td>
                <td className="align-middle ">13-01-22 </td>
                <td className="align-middle ">
                  {" "}
                  <ProductView />{" "}
                </td>
                <td className="align-middle text-right">
                  {CetegoryPending}
                  <StatusDropDown />
                </td>
              </tr>
              <tr>
                <td className="align-middle ">France </td>
                <td className="align-middle ">clothing </td>
                <td className="align-middle ">Jeans </td>
                <td className="align-middle ">15-01-22 </td>
                <td className="align-middle ">
                  {" "}
                  <ProductView />{" "}
                </td>
                <td className="align-middle text-right">
                  {CetegoryActive}
                  <StatusDropDown />
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
  );
}
