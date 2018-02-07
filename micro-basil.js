(function(glob, app, undef) {

    var pub = {};
      // glob.b = pub; // glob is the global scope



      // -- init internal state vars --
      startTime = Date.now();
      var runSetup = function() {
        app.doScript(function() {
          if (typeof glob.setup === "function") {
            setup();
          }
        }, ScriptLanguage.javascript, undefined, UndoModes.ENTIRE_SCRIPT, pub.SCRIPTNAME);
      };

      var runDrawOnce = function() {
        app.doScript(function() {
          if (typeof glob.draw === "function") {
            draw();
          }
        }, ScriptLanguage.javascript, undefined, UndoModes.ENTIRE_SCRIPT, pub.SCRIPTNAME);
      };


      glob.println = function println(msg){
        $.writeln(msg);
      }
      try {
        if (typeof glob.setup === "function") {
          runSetup();
        }

        if (typeof glob.draw === "function") {
          runDrawOnce();
        }
      } catch (e) {
        alert(e);
        exit();
      }
      exit(); // quit program execution

  })(this, app);
