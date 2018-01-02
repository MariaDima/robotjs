var robot = require('..');
var os = require('os');


describe('Mix', () => {
  //Increase delay to help test reliability.
  robot.setMouseDelay(100);

  it('Send Ctrl+Shift+Click.', function() {
	expect(() => robot.keyToggle('control', 'down')).not.toThrow();
	expect(() => robot.keyToggle('shift', 'down')).not.toThrow();
    expect(() => robot.mouseClick()).not.toThrow();
    expect(() => robot.keyToggle('control', 'up')).not.toThrow();
    expect(() => robot.keyToggle('shift', 'up')).not.toThrow();
  });

  it('Send Ctrl+Shift+Click using modifiers.', function() {
    var modifiers = []
    modifiers.push('shift')

	expect(() => robot.keyToggle("control", "down", modifiers)).not.toThrow();
	expect(() => robot.mouseClick()).not.toThrow();
    expect(() => robot.keyToggle("control", "up", modifiers)).not.toThrow();
  });
});