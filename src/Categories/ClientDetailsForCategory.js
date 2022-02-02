// img
import default_DP from "../img/default_DP.jpg";

// Client status Tag ..................................
function ClientPending() {
  return <b className="text-warning ">Pending</b>;
}
function ClientActive() {
  return <b className="text-success ">Active</b>;
}
function ClientDiactive() {
  return <b className="text-danger ">Diactive</b>;
}

export default function ClientDetailsForCategory() {
  return (
    <>
      {/*  profile section  */}
      <div className="row ">
        <div className=" col-md-11  box px-5 py-3 mx-auto shadow ">
          <div className="col-md-12 d-flex border-bottom mb-3 pb-3 px-0  ">
            <div className="col-md-1 p-0 m-0 ">
              <img
                src={default_DP}
                alt="..."
                className="VerificationDP mb-2  mt-2 mx-0"
              />
            </div>
            <div className="col-md-9 pl-5 pt-2">
              <h4 className="text-primary"> Jenny Fouracre</h4>
              <b className="m-1 text-danger">
                {" "}
                <b className=" mr-3">ID</b>
                RW-101
              </b>
              <p className="m-1">
                {" "}
                <i className="fa fa-envelope mr-3" />
                jenny23fouracre@gmail.com
              </p>
              <p className="m-1">
                {" "}
                <i className="fa fa-phone mr-3" />
                +62 65498 73210
              </p>
            </div>
            <div className="col-md-2  text-center p-0">
              <p className="text-grey m-0">Status</p>
              <ClientActive />
              <button className="btn btn-primary mt-2 mx-auto px-4 d-block">
                Chat
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <p className="text-grey m-0">User Name</p>
              <p className="text-black">Jeny654</p>
            </div>
            <div className="col-md-4">
              <p className="text-grey m-0">Reg. Date</p>
              <p className="text-black">28-01-22</p>
            </div>

            <div className="col-md-4">
              <p className="text-grey m-0">Countary</p>
              <p className="text-black">Canada</p>
            </div>
            <div className="col-md-4">
              <p className="text-grey m-0">State/Privince</p>
              <p className="text-black">filadelfia</p>
            </div>
            <div className="col-md-4">
              <p className="text-grey m-0">City</p>
              <p className="text-black">Victoria Place</p>
            </div>
            <div className="col-md-4">
              <p className="text-grey m-0">Zip Code </p>
              <p className="text-black">56489</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
