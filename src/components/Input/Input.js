import React from 'react';
import './Input.scss';

class Input extends React.Component{

    returnValue = (e) => {
        this.props.returnValueInput(e.target.value);
    }
    

    render(){
        
        console.log("DEFAULT ",this.props.defValue )
        return(
            <input id={this.props.idElement} className='input' onChange={this.returnValue} placeholder={this.props.defValue}></input>
        )
    }
}

export default Input;