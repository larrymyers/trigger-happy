(function() {
    
    function isIE() {
        var ua = navigator.userAgent;
        
        if (ua.toLowerCase().indexOf('msie') > -1) {
            return true;
        }
        
        return false;
    }
    
    function setButton(buttonStr) {
        buttonStr = buttonStr ? buttonStr.toLowerCase() : 'left';
        
        if (buttonStr === 'right') {
            return 2;
        }
        
        if (buttonStr === 'middle') {
            return isIE() ? 4 : 1 
        }
        
        return isIE() ? 1 : 0;
    }
    
    window.Trigger = {
        /**
         * Fires a mouse event on a DOM element.
         */
        mouse: function(elt, evtName, options) {
            var evt = document.createEvent("MouseEvents"),
                options = options || {},
                keys = options.keys ? options.keys.join(' ') : "",
                ctrlKey = keys.indexOf('ctrl') > -1 ? true : false,
                altKey = keys.indexOf('alt') > -1 ? true : false,
                shiftKey = keys.indexOf('shift') > -1 ? true : false,
                metaKey = keys.indexOf('meta') > -1 ? true : false,
                button = setButton(options.button);
            
            evt.initMouseEvent(evtName, true, true, window, 0, 0, 0, 0, 0, ctrlKey, altKey, shiftKey, metaKey, button, null);
            elt.dispatchEvent(evt);
        }
    };
})();