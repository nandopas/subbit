import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class UsersPage extends Component {
    render() {
        const style = {
            backgroundColor: "#52b788",
            color: "white"
        }
        return (
            <div>
                {
                    this.props.users.map(user => (
                       
                        <Link to={`/users/${user.id}`}>
                        <div className="btn" style={style}>
                            {user.username}
                        </div>
                        </Link>
                   
                        
                    ))
                }
            </div>
        )
    }
}

// PropTypes
UsersPage.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersPage
