import React from 'react';

class ProfileClass extends React.Component{
    constructor(){
        super();
        this.state={
            userDetails:null
        }

    }

async componentDidMount(){
    const data=await fetch('https://api.github.com/users/rahuldeopa');
    const resData=await data.json();
    this.setState({
        userDetails:resData
    });
 
}
componentWillUnmount()
{
    console.log('unmounted')
}
render(){
    if(this.state.userDetails===null){
        return <h1>Loading...</h1>
    }
    const {login,avatar_url} = this.state.userDetails; 
    return(
        <div style={{
            "border":"1px solid black",
        }}>
            <h1>Profile</h1>
            <h3>Name:{login}</h3>
            <img src={avatar_url} alt="avatar" style={{"height":"100px","width":"100px"}}></img>
            
        </div>
    )
}
}
export default ProfileClass;