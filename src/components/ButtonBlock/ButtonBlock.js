import React from 'react';
import './ButtonBlock.scss';

class ButtonBlock extends React.Component{

    returnClickBtn = async () => {
        this.props.returnClick('true')        
    }

    render(){
        return(
            <div>
                <button 
                    className='button' 
                    onClick={this.returnClickBtn}
                >
                        {this.props.buttonText}
                </button>
            </div>
        )
    }
}

export default ButtonBlock;