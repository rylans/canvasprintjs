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
      for (i = 0, len = string.length; i < len; i++){
	hash = ((hash << 5) - hash) + (string.charCodeAt(i) * 47);
	hash ^= 0x7fffffff;
	hash |= 0;
      }
      return hash;
    },

    writeOnContext: function(context, string, typeface, color, x, y){
      context.font = "14px " + typeface;
      context.fillStyle = color;
      context.fillText(string, x, y);
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
      var lig = 'fl';
      txt = txt + han + rtl + other + lig;

      context.fillStyle = "#fab";
      context.fillRect(0,0,8,60);

      context.textBaseLine = "hanging";

      var generics = ["sans-serif", "serif", "fantasy", "cursive", "monospace"];
      var families = ["-no-font-", "Papyrus", "Copperplate", "Baskerville",
		      "Palatino", "Cambria", "Seoul", "Song", "Taipei"];

      var typefaces = generics.concat(families);
      for (var i = 0; i < typefaces.length; i++){
	var y = 10 + (2*i);
	var x = 2*i;
	this.writeOnContext(context, txt, typefaces[i], "rgba(202,56,202,0.53)",x,y);
      }

      return canv.toDataURL().replace("data:image/png;base64,","");
    }
  };
  return Canvasprint;
})({});
