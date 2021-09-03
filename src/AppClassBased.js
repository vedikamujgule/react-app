import React from 'react';

export class AppClassBased extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Vedika", 
            surname: "Mujgule"
        };
    }
    render() {
        return(
            <div>
                <div>Hi my name is {this.state.name}</div>
                <div>and my surname is {this.state.surname}</div>
            </div>
        )
    }
}

export default AppClassBased