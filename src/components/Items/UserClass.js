import React, { Component } from 'react'

import UserImage from '../../static/images/user.png'

class UserClass extends Component {
    render() {
        const { name, email, subscriber } = this.props

        return (
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: "50px 1fr", marginBottom: 25 }}>
                <img src={UserImage} alt="User avatar" style={{ height: 50, width: 50 }}/>
                <div>
                    <h6 style={{ margin: 0, textAlign: "left" }}>{name}</h6>
                    <p style={{ margin: 0, textAlign: "left" }}>{email}</p>
                    <p style={{ margin: 0, textAlign: "left" }}>{subscriber}</p>
                </div>
            </div>
        )
    }
}

export default UserClass