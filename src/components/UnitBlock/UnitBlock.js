import React from 'react';
import './UnitBlock.scss';

class UnitBlock extends React.Component{
    constructor(props){
        super(props);
        this.optionsBlock = [];
        this.returnDOM = '';
    }

    returItem = (e) =>{
       this.props.returnValueInput(e.target.value);
    }

    render(){
        if(this.props.itemSelectOpt.length !== 1){
            this.optionsBlock = [];
            this.props.itemSelectOpt.forEach((item, index)=>{
                this.optionsBlock.push(
                    <option key={index}>{item}</option>
                );
                
            });
            this.returnDOM = 
                <select className = 'select' onChange ={this.returItem}>
                    {this.optionsBlock}
                </select>
        }else{
            this.returnDOM = <div className = 'divSelect' >{this.props.itemSelectOpt[0]}</div>
        }
        return(
            <div className="selected">                
                {this.returnDOM}
            </div>
        )
    }
}

export default UnitBlock;