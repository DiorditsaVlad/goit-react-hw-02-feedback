(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(3),o=n.n(a),r=(n(14),n(4)),s=n(5),d=n(6),u=n(9),b=n(8),j=n(0);function l(e){var t=e.title,n=void 0===t?"":t,c=e.children;return Object(j.jsxs)("div",{children:[n&&Object(j.jsx)("h2",{children:n}),c]})}var v=n(7),h=n.n(v);var O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{children:Object.keys(t).map((function(e){return Object(j.jsx)("button",{type:"button",className:h.a.item,onClick:function(){n(e)},children:"".concat(e)},e)}))})};function p(e){var t=e.options,n=e.total,c=void 0===n?0:n,i=e.positivePercentage,a=void 0===i?0:i;return Object(j.jsxs)("div",{children:[f(t),Object(j.jsxs)("p",{children:["Total: ",c]}),Object(j.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})}var f=function(e){return Object.keys(e).map((function(t){return Object(j.jsxs)("p",{children:[t,": ",e[t]]},t)}))};function k(e){var t=e.message,n=void 0===t?"":t;return Object(j.jsx)("div",{children:n})}var x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t>0?Math.round(e.state.good/t*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback();return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(O,{options:this.state,onLeaveFeedback:this.addFeedback})}),Object(j.jsx)(l,{title:"Statistics",children:e>0?Object(j.jsx)(p,{options:this.state,total:e,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(k,{message:"No feedback given"})})]})}}]),n}(c.Component);o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={item:"FeedbackOptions_item__1hVW1"}}},[[16,1,2]]]);
//# sourceMappingURL=main.938d25c7.chunk.js.map