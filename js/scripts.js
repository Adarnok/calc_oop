'use strict';
(function(){
    
    function Kalkulator(result){
        this._guziczki = document.querySelectorAll('input[type="button"]');
        this._resPlace = document.querySelector('#' + result);
        console.log(this._guziczki);
        console.log(this._resultPlace);
        this._guziki(this._guziczki);
    }


    // Kalkulator.prototype._guziki = function(guzik){
    //     guzik.forEach(function(elem, i){
    //         elem.addEventListener('click', this._calc.bind(this), this);
    //     })
    // }
    Kalkulator.prototype._guziki = function(guzik){
        guzik.forEach(this._click, this);
    }
    Kalkulator.prototype._click = function(elem, i){
        elem.addEventListener('click', this._calc.bind(this));
    }
    
    Kalkulator.prototype._calc = function(button){
        const buttonValue = button.target.value;
        if(buttonValue === 'C'){
            this._resPlace.value = '';
        }else if(buttonValue ==='='){
            this._resPlace.value = eval(this._resPlace.value);
        }else {
            this._resPlace.value += buttonValue;
        }
    }
    new Kalkulator('res');
    // new Kalkulator();
})()