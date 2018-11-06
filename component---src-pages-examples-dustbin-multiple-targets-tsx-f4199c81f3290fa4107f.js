(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(7),o=n.n(a),c=(n(166),n(48),n(76),n(173)),i=(n(34),n(164)),p={height:"12rem",width:"12rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.accepts,n=e.isOver,a=e.canDrop,o=e.connectDropTarget,c=e.lastDroppedItem,i=n&&a,s="#222";return i?s="darkgreen":a&&(s="darkkhaki"),o&&o(r.createElement("div",{style:Object.assign({},p,{backgroundColor:s})},i?"Release to drop":"This dustbin accepts: "+t.join(", "),c&&r.createElement("p",null,"Last dropped: ",JSON.stringify(c))))},t}(r.Component),u=Object(i.DropTarget)(function(e){return e.accepts},{drop:function(e,t){e.onDrop(t.getItem())}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(s),l={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.isDropped,a=e.isDragging,o=e.connectDragSource,c=a?.4:1;return o&&o(r.createElement("div",{style:Object.assign({},l,{opacity:c})},n?r.createElement("s",null,t):t))},t}(r.Component),f=Object(i.DragSource)(function(e){return e.type},{beginDrag:function(e){return{name:e.name}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(d),m={FOOD:"food",GLASS:"glass",PAPER:"paper"},y=n(167),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={dustbins:[{accepts:[m.GLASS],lastDroppedItem:null},{accepts:[m.FOOD],lastDroppedItem:null},{accepts:[m.PAPER,m.GLASS,c.NativeTypes.URL],lastDroppedItem:null},{accepts:[m.PAPER,c.NativeTypes.FILE],lastDroppedItem:null}],boxes:[{name:"Bottle",type:m.GLASS},{name:"Banana",type:m.FOOD},{name:"Magazine",type:m.PAPER}],droppedBoxNames:[]},n}o()(t,e);var n=t.prototype;return n.isDropped=function(e){return this.state.droppedBoxNames.indexOf(e)>-1},n.render=function(){var e=this,t=this.state,n=t.boxes,a=t.dustbins;return r.createElement("div",null,r.createElement("div",{style:{overflow:"hidden",clear:"both"}},a.map(function(t,n){var a=t.accepts,o=t.lastDroppedItem;return r.createElement(u,{accepts:a,lastDroppedItem:o,onDrop:function(t){return e.handleDrop(n,t)},key:n})})),r.createElement("div",{style:{overflow:"hidden",clear:"both"}},n.map(function(t,n){var a=t.name,o=t.type;return r.createElement(f,{name:a,type:o,isDropped:e.isDropped(a),key:n})})))},n.handleDrop=function(e,t){var n,r=t.name,a=r?{$push:[r]}:{};this.setState(y(this.state,{dustbins:(n={},n[e]={lastDroppedItem:{$set:t}},n),droppedBoxNames:a}))},t}(r.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement("p",null,r.createElement("b",null,r.createElement("a",{href:"https://github.com/react-dnd/react-dnd/tree/master/packages/documentation/src/examples/01%20Dustbin/Multiple%20Targets"},"Browse the Source"))),r.createElement("p",null,"This is a slightly more interesting example."),r.createElement("p",null,"It demonstrates how a single drop target may accept multiple types, and how those types may be derived from props. It also demonstrates the handling of native files and URLs (try dropping them onto the last two dustbins)."),r.createElement(g,null))},t}(r.Component),b=n(165);t.default=function(e){return r.createElement(b.a,e,r.createElement(h,null))}},167:function(e,t,n){var r=n(77),a=Object.prototype.hasOwnProperty,o=Array.prototype.splice,c=Object.prototype.toString,i=function(e){return c.call(e).slice(8,-1)},p=Object.assign||function(e,t){return s(t).forEach(function(n){a.call(t,n)&&(e[n]=t[n])}),e},s="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function u(e){if(Array.isArray(e))return p(e.constructor(e.length),e);if("Map"===i(e))return new Map(e);if("Set"===i(e))return new Set(e);if(e&&"object"==typeof e){var t=Object.getPrototypeOf(e);return p(Object.create(t),e)}return e}function l(){var e=p({},d);return t.extend=function(t,n){e[t]=n},t.isEquals=function(e,t){return e===t},t;function t(n,o){"function"==typeof o&&(o={$apply:o}),Array.isArray(n)&&Array.isArray(o)||r(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var c=n;return s(o).forEach(function(r){if(a.call(e,r)){var p=n===c;c=e[r](o[r],c,o,n),p&&t.isEquals(c,n)&&(c=n)}else{var s="Map"===i(n)?t(n.get(r),o[r]):t(n[r],o[r]),l="Map"===i(c)?c.get(r):c[r];t.isEquals(s,l)&&(void 0!==s||a.call(n,r))||(c===n&&(c=u(n)),"Map"===i(c)?c.set(r,s):c[r]=s)}}),c}}var d={$push:function(e,t,n){return m(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return m(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,a){return function(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),g(t.$splice)}(t,n),e.forEach(function(e){g(e),t===a&&e.length&&(t=u(a)),o.apply(t,e)}),t},$set:function(e,t,n){return function(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(n),e},$toggle:function(e,t){y(e,"$toggle");var n=e.length?u(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return y(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=u(r)),delete t[e])}),t},$add:function(e,t,n,r){return h(t,"$add"),y(e,"$add"),"Map"===i(t)?e.forEach(function(e){var n=e[0],a=e[1];t===r&&t.get(n)!==a&&(t=u(r)),t.set(n,a)}):e.forEach(function(e){t!==r||t.has(e)||(t=u(r)),t.add(e)}),t},$remove:function(e,t,n,r){return h(t,"$remove"),y(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=u(r)),t.delete(e)}),t},$merge:function(e,t,n,a){var o,c;return o=t,r((c=e)&&"object"==typeof c,"update(): $merge expects a spec of type 'object'; got %s",c),r(o&&"object"==typeof o,"update(): $merge expects a target of type 'object'; got %s",o),s(e).forEach(function(n){e[n]!==t[n]&&(t===a&&(t=u(a)),t[n]=e[n])}),t},$apply:function(e,t){var n;return r("function"==typeof(n=e),"update(): expected spec of $apply to be a function; got %s.",n),e(t)}},f=l();function m(e,t,n){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e),y(t[n],n)}function y(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function g(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function h(e,t){var n=i(e);r("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",t,n)}e.exports=f,e.exports.default=f,e.exports.newContext=l}}]);
//# sourceMappingURL=component---src-pages-examples-dustbin-multiple-targets-tsx-f4199c81f3290fa4107f.js.map