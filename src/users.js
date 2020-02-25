import React, { Component } from 'react';
import Useritem from './Useritem';
import Spinner from './Spinner';

export default class Users extends Component {

    render() {
        const {loading}=this.props;
        if(loading)
            return <Spinner/>
        else{
        return (
            <div style={userStyle}>
                {this.props.users.map(user=>(
                 <Useritem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}