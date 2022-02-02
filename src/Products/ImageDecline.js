function ImageDecline() {
  return (
    <>
      {/* Popup  Modal */}
      <div
        className="modal fade "
        id="imgDeclineModal"
        tabIndex="-1"
        aria-labelledby="imgDeclineModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imgDeclineModalLabel">
                Image Decline
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* form  */}
              <form>
                <b>Reason :</b>
                {/* radio 1 */}
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1"
                  >
                    Wrong Image
                  </label>
                </div>
                {/* radio 2 */}
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    Resolution is not Clear
                  </label>
                </div>
                {/* radio 3 */}
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio3"
                  >
                    I don't like this
                  </label>
                </div>

                <b className="mt-4">
                  Specify the reason of declining the image{" "}
                </b>
                <textarea
                  className="col-md-12 form-control"
                  rows="5"
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageDecline;
