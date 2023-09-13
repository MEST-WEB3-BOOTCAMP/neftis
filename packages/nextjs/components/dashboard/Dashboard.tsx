import React from 'react';

const DashPage: React.FC = () => {
    return (
        <div className="dashboard">
            <nav id="sidebar" className="bg-light">
                <div className="p-4">
                    <h3>Dashboard</h3>
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-align-left"/>
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                </nav>

                <div className="container-fluid">
                    <h2>Dashboard Content</h2>
                </div>
            </div>
        </div>
    );
};

export default DashPage;
