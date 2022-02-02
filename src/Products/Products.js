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
const StatusAscending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Status <i className="fa fa-angle-up px-3" />
  </button>
);
const StatusDescending = (
  <button type="button" className="btn px-0 py-0 text-left font-weight-bold">
    Status <i className="fa fa-angle-down px-3" />
  </button>
);

// status buttons ..................................
const CetegoryPending = <b className="text-warning ">Pending</b>;
const CetegoryActive = <b className="text-success ">Active</b>;
const CetegoryDiactive = <b className="text-danger ">Diactive</b>;

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
      <Link to="/ProductApproval" className="dropdown-item">
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

function Products() {
  return (
    <>
      <div className="container">
        <div className="row col-md-12 mb-5 mx-0 px-0">
          <h5 className="mt-2">Products</h5>

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

          <Link to="/AddProduct" className="btn btn-primary">
            {" "}
            + Add Product
          </Link>
        </div>

        <div className="col-md-12 box  shadow p-4  mx-0 px-0">
          <div className="row mb-4">
            {/* search box  */}
            <div className="col-md-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search Client"
              />
            </div>

            {/* Counter  */}
            <div className="col-md-4 ml-auto">
              <div className="btn btn-success ml-2 rounded-pill">
                Active <span className="badge badge-light">1</span>
              </div>
              <div className="btn btn-warning ml-2 rounded-pill">
                Pending <span className="badge badge-light">1</span>
              </div>
              <div className="btn btn-danger ml-2 rounded-pill">
                Diactive <span className="badge badge-light">1</span>
              </div>
            </div>
          </div>

          {/* table  */}
          <table className="table table-hover">
            <thead>
              <tr className="table-borderless">
                <th className=" dp-column"></th>
                <th className=""> {NameDescending} </th>
                <th className=""> User Id </th>
                <th className=""> {RegionDescending} </th>
                <th className=""> Category Name</th>
                <th className=""> Product</th>
                <th className=""> {DateDescending} </th>
                <th className="text-right pr-4"> {StatusDescending} </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle font-weight-bold">
                  Jenny Fouracre{" "}
                </td>
                <td className="align-middle text-danger">RW-201 </td>
                <td className="align-middle ">New York </td>
                <td className="align-middle ">Electronincs </td>
                <td className="align-middle ">Switch </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-right">
                  {CetegoryPending}
                  {StatusDropDown}
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle font-weight-bold">Wariyo Mena </td>
                <td className="align-middle text-danger">RW-562 </td>
                <td className="align-middle "> San Diloi </td>
                <td className="align-middle ">clothing </td>
                <td className="align-middle ">Jeans </td>
                <td className="align-middle ">12-01-22 </td>
                <td className="align-middle text-right">
                  {CetegoryActive}
                  {StatusDropDown}
                </td>
              </tr>
              <tr>
                <td className="align-middle ">
                  <img src={default_DP} alt="..." className="list_photo  " />
                </td>
                <td className="align-middle font-weight-bold">Wariyo Mena </td>
                <td className="align-middle text-danger">RW-562 </td>
                <td className="align-middle "> San Diloi </td>
                <td className="align-middle ">Furniture </td>
                <td className="align-middle ">Table </td>
                <td className="align-middle ">15-01-22 </td>
                <td className="align-middle text-right">
                  {CetegoryDiactive}
                  {StatusDropDown}
                </td>
              </tr>
            </tbody>
          </table>

          {/* pagination .................................. */}
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

export default Products;
