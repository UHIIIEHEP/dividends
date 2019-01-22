import React from 'react';
import './Label.scss';

class Label extends React.Component{

    render(){
        return(
            <label className='label'>{this.props.textLabel}</label>
        )
    }
}

export default Label;