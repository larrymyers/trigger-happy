# Trigger Happy

Trigger Happy is a cross browser javascript library for programmatically triggering events on
DOM elements, simulating user interaction. It was developed specifically with automated testing in mind,
and was inspired by the author's frustrations with using selenium to test client side code.

Currently this library has been tested in:

* IE 8
* IE 9
* Firefox 3.6+
* Chrome 7+
* Safari 5+

## How to Use

Include the trigger_happy.js script in the page, which will add a Trigger object to the
global namespace. From there you can use it to simulate both mouse and keyboard events
on the page.

## Example

To click on a link with the id 'foo':

Trigger.mouse(document.getElementById('foo'), 'click');

To right click on the body element of the page:

Trigger.mouse(document.body, 'click', { button: 'right' });

To type a capital letter 'A' on the first input field on the page:

Trigger.key(document.getElementsByTagName('input')[0], 'keypress', { keyCode: 65, keys: ['shift'] });
