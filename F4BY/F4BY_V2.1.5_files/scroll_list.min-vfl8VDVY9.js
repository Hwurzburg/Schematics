define(["require","exports","tslib","react","react-dom","comments2/components/utils/animate_scroll"],function(e,t,n,o,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),i=n.__importStar(i);var s=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.listRef=null,t.setRef=function(e){t.listRef=e},t.scrollToElem=function(e){var n=i.findDOMNode(t);if(n){var o=n.getBoundingClientRect().top,s=e.getBoundingClientRect().top-o-16,l=n.scrollTop+s;return r.animateScroll({timing:r.Timing.QuadEaseOut,container:n,yPos:l,duration:600})}},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.onScroll&&this.listRef.addEventListener("scroll",this.props.onScroll),this.props.onWindowResize&&window.addEventListener("resize",this.props.onWindowResize)},t.prototype.componentWillUnmount=function(){this.props.onScroll&&this.listRef.removeEventListener("scroll",this.props.onScroll),this.props.onWindowResize&&window.removeEventListener("resize",this.props.onWindowResize)},t.prototype.render=function(){var e=this,t=this.props,i=t.children,r=(t.onWindowResize,n.__rest(t,["children","onWindowResize"]));return o.createElement("ul",Object.assign({},r,{ref:this.setRef}),o.Children.map(i,function(t){return o.cloneElement(t,{scrollToElem:e.scrollToElem})}))},t})(o.Component);t.ScrollList=s});
//# sourceMappingURL=scroll_list.min.js-vfllgEJ_H.map