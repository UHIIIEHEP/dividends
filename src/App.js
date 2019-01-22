import React, { Component } from 'react';
import './App.css';
import ValueBlock from './components/ValueBlock/ValueBlock.js'
import ButtonBlock from './components/ButtonBlock/ButtonBlock.js'
import OutBlock from './components/OutBlock/OutBlock.js'
import {calcValue} from './Math.js'
import Params from './params.json'
import UnitBlock from './components/UnitBlock/UnitBlock.js'


class App extends Component {

  constructor(props){
    super(props);

    this.startCapital = 100000;
    this.yearsContribution = 36000;
    this.period = 10;
    this.procent = 10;
    
    this.state = {
      startCapital: 0,
      yearsContribution: 0,
      period: 0,
      procent: 0,
      locale: 'ru'
    }
  }

  returnStartCapital = (value) => {
    this.startCapital = value;
  }

  returnYearsContribution = (value) => {
    this.yearsContribution = value;
  }

  returnPeriod = (value) => {
    this.period = value;
  }
  returnProcents = (value) => {
    this.procent = value;
  }

  returnLocale = (value) =>{
    this.setState({locale: value})
  }

  returnClick = (evClk) => {
    if(evClk){
      const objParams = calcValue(this.startCapital, this.yearsContribution, this.period, this.procent)

      this.setState({
        capital: objParams.capital,
        dividends: objParams.dividends,
        period: objParams.period,
        procent: objParams.procent
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UnitBlock className = 'locale' itemSelectOpt={Params.locale} returnValueInput={this.returnLocale}/>

          <ValueBlock 
            id={'input0'} 
            className='valueBlock' 
            labelText={Params.startCapital[this.state.locale]} 
            returnValue={this.returnStartCapital} 
            defaultValue={this.startCapital}
            itemSelect={Params.itemSelectCapital}/>

          <ValueBlock 
            id={'input1'} 
            className='valueBlock' 
            labelText={Params.yearsContribution[this.state.locale]} 
            returnValue={this.returnYearsContribution}  
            defaultValue={this.yearsContribution} 
            itemSelect={Params.itemSelectContribution}/>

          <ValueBlock 
            id={'input2'} 
            className='valueBlock' 
            labelText={Params.period[this.state.locale]} 
            returnValue={this.returnPeriod} 
            defaultValue={this.period} 
            itemSelect={Params.itemSelectYears[this.state.locale]}/>

          <ValueBlock 
            id={'input3'} 
            className='valueBlock' 
            labelText={Params.procents[this.state.locale]} 
            returnValue={this.returnProcents} 
            defaultValue={this.procent} 
            itemSelect={Params.itemSelectProcent}/>

          <ButtonBlock 
            buttonText={Params.buttonContent[this.state.locale]} 
            returnClick={this.returnClick}/>

          <OutBlock 
            capital={this.state.capital} 
            dividends={this.state.dividends} 
            period={this.state.period} 
            procent={this.state.procent}
            locale = {this.state.locale} />
            
        </header>
      </div>
    );
  }
}

export default App;
