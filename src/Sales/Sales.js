import { Link } from "react-router-dom";
import "./Sales.css";
// images
import default_DP from "../img/default_DP.jpg";

// shorting buttons ........................................
const NameAscending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Name <i className="fa fa-angle-up " />
  </button>
);
const NameDescending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Name <i className="fa fa-angle-down " />
  </button>
);
const RegionAscending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Region <i className="fa fa-angle-up " />
  </button>
);
const RegionDescending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Region <i className="fa fa-angle-down " />
  </button>
);
const CategoryAscending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Category <i className="fa fa-angle-up " />
  </button>
);
const CategoryDescending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Category <i className="fa fa-angle-down " />
  </button>
);
const ProductAscending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Product <i className="fa fa-angle-up " />
  </button>
);
const ProductDescending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Product <i className="fa fa-angle-down " />
  </button>
);
const SaleAscending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Total Sale <i className="fa fa-angle-up " />
  </button>
);
const SaleDescending = (
  <button
    type="button"
    className="btn px-0 py-0 text-left font-weight-bold text-dark-grey"
  >
    Total Sale <i className="fa fa-angle-down " />
  </button>
);

// Client Verification Details Three Dot........
const SalesView = (
  <div className=" float-right ">
    <div
      className="p-0 "
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className="fa fa-angle-down px-4 " />
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <Link to="/SalesView" className="dropdown-item">
        Detail View
      </Link>
    </div>
  </div>
);

function Products() {
  return (
    <>
      <div className="container">
        <div className="row col-md-12 mb-3 mx-0 px-0">
          <h5 className="mt-2 col-md-12">Sales</h5>

          {/* top 4 cards  .............................*/}
          <div className="col-md-3  pl-0">
            <div className="dashboard-top-card color-1">
              <i className="fa fa-snowflake-o dashboard-top-card-icon" />
              <div>
                <h3>$15000</h3>
                <h6>Total Sale</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="dashboard-top-card color-2">
              <i className="fa fa-snowflake-o dashboard-top-card-icon" />
              <div>
                <h3>$4800</h3>
                <h6>Manufacturer wise</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3  ">
            <div className="dashboard-top-card color-3">
              <i className="fa fa-snowflake-o dashboard-top-card-icon" />
              <div>
                <h3>$850</h3>
                <h6>Stockist wise</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3  ">
            <div className="dashboard-top-card color-4">
              <i className="fa fa-snowflake-o dashboard-top-card-icon" />
              <div>
                <h3>$600</h3>
                <h6>Retailer wise</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 box  shadow p-4  mx-0 px-0">
            {/* filter row  */}
            <div className="row mb-4">
              {/* search box  */}
              <div className="col-md-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Client"
                />
              </div>
              <button className="btn btn-light">
                <i className="fa fa-filter mr-3" />
                Filter
              </button>

              {/* Level change Button  */}
              <div
                className="btn-group btn-group-toggle ml-auto mr-3 "
                data-toggle="buttons"
              >
                <label className="btn btn-primary active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    defaultChecked
                  />{" "}
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
            </div>

            {/* table  */}
            <table className="table table-hover">
              <thead>
                <tr className="table-borderless">
                  <th className="dp-column"></th>
                  <th className="text-dark-grey"> {NameDescending} </th>
                  <th className="text-dark-grey"> {RegionDescending} </th>
                  <th className="text-dark-grey"> {CategoryDescending}</th>
                  <th className="text-dark-grey"> {ProductDescending} </th>
                  <th className="text-dark-grey text-center font-12">
                    Tax <br /> (%){" "}
                  </th>
                  <th className="text-dark-grey text-center font-12">
                    Commision <br /> (%){" "}
                  </th>
                  <th className="text-dark-grey text-center font-12">
                    Servise <br /> Charge (%){" "}
                  </th>
                  <th className="text-dark-grey"> {SaleDescending} </th>
                  <th className="p-0 m-0"> </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="align-middle ">
                    <img src={default_DP} alt="..." className="list_photo  " />
                  </td>
                  <td className="align-middle text-primary">Jenny Fouracre</td>
                  <td className="align-middle ">New York </td>
                  <td className="align-middle text-danger">Electronincs </td>
                  <td className="align-middle text-info">Switch </td>
                  <td className="align-middle text-center text-grey">8 </td>
                  <td className="align-middle text-center text-grey">10 </td>
                  <td className="align-middle text-center text-grey">12 </td>
                  <td className="align-middle font-weight-bold text-success">
                    {" "}
                    $ 1256{" "}
                  </td>
                  <td className="align-middle text-right">{SalesView}</td>
                </tr>
                <tr>
                  <td className="align-middle ">
                    <img src={default_DP} alt="..." className="list_photo  " />
                  </td>
                  <td className="align-middle text-primary ">Wariyo Mena </td>
                  <td className="align-middle "> San Diloi </td>
                  <td className="align-middle text-danger">Electronincs </td>
                  <td className="align-middle text-info">Switch </td>
                  <td className="align-middle text-center text-grey">8 </td>
                  <td className="align-middle text-center text-grey">10 </td>
                  <td className="align-middle text-center text-grey">12 </td>
                  <td className="align-middle font-weight-bold text-success">
                    {" "}
                    $ 1256{" "}
                  </td>
                  <td className="align-middle text-right">{SalesView}</td>
                </tr>
                <tr>
                  <td className="align-middle ">
                    <img src={default_DP} alt="..." className="list_photo  " />
                  </td>
                  <td className="align-middle text-primary">Wariyo Mena </td>
                  <td className="align-middle "> San Diloi </td>
                  <td className="align-middle text-danger">Electronincs </td>
                  <td className="align-middle text-info">Switch </td>
                  <td className="align-middle text-center text-grey">8 </td>
                  <td className="align-middle text-center text-grey">10 </td>
                  <td className="align-middle text-center text-grey">12 </td>
                  <td className="align-middle font-weight-bold text-success">
                    {" "}
                    $ 1256{" "}
                  </td>
                  <td className="align-middle text-right">{SalesView}</td>
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
      </div>
    </>
  );
}

export default Products;
