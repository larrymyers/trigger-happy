(function() {
    
    window.Trigger = {
        fire: function(elt, evtName, options) {
            var evt = document.createEvent("MouseEvents");
            
            evt.initMouseEvent(evtName, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elt.dispatchEvent(evt);
        }
    };
})();