import React from "react";
import { Link } from "react-router-dom";
// css
import "./ProductView.css";

// img
import img1 from "../img/dp-1.jpg";
import ProdImg1 from "../img/Prod1.jpg";
import ProdImg2 from "../img/Prod2.jpg";
import ProdImg3 from "../img/Prod3.jpg";
import ProdImg4 from "../img/Prod4.jpg";
import ImageDecline from "./ImageDecline";
import BigImage from "./BigImage";
import Decline from "./Decline";

function ProductView() {
  return (
    <>
      <div className="container">
        <h5 className="">Product Deatils</h5>

        <div className="row ">
          <div className=" col-md-12  box px-5 py-5 mx-auto shadow ">
            <div className="d-flex border-bottom  pb-3 px-0  ">
              <div className="col-md-6  pt-2 px-0">
                <table className="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <td className="text-grey">Category</td>
                      <td>
                        <b className="m-1 text-danger">Electronic </b>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-grey col-md-4">Product</td>
                      <td>
                        <h4 className="text-primary"> Iphon 13 pro</h4>
                      </td>
                    </tr> 

                    <tr>
                      <td className="text-grey">Sub Text</td>
                      <td>Here shows sub text of product</td>
                    </tr>
                    <tr>
                      <td className="text-grey">SKU</td>
                      <td>SK-346 </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6  pt-2">
                <table className="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <td className="text-grey">Actual Price</td>
                      <td className="font-weight-bold text-info">$ 1025</td>
                    </tr>
                    <tr>
                      <td className="text-grey">Selling Price</td>
                      <td className="font-weight-bold text-success">$ 999 </td>
                    </tr>
                    <tr>
                      <td className="text-grey">Client</td>
                      <td className="font-weight-bold text-primary">
                        Jenifer Marina{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-grey">Client Id</td>
                      <td className="font-weight-bold text-danger">RW-342 </td>
                    </tr>
                    <tr>
                      <td className="text-grey">Product Status</td>
                      <td>
                        <select
                          className="form-control form-control-sm  "
                          id="Status"
                        >
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <table className="table table-borderless table-sm">
              <tbody>
                <tr className="border-bottom ">
                  <td className="text-grey col-md-2">Description</td>
                  <td>
                    Here will show description of product Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </td>
                </tr>
                <tr>
                  <td className="text-grey">Meta Title</td>
                  <td>Meta Title of product </td>
                </tr>
                <tr>
                  <td className="text-grey">Meta Keyword</td>
                  <td>
                    <div className="btn  btn-sm rounded-pill  mr-2 border-info">
                      Keyword 1
                    </div>
                    <div className="btn btn-sm rounded-pill  mr-2  border-info">
                      Keyword 2
                    </div>
                    <div className="btn  btn-sm rounded-pill  mr-2 border-info">
                      Keyword 3
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-grey">Tags</td>
                  <td>
                    <div className="btn  btn-sm rounded-pill  mr-2 border-warning">
                      Tag 1
                    </div>
                    <div className="btn btn-sm rounded-pill  mr-2  border-warning">
                      Tag 2
                    </div>
                    <div className="btn  btn-sm rounded-pill  mr-2 border-warning">
                      Tag 3
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row">
              <p className="font-weight-bold text-primary mt-3 ml-2">
                Image Approval
              </p>
              {/* image for Approval  */}
              <div className=" col-md-12 d-flex mt-3 mb-4">
                {/* image 1 */}
                <div className="col-md-3">
                  <div className="HoverContainer">
                    <img
                      src={ProdImg1}
                      className="ProductView-img rounded "
                      alt="..."
                    />
                    {/*hover Btn */}
                    <div className="image-overlay">
                      <div className="hoverBTN">
                        {/* right BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-success rounded-pill mr-2"
                        >
                          <i className="fa fa-check-circle" />
                        </button>

                        {/* cancel BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-danger rounded-pill"
                          data-toggle="modal"
                          data-target="#DeclineModal"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                        {/* view btn */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-primary rounded-pill mx-auto mt-1 "
                          data-toggle="modal"
                          data-target="#BigImgModal"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* image 2 */}
                <div className="col-md-3">
                  <div className="HoverContainer">
                    <img
                      src={ProdImg2}
                      className="ProductView-img rounded "
                      alt="..."
                    />
                    {/*hover Btn */}
                    <div className="image-overlay">
                      <div className="hoverBTN">
                        {/* right BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-success rounded-pill mr-2"
                        >
                          <i className="fa fa-check-circle" />
                        </button>

                        {/* cancel BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-danger rounded-pill"
                          data-toggle="modal"
                          data-target="#DeclineModal"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                        {/* view btn */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-primary rounded-pill mx-auto mt-1 "
                          data-toggle="modal"
                          data-target="#BigImgModal"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* image 3 */}
                <div className="col-md-3">
                  <div className="HoverContainer">
                    <img
                      src={ProdImg3}
                      className="ProductView-img rounded "
                      alt="..."
                    />
                    {/*hover Btn */}
                    <div className="image-overlay">
                      <div className="hoverBTN">
                        {/* right BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-success rounded-pill mr-2"
                        >
                          <i className="fa fa-check-circle" />
                        </button>

                        {/* cancel BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-danger rounded-pill"
                          data-toggle="modal"
                          data-target="#DeclineModal"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                        {/* view btn */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-primary rounded-pill mx-auto mt-1 "
                          data-toggle="modal"
                          data-target="#BigImgModal"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* image 4 */}
                <div className="col-md-3">
                  <div className="HoverContainer">
                    <img
                      src={ProdImg4}
                      className="ProductView-img rounded "
                      alt="..."
                    />
                    {/*hover Btn */}
                    <div className="image-overlay">
                      <div className="hoverBTN">
                        {/* right BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-success rounded-pill mr-2"
                        >
                          <i className="fa fa-check-circle" />
                        </button>

                        {/* cancel BTN */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-danger rounded-pill"
                          data-toggle="modal"
                          data-target="#imgDeclineModal"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                        {/* view btn */}
                        <button
                          type="button"
                          className=" btn btn-sm btn-primary rounded-pill mx-auto mt-1 "
                          data-toggle="modal"
                          data-target="#BigImgModal"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ImageDecline />
              <BigImage />
              <Decline />

              <button
                type="submit"
                className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3"
                data-toggle="modal"
                data-target="#DeclineModal"
              >
                Decline
              </button>
              <button
                type="submit"
                className=" w-auto btn btn-primary mr-auto mt-3"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
