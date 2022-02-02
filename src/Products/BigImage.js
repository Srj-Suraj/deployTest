import ProdImg1 from "../img/Prod1.jpg";

function ImageDecline() {
  return (
    <>
      {/* Popup  Modal */}
      <div
        className="modal fade "
        id="BigImgModal"
        tabIndex="-1"
        aria-labelledby="BigImgModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <img src={ProdImg1} className="big-img rounded " alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageDecline;
