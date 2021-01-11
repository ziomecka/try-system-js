System.register("add-button.js", [], function($__export) {
  "use strict";
  function addButton() {
    var button = document.createElement('button');
    button.textContent = 'button';
    button.addEventListener('click', function() {
      return document.body.append('appended text ');
    });
    document.body.appendChild(button);
  }
  $__export("addButton", addButton);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("index.js", ["add-button.js"], function($__export) {
  "use strict";
  var addButton;
  return {
    setters: [function($__m) {
      addButton = $__m.addButton;
    }],
    execute: function() {
      $__export("addButton", addButton);
    }
  };
});
