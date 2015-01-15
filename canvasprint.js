/*
 * canvasprint.js
 */

var Canvasprint = (function(Canvasprint) {
  'use strict';
  Canvasprint = function (){};

  Canvasprint.prototype = {
    get: function (){
      var print = 0;
      print = this.getPrint();
      //TODO: Hash it
      return print;
    },

    getPrint: function() {
      var canv = document.createElement('canvas');
      var context = canv.getContext('2d');
      var txt = 'canvasprint.js 칸#';
      context.font = "14px 'Arial'";
      context.textBaseLine = "hanging";
      context.fillStyle = "#fab";
      context.fillRect(40,13,20,30);
      context.fillText(txt,11,11);
      return canv.toDataURL();
    }
  };
  return Canvasprint;
})({});
