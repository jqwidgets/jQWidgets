/*
jQWidgets v23.0.0 (2025-May)
Copyright (c) 2011-2025 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}(function(a){a.extend(a.jqx._jqxChart.prototype,{_moduleAnnotations:true,_renderAnnotation:function(f,g,c){var j=this.seriesGroups[f];var q=this.renderer;if(isNaN(f)){return}var l=this._get([this.getXAxisDataPointOffset(g.xValue,f),g.x]);var k=this._get([this.getValueAxisDataPointOffset(g.yValue,f),g.y]);var v=this._get([this.getXAxisDataPointOffset(g.xValue2,f),g.x2]);var e=this._get([this.getValueAxisDataPointOffset(g.yValue2,f),g.y2]);if(j.polar||j.spider){var r=this.getPolarDataPointOffset(g.xValue,g.yValue,f);if(r&&!isNaN(r.x)&&!isNaN(r.y)){l=r.x;k=r.y}else{l=g.x;k=g.y}}if(isNaN(k)||isNaN(l)){return false}if(j.orientation=="horizontal"){var w=l;l=k;k=w;w=v;v=e;e=w}if(g.offset){if(!isNaN(g.offset.x)){l+=g.offset.x;v+=g.offset.x}if(!isNaN(g.offset.y)){k+=g.offset.y;e+=g.offset.y}}var p=this._get([g.width,v-l]);var o=this._get([g.height,e-k]);if(isNaN(p)){p=90;o=20}var d;switch(g.type){case"rect":d=q.rect(l,k,p,o);break;case"circle":d=q.rect(l,k,g.radius);break;case"line":d=q.rect(l,k,v,e);break;case"path":d=q.path(g.path);break}q.attr(d,{fill:g.fillColor,stroke:g.lineColor,opacity:this._get([g.fillOpacity,g.opacity]),"stroke-opacity":this._get([g.lineOpacity,g.opacity]),"stroke-width":g.lineWidth,"stroke-dasharray":g.dashStyle||"none",});var u;if(g.text){var m=g.text;var z=0,h=0;if(m.offset){if(!isNaN(m.offset.x)){z+=m.offset.x}if(!isNaN(m.offset.y)){h+=m.offset.y}}u=q.text(m.value,l+z,k+h,NaN,NaN,m.angle,{},m.clip===true,m.horizontalAlignment||"center",m.verticalAlignment||"center",m.rotationPoint||"centermiddle");q.attr(u,{fill:m.fillColor,stroke:m.lineColor,"class":m["class"]})}var b=["click","mouseenter","mouseleave"];var n=this;for(var t=0;t<b.length;t++){var s=this._getEvent(b[t])||b[t];if(d){this.renderer.addHandler(d,s,function(){n._raiseAnnotationEvent(g,s)})}if(u){this.renderer.addHandler(u,s,function(){n._raiseAnnotationEvent(g,s)})}}},_raiseAnnotationEvent:function(b,c){this._raiseEvent("annotation_"+c,{annotation:b})}})})(jqxBaseFramework)})();



