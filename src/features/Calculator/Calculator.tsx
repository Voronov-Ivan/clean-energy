import { do_calc,degrees_to_radians } from "./CalculatorAPI.js";
import{ regions, tip_modulej,place_install } from './Constants'
import './calculator.css';
import { option } from "yargs";
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { store } from "../../app/store.js";

function Calculator() {
  const initialState ={
    angle :30, 
    azimuth :30,
    region:'Черкасская',
    module:'поли', 
    place:'земля', 
    power:55,
    ploshhad:750,
    sumGod: 0    
  }
  const [state, setState] = useState(initialState);

  const getCalculate = (oldState: any) => {
    const res = {...oldState, sumGod:Math.round(do_calc(
      degrees_to_radians(state.angle),
      degrees_to_radians(180+state.azimuth),
      state.region,
      state.module,
      state.place,
      state.power,
      state.ploshhad
    ))}

    console.log(res)

    return res
  }

  const regionsOptions = Object.values(regions).map((region,index) => <option key={index} value={region}>{region}</option>);
  const moduleOptions = Object.keys(tip_modulej).map((tip,index) => <option key={index} value={tip}>{tip}</option>);
  const placeOptions = Object.keys(place_install).map((place,index) => <option key={index} value={place}>{place}</option>);
  
  const hendleRegion = (event: any) => {
    console.log(event.target.value);
    
    setState(getCalculate({...state, region: event.target.value}));
  }
  const hendleModule = (event: any) => {
    setState(getCalculate({...state, module: event.target.value}))
    ;
    console.log(event.target.value);
  }
  const hendleAzimuth = (event: any) => {
    setState(getCalculate({...state, azimuth: event.target.value}))
    
  }
  const hendlePLace = (event: any) => {
    setState(getCalculate({...state, place: event.target.value}))
  }
  const hendlePower = (event: any) => {
    console.log(event.target.value);
    
    setState(getCalculate({...state, power: event.target.value}))
    
  }
  const hendleAngle = (event: any) => {
    setState(getCalculate({...state, angle: event.target.value}));
  }
  const hendlePloshhad = (event: any) => {
    setState(getCalculate({...state, ploshhad: event.target.value}));
  }
  const angleM = (event: any) => {
    setState(getCalculate({...state, angle: state.angle-1}));
  }
  const angleP = (event: any) => {
    setState(getCalculate({...state, angle: state.angle+1}));
  }
  const azimuthM = (event: any) => {
    setState(getCalculate({...state, azimuth: state.azimuth-1}));
  }
  const azimuthP = (event: any) => {
    setState(getCalculate({...state, azimuth: state.azimuth+1}));
  }

  return (
    <div className="calculator">
     <p>Попередній розрахунок генерації електроенергії за допомогою сонячної електростанції легко виконати завдяки оновленому калькулятору, розробленим в Рентехно. Калькулятор сонячної електростанції - ваш перший крок до власної сонячної електростанції.</p>
     <div className="calcs">
       <div className='custom-select'>
        <h5>Оберіть область:</h5>
       <select value={state.region} onChange={hendleRegion}>
         {regionsOptions}
        </select>
        <h5>Тип установки:</h5>
        <select value={state.place} onChange={hendlePLace}>
         {placeOptions}
        </select >
        <h5>Тип модуля:</h5>
        <select value={state.module} onChange={hendleModule}>
         {moduleOptions}
        </select>
        <h5>Потужність:</h5>
        <input placeholder={state.power.toString()} type="number"  onChange={hendlePower}/>
        <h5>Площа:</h5>
        <input placeholder={state.ploshhad.toString()} type="number"  onChange={hendlePloshhad}/>
        <div className="azimut">
          <div>
            <h6>Кут нахилу</h6>
            <img src="/img/cut.png" alt="" />
            <div><button onClick={angleM}>-</button ><input type="number" value={state.angle} /><button onClick={angleP}>+</button></div>
          </div>
          <div>
            <h6>Азимут</h6>
            <div><img src="/img/azim.png" alt="" /></div>
            <div><button onClick={azimuthM}>-</button><input type="number" value={state.azimuth} /><button onClick={azimuthP}>+</button></div>
          </div>
        </div>
       </div>
       <div className='custom-select'>
         <div><img src="/img/calc.png" alt="" /></div>
       <h5>Кількість виробленої енергії за рік в КВ:</h5>
        <input type="number" value={state.sumGod}/>
       </div>
     </div>
    </div>
  );
}

export default Calculator;