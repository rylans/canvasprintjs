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
      var txt = 'canvasprint.js 칸#';
      context.font = "14px 'Arial'";
      context.textBaseLine = "hanging";
      context.fillStyle = "#fab";
      context.fillRect(40,13,20,30);
      context.fillText(txt,11,11);
      context.fillStyle = "rgba(101,202, 12, 0.66)";
      context.fillText(txt,22,22);
      context.font = "14px 'no-such-font-'";
      context.fillText(txt,33,33);
      return canv.toDataURL().replace("data:image/png;base64,","");
    }
  };
  return Canvasprint;
})({});
