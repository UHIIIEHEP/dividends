export function calcValue(startCapital, yearsContribution, period, procent){
    console.log("VALUE 0 ", startCapital)
    startCapital = Number(startCapital);
    yearsContribution = Number(yearsContribution);
    period = Number(period);
    procent = Number(procent);

    let objResultCalculation = {
        capital: [startCapital],
        dividends: [0],
        period: [0],
        procent: [procent]
    }

    for(let i = 1; i < period; i++){
        objResultCalculation.period.push(i);
        objResultCalculation.procent.push(procent);
        objResultCalculation.dividends.push(Math.floor((objResultCalculation.capital[i-1]*objResultCalculation.procent[i]/100)*100)/100)
        objResultCalculation.capital.push(Math.floor((objResultCalculation.capital[i-1] + yearsContribution  + objResultCalculation.dividends[i])*100)/100)
    }

    return objResultCalculation;

}