const meterInput = document.querySelector("#meterdiv > input");
const decimeterInput = document.querySelector("#decimeterdiv > input");
const centimeterInput = document.querySelector("#centimeterdiv > input");
const millimeterInput = document.querySelector("#millimeterdiv > input");
const meterDiv = document.querySelector("#meterdiv");
const decimeterDiv = document.querySelector("#decimeterdiv");
const centimeterDiv = document.querySelector("#centimeterdiv");
const millimeterDiv = document.querySelector("#millimeterdiv");

function roundNum(num) {
  return Math.round(num*100)/100;
}

function meterFunc() {
  const meter = parseFloat(meterInput.value);
  const decimeter = roundNum(meter * 10);
  const centimeter = roundNum(meter * 100);
  const millimeter = roundNum(meter * 1000);

  decimeterInput.value = decimeter;
  centimeterInput.value = centimeter;
  millimeterInput.value = millimeter;
};

function deciFunc() {
  const decimeter = parseFloat(decimeterInput.value);
  const meter = roundNum(decimeter / 10);
  const centimeter = roundNum(decimeter * 10);
  const millimeter = roundNum(decimeter * 100);

  meterInput.value = meter;
  centimeterInput.value = centimeter;
  millimeterInput.value = millimeter;

};

function centiFunc() {
  const centimeter = parseFloat(centimeterInput.value);
  const meter = roundNum(centimeter / 100);
  const decimeter = roundNum(centimeter / 10);
  const millimeter = roundNum(centimeter * 10);

  decimeterInput.value = decimeter;
  meterInput.value = meter;
  millimeterInput.value = millimeter;
};

function milliFunc() {
  const millimeter = parseFloat(millimeterInput.value);
  const meter = roundNum(millimeter / 1000);
  const decimeter = roundNum(millimeter / 100);
  const centimeter = roundNum(millimeter / 10);

  decimeterInput.value = decimeter;
  centimeterInput.value = centimeter;
  meterInput.value = meter;
};

function eventListeners() {
  meterInput.addEventListener("input", meterFunc);
  decimeterInput.addEventListener("input", deciFunc);
  centimeterInput.addEventListener("input", centiFunc);
  millimeterInput.addEventListener("input", milliFunc);
};

eventListeners();
