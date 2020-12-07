import React from 'react';
import './layoutstyle.css';
import Sidebar from './Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container blogContainer">
            {props.children}
            <Sidebar />
          </div>
          {/* <div>
              <h1>THIS IS FOOTER FOR ALL PAGES</h1>
          </div> */}
      </React.Fragment>
    
   )

 }

export default Layout