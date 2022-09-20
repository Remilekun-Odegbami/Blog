import './topbar.css';
import profileImg from '../../Media/Odegbami Remilekun.jpeg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light top">
          <div className="container">
            <Link to="/" className='text-uppercase navbar-brand'>My Blog</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
              <div className="navbar-nav me-auto mb-2 ">
                <Link className='nav-item ml-5' to="/">posts</Link>
                <Link className='nav-item ml-5' to="contact">Contact</Link>
                {user && <Link className='nav-item ml-5' to="/write">write</Link>}
                <span className='nav-item ml-5' onClick={handleLogout}>{user && "log out"}</span>
              </div>
              <div className="top_right">
                {user ? (
                  <><Link className='nav-item ml-5' to="/settings">
                    <img src={profileImg} alt="" className='profile-img' />
                  </Link>

                    <div className="input-group search-group">
                      <div className="input-group-text"><i className="search fa fa-search"></i></div>
                      <input type="text" className="form-control" placeholder="Search" />
                    </div> </>
                ) : (
                  <div className="navbar-nav me-auto mb-2">
                    <Link className='nav-item ml-5' to="/login">login</Link>
                    <Link className='nav-item ml-5' to="/register">register</Link>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </nav>
      </header>
























    </>
  )
}
