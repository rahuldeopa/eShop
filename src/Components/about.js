
import React, { Component } from 'react';
import ProfileClass from './ProfileClass';

class About extends Component{
    constructor(){
        super();
    }
    render()
    {
        return (
            <div >
                <ProfileClass name="Rahul" address='Dehrdaun' email='rahuldeopa1818@gmail.com'></ProfileClass>
            </div>
        );
    }
}
export default About;
