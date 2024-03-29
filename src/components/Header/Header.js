import React from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../ducks/reducer';
import OpenClose from '../openClose';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="header-page">
      <Link to="/">
        <div className="title">SuddenlySia</div>
      </Link>

      <nav className="navbar">
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {/* {admin && <i class="fas fa-user-circle" />} if user is admin */}
      </nav>

      {Object.keys(props.user).length < 1 ? (
        <div className="navbar">
          <Link to="/login" className="button">
            Login
          </Link>
        </div>
      ) : (
        ''
      )}
      {Object.keys(props.user).length > 1 && (
        <Link to="/">
          <button onClick={() => props.userSignOut()}> Leave</button>
        </Link>
      )}
      <div className="mobile-nav">
        <OpenClose
          render={({ toggle }) => (
            <div className="mobile-nav-bars">
              <div className="mobile-bars" onClick={this.closeIt}>
                <div className="bar bar1" />
                <div className="bar bar2" />
                <div className="bar bar3" />
              </div>

              {toggle && (
                <nav className="mobile-nav-menu">
                  <NavLink className="mobile-nav-menu-item" to="/social">
                    Social
                  </NavLink>
                  <NavLink className="mobile-nav-menu-item" to="/contact">
                    Contact
                  </NavLink>
                  <NavLink className="mobile-nav-menu-item" to="/login">
                    Login
                  </NavLink>

                  {/* {admin && <i class="fas fa-user-circle" />} if user is admin */}
                </nav>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}
export default connect(
  mapStateToProps,
  { userSignOut }
)(Header);
