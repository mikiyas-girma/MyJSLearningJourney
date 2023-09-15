// Basic structure or template

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();


// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      // console.log(text);
    }
  }
})();

UICtrl.callChangeText();
// UICtrl.changeText();

console.log(UICtrl.text);