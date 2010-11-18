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
         * Triggers a mouse event on a DOM element. 
         * 
         * If no event name is provided, it will default to 'click'.
         *
         * If no options are provided, it defaults to no modifier keys, one click of the
         * left button, positioned on the top left corner of the target element.
         *
         * elt - The DOM element to trigger the mouse event on (required).
         * evtName - Optional W3C style event name (ex: click, dblclick, mousedown).
         * options - An optional object that contains the configuration options for the event.
         *   keys: {Array} string values representing key modifiers: 'ctrl', 'alt', 'shift', 'meta'.
         *   button: {String} which mouse button triggered the event: 'left', 'middle', 'right'.
         *   clickCount: {Number} the number of button clicks that triggered the event.
         *   relPosition: {Array} two element array that contains the x,y position of the event,
         *                relative to the element the event is triggered on.
         *   absPosition: {Array} two element array that contains the x,y position of the event,
         *                relative to the browser window. Takes precedence over relPosition.
         */
        mouse: function(elt, evtName, options) {
            var evt = document.createEvent("MouseEvents"),
                options = options || {},
                evtName = evtName || 'click',
                keys = options.keys ? options.keys.join(' ') : "",
                ctrlKey = keys.indexOf('ctrl') > -1 ? true : false,
                altKey = keys.indexOf('alt') > -1 ? true : false,
                shiftKey = keys.indexOf('shift') > -1 ? true : false,
                metaKey = keys.indexOf('meta') > -1 ? true : false,
                button = setButton(options.button),
                detail = options.clickCount || 0;
            
            evt.initMouseEvent(evtName, true, true, window, detail, 0, 0, 0, 0, ctrlKey, altKey, shiftKey, metaKey, button, null);
            elt.dispatchEvent(evt);
        }
    };
})();