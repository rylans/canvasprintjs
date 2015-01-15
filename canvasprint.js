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
      return this.hash(print);
    },

    hash: function(base64){
      var hash = 3001, i, len, string = atob(base64);
      if (string.length == 0) return hash;
      var p = 0x7fffffff;
      for (i = 0, len = string.length; i < len; i++){
	hash = ((hash << 5) - hash) + (string.charCodeAt(i) * 47);
	hash ^= p;
	hash |= 0;
      }
      return hash;
    },

    getPrint: function() {
      var canv = document.createElement('canvas');
      var context = canv.getContext('2d');

      var grad = context.createLinearGradient(0,0,70,70);
      grad.addColorStop(0, "#dddedf");
      grad.addColorStop(1, "#606264");
      context.fillStyle = grad;
      context.fillRect(0, 0, 60, 60);

      var txt = 'canvasprint.js';
      var han = ' 칸支 ';
      var rtl = 'زما';
      var other = '🂡'
      txt = txt + han + rtl + other;

      context.fillStyle = "#fab";
      context.fillRect(0,0,8,60);

      context.textBaseLine = "hanging";

      context.font = "14px serif";
      context.fillStyle = "rgba(12, 202, 101, 0.65)";
      context.fillText(txt,0,10);

      context.font = "14px sans-serif";
      context.fillStyle = "rgba(101,202, 12, 0.64)";
      context.fillText(txt,0,20);

      context.font = "14px 'no-such-font-'";
      context.fillStyle = "rgba(202,101, 12, 0.63)";
      context.fillText(txt,0,30);

      context.font = "14px monospace";
      context.fillStyle = "rgba(12, 101, 202, 0.63)";
      context.fillText(txt,0,40);

      return canv.toDataURL().replace("data:image/png;base64,","");
    }
  };
  return Canvasprint;
})({});
