/*
jQWidgets v27.1.0 (2026-Oct)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}(function(e){e.extend(e.jqx._jqxChart.prototype,{_moduleWaterfall:true,_isSummary:function(e,a){var i=this.seriesGroups[e];for(var r=0;r<i.series.length;r++){if(undefined===i.series[r].summary)continue;var t=this._getDataValue(a,i.series[r].summary,e);if(undefined!==t)return true}return false},_applyWaterfall:function(e,a,i,r,t,f,s,u,n){var v=this.seriesGroups[i];if(e.length==0)return e;var l=r;var o={};var N=[];var h=undefined;var m=[];for(var d=0;d<v.series.length;d++)m.push(this._isSerieVisible(i,d));var _={};for(var c=0;c<a;c++){var g=r;var D=0;var p=this._isSummary(i,c);for(var d=0;d<e.length;d++){if(!m[d])continue;var y=0;if(p){y=g==r?t:0;e[d][c].value=o[d];e[d][c].summary=true;h=e[d][c].value<y;if(u)h=!h;var x=0;if(!isNaN(f))x=this._getDataPointOffsetDiff(e[d][c].value+D,D==0?t:D,y||t,f,s,r,u);else x=this._getDataPointOffsetDiff(e[d][c].value,y,y,NaN,s,r,u);e[d][c].to=g+(h?x:-x);e[d][c].from=g;if(n){D+=e[d][c].value;g=e[d][c].to}continue}var O=n?-1:d;if(isNaN(e[d][c].value))continue;if(undefined===_[O]){y=t;_[O]=true}h=e[d][c].value<y;if(u)h=!h;var P=NaN,x=NaN;if(!n){P=c==0?r:e[d][N[d]].to}else{P=l}var x=0;if(!isNaN(f))x=this._getDataPointOffsetDiff(e[d][c].value+(isNaN(o[O])?0:o[O]),isNaN(o[O])?t:o[O],y||t,f,s,P,u);else x=this._getDataPointOffsetDiff(e[d][c].value,y,y,NaN,s,r,u);e[d][c].to=l=P+(h?x:-x);e[d][c].from=P;if(isNaN(o[O]))o[O]=e[d][c].value;else o[O]+=e[d][c].value;if(O==-1){if(isNaN(o[d]))o[d]=e[d][c].value;else o[d]+=e[d][c].value}if(!n)N[d]=c}}return e}})})(jqxBaseFramework)})();

