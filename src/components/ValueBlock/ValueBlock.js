import React from 'react';
import './ValueBlock.scss';
import Input from '../Input/Input.js'
import Label from '../Label/Label.js'
import UnitBlock from '../UnitBlock/UnitBlock.js'

class ValueBlock extends React.Component{  
    valueUnit = (value) => {
        console.log("URA VALUE ", value)
    }
    render(){
        return(
            <div className='valueBlock'>
                <Label className='label' textLabel={this.props.labelText}/>
                <Input idElement={this.props.idElement} className='input' returnValueInput = {this.props.returnValue} defValue={this.props.defaultValue}/>
                <UnitBlock itemSelectOpt={this.props.itemSelect} returnUnit={this.valueUnit}/>
            </div>
        )
    }
}

export default ValueBlock;