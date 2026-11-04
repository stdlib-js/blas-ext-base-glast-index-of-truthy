"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var u=i(function(l,s){
var v=require('@stdlib/blas-ext-base-gindex-of-truthy/dist').ndarray;function x(r,e,a,n){var t;return r<=0?-1:(n+=(r-1)*a,a*=-1,t=v(r,e,a,n),t<0?t:r-1-t)}s.exports=x
});var d=i(function(p,y){
var q=require('@stdlib/strided-base-stride2offset/dist'),c=u();function o(r,e,a){return c(r,e,a,q(r,a))}y.exports=o
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=d(),g=u();O(f,"ndarray",g);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
