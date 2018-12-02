var require = meteorInstall({"client":{"main.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.html                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.link("./template.main.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.main.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n\n  "), Spacebars.include(view.lookupTemplate("hello")), "\n  ", Spacebars.include(view.lookupTemplate("info")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("hello");
Template["hello"] = new Template("Template.hello", (function() {
  var view = this;
  return [ HTML.Raw("<button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));
  }), " times.") ];
}));

Template.__checkName("info");
Template["info"] = new Template("Template.info", (function() {
  var view = this;
  return HTML.Raw('<h2>Learn Meteor!</h2>\n  <ul>\n    <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>\n    <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>\n    <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>\n    <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>\n  </ul>');
}));

///////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 1);
module.link("./main.html");
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }

});
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }

});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");