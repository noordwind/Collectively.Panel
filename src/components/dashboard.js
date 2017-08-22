import React, { Component } from 'react';
import { Link } from 'react-router'
import Header from './header'
class Dashboard extends Component {
  render() {
    return (
      <div id="wrapper">
      <nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
          <div className="navbar-header">
              <button className="navbar-toggler hidden-sm-up pull-sm-right" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              </button>
          </div>
          <ul className="nav navbar-nav top-nav navbar-right pull-xs-right">
              <li className="dropdown nav-item">
                    <Link className="nav-link" to="/signout"><i className="fa fa-user"></i> Sign Out</Link>
              </li>
          </ul>
          <div className="collapse navbar-collapse navbar-toggleable-sm navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav list-group">
                  <li className="list-group-item">
                    <Link className="nav-link" to="/dashboard"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/remarks"><i className="fa fa-fw fa-bar-chart-o"></i> Remarks</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/users"><i className="fa fa-fw fa-table"></i> Users</Link>
                  </li>

                  <li className="list-group-item">
                    <Link className="nav-link" to="/stats"><i className="fa fa-fw fa-edit"></i> Statistics</Link>
                  </li>

              </ul>
          </div>
      </nav>
    </div>
    );
  }
}

export default Dashboard;
