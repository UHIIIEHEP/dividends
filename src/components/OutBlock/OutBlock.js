import React from 'react';
import './OutBlock.scss';
import Params from '../../../src/params.json'

class OutBlock extends React.Component{
    constructor(props){
        super(props);
        this.content = [];
    }

    conver = (num) =>{
        let strValue = '';
        if(num < 1000){
            strValue = num;
        }else{
            num /= 1000;
            if(num < 1000){
                strValue = `${(Math.floor(num*100))/100} ${Params.unitK[this.props.locale]}`;
            }else{
                num /= 1000;
                if(num < 1000){
                    strValue = `${(Math.floor(num*100))/100} ${Params.unitMLN[this.props.locale]}`;
                }else{
                    strValue = `${(Math.floor(num*100))/100} ${Params.unitMLRD[this.props.locale]}`;
                }
            }
        }
        return strValue;
    }

    render(){         
        this.content = [];
        this.content.push(
            <div className='title'>
                <div className='line-year'> 
                    <div className='title-year'>{Params.years[this.props.locale]}</div>
                </div>
                <div className='line-capital'> 
                    <div className='title-capital'>{Params.capital[this.props.locale]}</div>
                </div>
                <div className='line-dividends'> 
                    <div className='label-dividends'>{Params.dividends[this.props.locale]}</div>
                </div>
            </div>
            )
         for(let i = 0; i < this.props.period.length; i++){
            let capital = this.conver(this.props.capital[i]);
            let dividends = this.conver(this.props.dividends[i]);

            this.content.push(
                <div className='oneYear' key={i}>
                    <div className='line-year'> 
                        <div className='value-year'>{this.props.period[i]}</div>
                    </div>
                    <div className='line-capital'> 
                        <div className='value-capital'>{capital}</div>
                    </div>
                    <div className='line-dividends'> 
                        <div className='value-dividends'>{dividends}</div>
                    </div>
                </div>
            )
        }
        return(
            <div className = "blockResult">
                {this.content}
            </div>
        )
    }
}

export default OutBlock;