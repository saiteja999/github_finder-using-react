import React, {Component} from 'react';
import Navbar from './navbar';
//import Useritem from './Useritem'
import Users from './users';
import Search from './search'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class App extends Component {
    state={
        users:[],
        loading:false
    };

 //   async componentDidMount() {
//        this.setState({loading:true});
//        const res=await axios.get(`https://api.github.com/users?q=${text}client_id=$
//        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//        this.setState({loading:false,users:res.data.items});  
//    }
    
    searchUsers=async text=>
    {
        const res=await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({loading:false,users:res.data.items});  
    };



    render() {
        return (
            <div>
                <Navbar title="github Finder"  icon="fab fa-github"/>
                <Search searchUsers={this.searchUsers}/>
                <Users loading={this.state.loading} users={this.state.users}/>
            </div>
        )
    }

}
//In navbar title and icon are optional .since in navbar we have given defaultprops.