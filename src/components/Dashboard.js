import React, { useEffect } from 'react';
import '../style/custom.css';
import '../style/style.css';
import $ from 'jquery';

export const Dashboard = () => {
  useEffect(() => {
    $('#sidebarCollapse').on('click', function () {
      console.log('mai nhi chal rha');
      $('#sidebar').toggleClass('active');
      $('#content').toggleClass('active');
    });

    $('.more-button,.body-overlay').on('click', function () {
      $('#sidebar,.body-overlay').toggleClass('show-nav');
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="body-overlay"></div>

      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <img src="../images/logo.png" className="img-fluid" />
            <span>IIIT LUCKNOW</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>

          <div className="small-screen navbar-display">
            <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
              <a
                href="#homeSubmenu0"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="material-icons">notifications</i>
                <span> 4 notification</span>
              </a>
              <ul className="collapse list-unstyled menu" id="homeSubmenu0">
                <li>
                  <a href="#">You have 2 assignments to Complete this week!</a>
                </li>
                <li>
                  <a href="#">Your attendance is above 90%</a>
                </li>
                <li>
                  <a href="#">Quiz before endsem - DSA</a>
                </li>
                <li>
                  <a href="#">Change in class timing -COA </a>
                </li>
              </ul>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">apps</i>
                <span>Contact Us</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">person</i>
                <span>My-Info</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">settings</i>
                <span>Academics</span>
              </a>
            </li>
          </div>

          <li className="dropdown">
            <a
              href="#homeSubmenu1"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">aspect_ratio</i>
              <span>Mentors</span>
            </a>
            <ul className="collapse list-unstyled menu" id="homeSubmenu1">
              <li>
                <a href="#">HOD IT</a>
              </li>
              <li>
                <a href="#">Professors</a>
              </li>
              <li>
                <a href="#">Tech Parent</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu2"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">apps</i>
              <span>Examinations</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu2">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu3"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">border_color</i>
              <span>Library</span>
            </a>

            <ul className="collapse list-unstyled menu" id="pageSubmenu3">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#pageSubmenu4"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">extension</i>
              <span>Attendance</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu4">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu5"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">border_color</i>
              <span>Time Table</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu5">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu6"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">grid_on</i>
              <span>Services</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu6">
              <li>
                <a href="#">Leave Request</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu7"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">content_copy</i>
              <span>Semester Results</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu7">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>

          <li className="">
            <a href="#">
              <i className="material-icons">date_range</i>
              <span>Fee Payments</span>
            </a>
          </li>

          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Calender</span>
            </a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <div className="top-navbar">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="d-xl-block d-lg-block d-md-mone d-none"
              >
                <span className="material-icons">arrow_back_ios</span>
              </button>

              <a className="navbar-brand" href="#">
                {' '}
                Dashboard{' '}
              </a>

              <button
                className="d-inline-block d-lg-none ml-auto more-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="material-icons">more_vert</span>
              </button>

              <div
                className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="dropdown nav-item active">
                    <a href="#" className="nav-link" data-toggle="dropdown">
                      <span className="material-icons">notifications</span>
                      <span className="notification">4</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">You have 5 new messages</a>
                      </li>
                      <li>
                        <a href="#">You're now friend with Mike</a>
                      </li>
                      <li>
                        <a href="#">Wish Mary on her birthday!</a>
                      </li>
                      <li>
                        <a href="#">5 warnings in Server Console</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">apps</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">person</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="main-content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header">
                  <div className="icon icon-warning">
                    <span className="material-icons">equalizer</span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="category">
                    <strong>Visits</strong>
                  </p>
                  <h3 className="card-title">70,340</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-info">info</i>
                    <a href="#pablo">See detailed report</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header">
                  <div className="icon icon-rose">
                    <span className="material-icons">shopping_cart</span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="category">
                    <strong>Orders</strong>
                  </p>
                  <h3 className="card-title">102</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">local_offer</i> Product-wise
                    sales
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header">
                  <div className="icon icon-success">
                    <span className="material-icons">attach_money</span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="category">
                    <strong>Revenue</strong>
                  </p>
                  <h3 className="card-title">$23,100</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">date_range</i> Weekly sales
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header">
                  <div className="icon icon-info">
                    <span className="material-icons">follow_the_signs</span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="category">
                    <strong>Followers</strong>
                  </p>
                  <h3 className="card-title">+245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 col-md-12">
              <div className="card" style={{ minHeight: '485px' }}>
                <div className="card-header card-header-text">
                  <h4 className="card-title">Employees Stats</h4>
                  <p className="category">
                    New employees on 15th December, 2016
                  </p>
                </div>
                <div className="card-content table-responsive">
                  <table className="table table-hover">
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Abhishek Pandey</td>
                        <td>$23,566</td>
                        <td>India</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Kanishk Dadhich</td>
                        <td>$10,200</td>
                        <td>India</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Prajjwal Suhane</td>
                        <td>$32,190</td>
                        <td>India</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Shivam Pratap Singh</td>
                        <td>$31,123</td>
                        <td>Korea, South</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Om Srivastava</td>
                        <td>$23,789</td>
                        <td>South Africa</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Prince Singh</td>
                        <td>$43,120</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Vibhor Gupta </td>
                        <td>$12,140</td>
                        <td>Australia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="card" style={{ minHeight: '485px' }}>
                <div className="card-header card-header-text">
                  <h4 className="card-title">Activities</h4>
                </div>
                <div className="card-content">
                  <div className="streamline">
                    <div className="sl-item sl-primary">
                      <div className="sl-content">
                        <small className="text-muted">5 mins ago</small>
                        <p>Williams has just joined Project X</p>
                      </div>
                    </div>
                    <div className="sl-item sl-danger">
                      <div className="sl-content">
                        <small className="text-muted">25 mins ago</small>
                        <p>
                          Jane has sent a request for access to the project
                          folder
                        </p>
                      </div>
                    </div>
                    <div className="sl-item sl-success">
                      <div className="sl-content">
                        <small className="text-muted">40 mins ago</small>
                        <p>Kate added you to her team</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-content">
                        <small className="text-muted">45 minutes ago</small>
                        <p>John has finished his task</p>
                      </div>
                    </div>
                    <div className="sl-item sl-warning">
                      <div className="sl-content">
                        <small className="text-muted">55 mins ago</small>
                        <p>Jim shared a folder with you</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-content">
                        <small className="text-muted">60 minutes ago</small>
                        <p>John has finished his task</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <nav className="d-flex">
                    <ul className="m-0 p-0">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6">
                  <p className="copyright d-flex justify-content-end">
                    {' '}
                    &copy 2021 Design by
                    <a href="#">Vishweb Design</a> BootStrap Admin Dashboard
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
