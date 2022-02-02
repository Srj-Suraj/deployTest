import React from "react";
import { Link } from "react-router-dom";
// css

// img

function AddProduct() {
  return (
    <>
      <div className="container">
        <h5 className="">Add Product</h5>

        <div className="row">
          {/* Request Category tab   */}
          <div className="col-md-12 ">
            <div className="col-md-12 box p-5   shadow ">
              <form className="row">
                <div className="form-group col-md-4 ">
                  <label>Category</label>
                  <select className="form-control">
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>
                <div className="form-group col-md-4 ">
                  <label>Product Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group col-md-4 ">
                  <label>Sub Text</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group col-md-4 ">
                  <label>SKU</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>

                <div className="form-group col-md-4 ">
                  <label>Actual Price </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        $
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group col-md-4 ">
                  <label>Selling Price </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        $
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="form-group col-md-12 ">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows="3"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="form-group col-md-4 ">
                  <label>Meta Title</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group col-md-4 ">
                  <label>Meta Keyword</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group col-md-4 ">
                  <label>Status</label>
                  <select className="form-control" id="Status">
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>

                <div className="form-group col-md-8 ">
                  <label>Tags</label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="form-group col-md-4">
                  <label>Upload Image</label>
                  <div class="input-group mb-3">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label class="custom-file-label" for="inputGroupFile01">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>

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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
