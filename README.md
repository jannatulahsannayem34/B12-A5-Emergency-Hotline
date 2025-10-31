1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer :
use of getElementById ---> when i need one unique element and it is a single element
use of getElementsByClassName ---> for multiple elements having same class and it is a HTML COLLECTION 
use of querySelector / querySelectorAll ---> when i need css selector and here querySelector is a single element and querySelectorAll is a nodeList


2. How do you **create and insert a new element into the DOM**?
Answer : First i have to use document.createElement() then i have to take the tag name and then innerText something at last appendChild() it 

3. What is **Event Bubbling** and how does it work?
answer :Event Bubbling is a JavaScript event propagation method where an event starts from the innermost element (the target) and bubbles up to its parent elements in the DOM hierarchy. It allows parent elements to respond to events triggered on their child elements.


4. What is **Event Delegation** in JavaScript? Why is it useful?
answer : Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple child elements. The parent listens for events that bubble up from its children and handles them based on the event target.
Why it’s useful:
Reduces memory usage by using fewer event listeners.
Automatically works for dynamically added elements.
Simplifies code management for multiple similar elements.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer : preventDefault() → Stops the default browser behavior of an element.
stopPropagation() → Stops the event from bubbling or capturing to parent or ancestor elements.
