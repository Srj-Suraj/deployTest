import React from "react";
import { Link } from "react-router-dom";

// css

// img

function AddCategory() {
  return (
    <>
      <div className="container">
        <div className="row col-md-12 mb-3 mx-0 px-0">
          <h5 className="mt-2">Add Categories</h5>
        </div>

        <div className="col-md-12 box shadow mb-5 mr-auto ml-auto p-5">
          <form className="row">
            <div className="form-group col-md-3 ">
              <label>Categories</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Sub Categories</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Product</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>SKU</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group col-md-3 ">
              <label>Country</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Province/State</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Zip Code</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group col-md-3 ">
              <label>Service charge % </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Product commission %</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>VAT/GST %</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-3 ">
              <label>Logistic charge %</label>
              <input type="text" className="form-control" disabled />
            </div>

            <button
              type="submit"
              className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" w-auto btn btn-primary mr-auto mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
