"use strict";
var Car = function() {
  function Car(make) {
    this.make = make;
    this.currentSpeed = 25;
  }
  return ($traceurRuntime.createClass)(Car, {printCurrentSpeed: function() {
      console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }}, {});
}();
var RaceCar = function($__super) {
  function RaceCar(make, topSpeed) {
    $traceurRuntime.superConstructor(RaceCar).call(this, make);
    this.topSpeed = topSpeed;
  }
  return ($traceurRuntime.createClass)(RaceCar, {goFast: function() {
      this.currentSpeed = this.topSpeed;
    }}, {}, $__super);
}(Car);
var stang = new RaceCar('Mustang', 150);
stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();
console.log(document.getElementById("hello").textContent);
document.getElementById("hello").innerHTML = "Hello world!";
