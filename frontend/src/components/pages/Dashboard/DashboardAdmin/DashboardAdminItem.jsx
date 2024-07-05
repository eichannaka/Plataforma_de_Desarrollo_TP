import React from 'react';

const DashboardAdminItem = ({ user }) => {
    return (
        <>
            <div className="row">
                <div className="col border-bottom border-dark mt-2 mb-2">{user.userType}</div>
                <div className="col border-bottom border-dark mt-2 mb-2">{user.firstName}</div>
                <div className="col border-bottom border-dark mt-2 mb-2">{user.lastName}</div>
                <div className="col border-bottom border-dark mt-2 mb-2">{user.email}</div>
            </div>
        </>
    );
};

export default DashboardAdminItem;
