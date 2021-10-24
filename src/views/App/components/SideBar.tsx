import React, { FC, useState } from 'react';
import {
    Container, 
    Row, 
    Col,
    ListGroup,
    Table,
    Image
    } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';


interface SideBarProps {
  content?: React.ReactNode;
}


const SideBar: FC<SideBarProps> = ({content}) => {
  const [sidebarState, setsidebarState] = useState(true);

  return (
    <Container className="" fluid> 
    <div className="wrapper">
    <nav id="sidebar" className={sidebarState? "": "active"}>
        <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active" >
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
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
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    <div id="content" >
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0 sushi-table"  > 
        <div className="container-fluid p-0 m-0 sushi-table" >
        <div className="row">
            {content}
            </div>
        </div>
    </nav>
</div>

</div>  
<button type="button" id="sidebarCollapse" className="btn btn-info" onClick={() =>{ setsidebarState(!sidebarState) }}>
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>
</Container>
  );
};

export default SideBar;