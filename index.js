// @include "node_modules/lodash.assign/index.js"

(function(glob, app, undef) {

  /**
   * @class b
   * @static
   */
  var pub = {};

  pub._setup = null;
  pub._draw = null;
  var init = function() {
    glob.b = pub;
    // -- init internal state vars --
  };
  var runSetup = function() {
    app.doScript(function() {
      if (typeof pub._setup === 'function') {
        pub._setup();
      }
    }, ScriptLanguage.javascript, undef, UndoModes.ENTIRE_SCRIPT);
  };
  var runDrawOnce = function() {
    app.doScript(function() {
      if (typeof pub._draw === 'function') {
        pub._draw();
      }
    }, ScriptLanguage.javascript, undef, UndoModes.ENTIRE_SCRIPT);
  };

  pub.foo = function() {
    $.writeln('hello from foo');
  };
  pub.go = function() {
    try {
      if (typeof glob.setup === 'function') {
        pub._setup = glob.setup;
        // glob.foo = pub.foo;
        setup.foo = pub.foo;
        // glob.setup.foo = pub.foo; // does not work

        // for(p in pub) {
        //   if (pub.hasOwnProperty(p)) {
        //     $.writeln('trying to add ' + p + ' to global scope of setup');
        //     glob.setup[p] = pub[p];
        //   }
        // }
        runSetup();
      }
      if (typeof glob.draw === 'function') {
        pub._draw = glob.draw;

        runDrawOnce();
      }
    } catch (e) {
      alert(e);
      exit();
    }
  };

  init();
})(this, app);



function setup() {
  $.writeln('setup');
  // b.foo(); // will work
  foo();
}


function draw() {
  $.writeln('draw');
}
b.go();
