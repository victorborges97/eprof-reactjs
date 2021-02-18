import React, { useState } from 'react';
import { Link, Router, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../Context/ProvideAuth';
import { PrivateRoute } from "../../App"

import "./style.css";
import Home from '../Home';
import Alunos from '../Alunos';

function Dashboard() {
  const [Toggled, setToggled] = useState("toggled")

  const handleToggled = () => {
    Toggled === "toggled" ? setToggled(null) : setToggled("toggled")
  }

  let history = useHistory();
  let auth = useAuth();
  let { url } = useRouteMatch();

  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">eProf</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-white w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <Link
              class="nav-link"
              onClick={() => {
                auth.signout(() => history.push("/"));
              }}
            >
              Sair
            </Link>
          </li>
        </ul>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/dashboard/home">
                    <span data-feather="home"></span>
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/alunos">
                    <span data-feather="alunos"></span>
                    Alunos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard/pagamentos">
                    <span data-feather="pagamentos"></span>
                    Pagamentos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <PrivateRoute path={`${url}/home`}>
                <Home />
              </PrivateRoute>
              <PrivateRoute path={`${url}/alunos`}>
                <Alunos />
              </PrivateRoute>
              <PrivateRoute path={`${url}/pagamentos`}>
                <Home />
              </PrivateRoute>
            </Switch>
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard;

// <div className="Dashboard" id="wrapper">
//       <ul className={`navbar navbar-nav navbar-dark bg-primary sidebar accordion ${Toggled == null ? "" : Toggled}`} id="accordionSidebar">

//         <Link className="navbar-brand d-flex align-items-center justify-content-center" href="/">
//           <div className="navebar-brand-icon rotate-n-15">
//             <i className="fas fa-laugh-wink"></i>
//           </div>
//           <div className="navbar-brand-text mx-3">eProf</div>
//         </Link>

//         <hr className="navbar-divider" />

//         <li className="nav-item">
//           <Link className="nav-link" href="/">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>Dashboard</span>
//           </Link>
//         </li>

//         <hr className="sidebar-divider" />

//         <li className="nav-item">
//           <Link className="nav-link" href="/">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>Alunos</span>
//           </Link>
//         </li>

//         <hr className="sidebar-divider" />

//         <li className="nav-item">
//           <Link className="nav-link" href="/">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>Pagamentos</span>
//           </Link>
//         </li>

//         <hr className="sidebar-divider" />

//         <li className="nav-item">
//           <Link className="nav-link" href="/">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>Calendario</span>
//           </Link>
//         </li>

//         <hr className="sidebar-divider d-none d-md-block" />

//         <div className="text-center d-none d-md-inline">
//           <button className="rounded-circle border-0" onClick={handleToggled} id="sidebarToggle"></button>
//         </div>

//       </ul>

//       <p>
//         Welcome!{` ${auth.user.name}`}
//         <button
//           onClick={() => {
//             auth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//       </button>
//       </p>
//     </div>