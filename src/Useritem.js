import React, { Component } from 'react'

export default class Useritem extends Component {

    render() {
        const {login,avatar_url,html_url}=this.props.user;
        return <div className='text-center'>
                 <img src={avatar_url} alt="" className="rounded-circle" style={{width:'60px'}}/>
                    <h3>{login}</h3> 
                    <div>
                        <a href={html_url} className='btn btn-dark btn-sm my-1' >More</a>
                    </div>
                </div>
    }
}
