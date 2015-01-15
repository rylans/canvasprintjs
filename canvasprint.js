/*
 * canvasprint.js
 */

(function() {
  'use strict';

  var Canvasprint = function(){
  };

  Canvasprint.prototype = {
    get: function (){
      var print = 0;
      print = this.getPrint();
      //TODO: Hash it
      return print;
    },

    getPrint: function() {
      var canv = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var txt = 'canvasprint.js 칸#';
      context.textBaseLine = "top";
      context.font = "14px 'Arial'";
      context.textBaseLine = "hanging";
      context.fillStyle = "#fab";
      context.fillRect(40,1,20,30);
      context.fillText(txt,4,4)
      return canv.toDataURL();
    }
  };

  return Canvasprint;
})();
