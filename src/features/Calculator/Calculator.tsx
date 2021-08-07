import { do_calc,degrees_to_radians } from "./CalculatorAPI.js";

function Calculator() {
  const getCalculate = () => {
    console.log(do_calc(
      degrees_to_radians(30),
      degrees_to_radians(180+30),
      'Черкасская',
      'поли',
      'земля',
      55,
      750
    ));
  }
  return (
    <div className="calculator">
     <h1>calculator</h1>
     <button onClick={getCalculate}>
       calculete
     </button>
     </div>
  );
}

export default Calculator;