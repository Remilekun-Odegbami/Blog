import './topbar.css';
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light top">
      <div className="container">
        <Link to="/" className='text-uppercase navbar-brand'>Rem Blog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 ">
            <Link className='nav-item ml-5' to="/">posts</Link>
            <Link className='nav-item ml-5' to="contact">Contact</Link>
            {user && <Link className='nav-item ml-5' to="/write">write</Link>}
          </div>
          <div className="top_right">
            {user ? (
              <>
                <div className="dropdown">
                  <img src={user.others.profileImg} alt={user.others.username} className="profile-img" />
                  <ul className="dropdown-content" role="menu" aria-labelledby="menu1">
                    <li><Link to="/settings">My Profile</Link></li>
                    <li><Link to='' onClick={handleLogout}>{user && "log out"}</Link></li>
                  </ul>
                </div>
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
  )
}
