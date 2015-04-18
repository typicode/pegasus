// Store original in case of collision
var _pegasus = pegasus;

function pegasusNoConflict() {
  var pegasusFunction = pegasus;
  pegasus = _pegasus;
  return pegasusFunction;
}