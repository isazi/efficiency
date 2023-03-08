
var isPaused;
var power_kg;

function evaluate(input, output) {
  if ( isPaused )
  {
    return;
  }
  power_kg = input.Power / input.Weight;
  output.effectiveness = input.Speed / power_kg;
  output.ecor = power_kg / input.Speed;
}

function onLoad(input, output)
{
  isPaused = true;
  power_kg = 0.0;
  output.effectiveness = 0.0;
}

function getUserInterface() {
  return {
    template: 't'
  };
}

function onExerciseStart()
{
  isPaused = false;
}

function onExercisePause()
{
  isPaused = true;
}

function onExerciseContinue()
{
  isPaused = false;
}

function getSummaryOutputs(input, output) {
  return [
    {
    id: "myzapp01.effectiveness",
    name: "Running Effectiveness",
    format: "Distance_Fourdigits",
    value: output.effectiveness
    },
    {
      id: "myzapp01.ecor",
      name: "ECOR",
      format: "Distance_Fourdigits",
      value: output.ecor
      }
  ];
}
