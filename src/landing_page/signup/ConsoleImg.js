import React from 'react'
import {Link} from 'react-router-dom';
function ConsoleImg() {
    return (
        <div className='conatainer pt-5 px-3 px-lg-3 m-0'>
            <div className='row justify-content-around'>
                <div className='col-md-5 text-center'>
                    <img src='media/image/products-kite.png'className='img-fluid'alt='account-open-img'/>
                </div>
                <div className='col-md-5'>
                    <h4 className='pt-3'>Singup now</h4>
                    <p className='text-muted fw-medium'>
                        Or track your existing application
                    </p>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-white mt-2">
                        <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="me-2"/> 
                        +91
                        </span>       
                        <input type="text" className="form-control mt-2 py-3" placeholder="Enter your mobile number"/>
                    </div>
                    <button className="btn btn-primary w-50 py-3 fw-medium fs-5 singup mt-3">Get OTP</button>

                    <p className='pt-5 border-bottom pb-4 fs-small'>By proceeding, you agree to the Zerodha  <a href='#@' className='text-decoration-none'>terms</a> & <a href='#@' className='text-decoration-none'>privacy policy</a></p>

                    <p>Looking to open NRI account? <Link to={'/NriAccount'} className='text-decoration-none'>Click here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ConsoleImg