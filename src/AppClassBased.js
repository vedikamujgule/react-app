import React from 'react';

export class AppClassBased extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <div>Props Name{this.props.name}</div>
                <div>Prop surname{this.props.surname}</div>
            </div>
        );
    };
}

export default AppClassBased