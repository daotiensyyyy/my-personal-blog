import React from 'react';
import { Link } from 'react-router-dom';


function Action(props) {
    return (
        <div className="activity__container-action">
            <div className="activity__container-label">Recent posts</div>
            <div className="activity__container-view-all"><Link to="/posts">View all</Link></div>
        </div>
    );
}

export default Action;