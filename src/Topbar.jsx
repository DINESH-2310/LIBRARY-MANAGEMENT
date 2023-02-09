import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faLaughWink,faBookOpenReader} from '@fortawesome/free-solid-svg-icons'
function Topbar() {
    let navigate = useNavigate()
    let logout = () => {
        navigate("/")
    } 
     

    return (
        <nav className=" container-fluid p-2 shadow fixed-top navbar navbar-light bg-white "
            style={{ position: "sticky" }} >
         <div  className="container px-4 px-lg-5">
                <span className="navbar-brand fw-bold text-danger" >MADRAS <i>LIBRARY     ..</i><FontAwesomeIcon icon={faBookOpenReader}/></span>
                <div className="d-flex justify-content-center p-2" id="navbarSupportedContent">
                   
                            <Link className="nav-link me-4" to="/portal/dashboard">
                                <span className='text-primary fw-bold'>Dashboard</span></Link>
                      
                            <Link className="nav-link" to="/portal/library">
                                <span className='text-primary fw-bold'>Library</span>
                            </Link>
                       
                </div>
                <div className="d-flex flex-end" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav ">
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit">
                            
                            <span onClick={logout} className=" mr-2 fw-bold  "> LOGOUT</span>
                          
                        
                        <FontAwesomeIcon className="fas fa-1x fa-laugh-wink" icon={faLaughWink} />
                        </button>
                    </form>
                       
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Topbar;