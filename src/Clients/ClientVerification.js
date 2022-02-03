import React from 'react';
import {Link} from 'react-router-dom';
import ClientDetails from './ClientDetails';

// css
import './ClientVerification.css';


// Document status Tag ..................................
function DocPending () {
  return(
    <b className="text-warning ">Pending</b>
  )
  };
  function DocApproved () {
  return(
    <b className="text-success ">Approved</b>
  )
  };
  function DocDisapproved () {
  return(
    <b className="text-danger ">Disapproved</b>
  )
  };

//   doc viewer in Popup 
function DocViewer() {
  return(

<div className="modal fade" id="DocViewer" tabIndex="-1" aria-labelledby="DocViewerLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="DocViewerLabel">SSN</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...Here doc Shows
      </div>
      
    </div>
  </div>
</div>

)
  };


// doc status drop down........
function DocStatusDropDown() {
  return(
    <div className=" float-right ">
      <div
        className=" "
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-angle-down px-3 " />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="" className="dropdown-item">
          Pending
        </Link>
        <Link to="" className="dropdown-item">
          Approve
        </Link>
        <Link to="" className="dropdown-item" >
          Disapprove
        </Link>
        
      </div>
    </div>
    )
  };
// Doc Disapprove Popup
function DocDisapprovePopup() {
  return(
    <div className="modal fade" id="DocStatusPopupModel" tabIndex="-1" aria-labelledby="DocStatusPopupModelLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="DocStatusPopupModelLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Reason</label>
                <textarea row='5'className='form-control' />
                <button type='submit' >Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
  )
  };



// main function ..................................................
function ClientVerification(){
    return(
        <>

<div className="container" >

  
<div className="col-md-12 pl-5 mb-3 mx-auto">
<h5 className="">Client Details</h5>
</div>

{/* Client Details  */}
<ClientDetails/>

{/* Documents   */}
<div className='row mt-5'>
        <div className="col-md-11 box  p-4  shadow mx-auto">
        
        <table className="table table-hover">
                <thead>
                    <tr className='table-borderless'>
                        <th scope="col" className='text-dark-grey'>Document Type</th>
                        <th scope="col" className='text-dark-grey'>Document No.</th>
                        <th scope="col" className='text-dark-grey'>Reference Id</th>
                        <th scope="col" className='text-dark-grey'>View</th>
                        <th scope="col" className='col-md-2 text-center text-dark-grey'>Status</th>
                        <th scope="col" className='text-dark-grey'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>SSN</td>
                        <td>CA-12-4587995</td>
                        <td>RF-4625</td>
                        <td>
                            <button className='btn btn-info' data-toggle="modal" data-target="#DocViewer"> 
                                View
                            </button>
                            <DocViewer />
                        </td>
                        <td className="align-middle text-right"> 
                            <DocApproved/> 
                            <DocStatusDropDown/> 
                        </td>
                        <td>28-01-22</td>
                    </tr>
                    <tr >
                        <td>Driving Liecense</td>
                        <td>CA-12-45879</td>
                        <td>RF-6589</td>
                        <td>
                            <button className='btn btn-info' data-toggle="modal" data-target="#DocViewer"> 
                                View
                            </button>
                            <DocViewer />
                        </td>
                        <td className="align-middle text-right"> 
                            <DocDisapproved /> 
                            <DocStatusDropDown/> 
                        </td>
                        <td>28-01-22</td>
                    </tr>
                    <tr >
                        <td>CIN</td>
                        <td>CA-12-45879</td>
                        <td>RF-6589</td>
                        <td>
                            <button className='btn btn-info' data-toggle="modal" data-target="#DocViewer"> 
                                View
                            </button>
                            <DocViewer />
                        </td>
                        <td className="align-middle text-right"> 
                            <DocPending /> 
                            <DocStatusDropDown/> 
                        </td>
                        <td></td>
                    </tr>
                    <tr >
                        <td>VAT/GST</td>
                        <td>CA-12-45879</td>
                        <td>RF-6589</td>
                        <td>
                            <button className='btn btn-info' data-toggle="modal" data-target="#DocViewer"> 
                                View
                            </button>
                            <DocViewer />
                        </td>
                        <td className="align-middle text-right"> 
                            <DocPending /> 
                            <DocStatusDropDown/> 
                        </td>
                        <td></td>
                    </tr>
                    <tr >
                        <td>Aadhar</td>
                        <td>CA-12-45879</td>
                        <td>RF-6589</td>
                        <td>
                            <button className='btn btn-info' data-toggle="modal" data-target="#DocViewer"> 
                                View
                            </button>
                            <DocViewer />
                        </td>
                        <td className="align-middle text-right"> 
                            <DocPending /> 
                            <DocStatusDropDown/> 
                        </td>
                        <td></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>
</div>

</div>
</>
    );
}

export default  ClientVerification ;
