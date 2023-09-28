import { Button } from "react-bootstrap";
import React, { useState } from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import { removeUserSession } from "../../utils/common";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        removeUserSession();
        navigate('/login')
        //this.props.history.push('/dashboard')
    }

    return (
        <div className="dashboard">
            <div>
                Dashboard Page
            </div>
            <div>
                <Button variant="warning" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
}

export default Dashboard;