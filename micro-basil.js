(function(glob, app, undef) {

    var pub = {};
      glob.b = pub; // glob is the global scope


      // welcome();

      // -- init internal state vars --
      startTime = Date.now();
      var runSetup = function() {
        app.doScript(function() {
          if (typeof glob.setup === "function") {
            glob.setup();
          }
        }, ScriptLanguage.javascript, undef, UndoModes.ENTIRE_SCRIPT, pub.SCRIPTNAME);
      };

      // var runDrawOnce = function() {
      //   app.doScript(function() {
      //     if (typeof glob.draw === "function") {
      //       glob.draw();
      //     }
      //   }, ScriptLanguage.javascript, undef, UndoModes.ENTIRE_SCRIPT, pub.SCRIPTNAME);
      // };

    // pub.go = function (mode) {
      // if (!mode) {
      //   mode = pub.DEFAULTMODE;
      // }
      // app.scriptPreferences.enableRedraw = (mode == pub.MODEVISIBLE || mode == pub.MODEHIDDEN);
      // app.preflightOptions.preflightOff = true;

      // currentDoc(mode);
      // if (mode == pub.MODEHIDDEN || mode == pub.MODESILENT) {
      //   progressPanel = new Progress();
      // }

      pub.println = function println(msg){
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
