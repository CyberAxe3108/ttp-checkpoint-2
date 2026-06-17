// ============================================================
// PART 4 — State and Events
//
// useState is already imported at the top — you will need it for every section.
//
// How to verify your work:
//   Make sure "npm run dev" is still running.
//   Save this file and interact with your components in the browser.
//   State means the component updates when something changes —
//   the page should reflect those changes without a full refresh.
//
// Instructions:
//   - Complete each section in order
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================

import { useState } from 'react'


// ------------------------------------------------------------
// A NOTE ON EVENTS
//
// An event is something the user does — clicking a button, typing in a box,
// submitting a form. The browser detects these actions and fires an event.
//
// In React, you respond to events by passing a function directly onto a JSX element.
// That function runs automatically whenever the event fires.
//
// JSX elements have special attributes for this — one for clicks, one for typing,
// and so on. Each attribute takes a function as its value.
// You do not call the function yourself — you hand it over, and React calls it.
// ------------------------------------------------------------


// ------------------------------------------------------------
// SECTION A — useState Basics
//
// Why we learn this:
//   A regular variable resets to its original value every time a component re-renders.
//   State is different — React holds onto it between renders
//   and updates the page automatically when it changes.
//
//   useState is the tool that gives a component its own memory.
// ------------------------------------------------------------

function Counter() {
  // A1.
  // Declare a state variable called count with an initial value of 0.
  //
  // Why: useState gives you two things — the current value, and a function
  //      to update it. When you call the update function, React re-renders
  //      the component and shows the new value on the page.

  // A2.
  // Add a button that says "Add 1".
  // When clicked, it should increase count by 1.

  // A3.
  // Add a second button that says "Reset".
  // When clicked, it should set count back to 0.
  //
  // Test it: click "Add 1" several times, then click "Reset".

  return (
    <div>
      {/* A1: remove the hardcoded 0 with the state */}
      <h3>Count: 0</h3>
      {/* A2: Add 1 button */}

      {/* A3: Reset button */}

    </div>
  )
}

function SectionA() {
  // EXPLAIN: What is state?
  //          How is a state variable different from a regular variable?
  //          What happens on the page when you call the updater function?
  //
  //          answer:

  return (
    <div>
      <h2>Section A — useState</h2>
      <Counter />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION B — Controlled Inputs
//
// Why we learn this:
//   A controlled input means the value displayed in the input box
//   always comes from React state. Every keystroke updates state,
//   and the input re-renders with the new value. This gives you
//   access to whatever the user has typed — which is necessary
//   for forms, search boxes, filters, and most real-world UI.
// ------------------------------------------------------------

function NameInput() {
  // B1.
  // Declare a state variable called inputValue. Choose an appropriate initial value.

  // B2.
  // Add an input element.
  // Wire it up so that every keystroke updates the state variable.
  // The input's displayed value should always come from state — not from the browser.
  //
  // Why: The browser's event object gives you access to whatever is currently
  //      typed in the input. You use that to update state on every change.

  // B3.
  // Below the input, add a paragraph that displays what is currently in the state variable.
  // It should update in real time as you type.
  //
  // Test it: type something and watch the paragraph change.
  //
  // EXPLAIN: What is a controlled input?
  //          What would happen if the input's displayed value did not come from state?
  //
  //          answer:

  return (
    <div>
      {/* B2: input goes here */}

      {/* B3: display text goes here */}

    </div>
  )
}

function SectionB() {
  return (
    <div>
      <h2>Section B — Controlled Inputs</h2>
      <NameInput />
    </div>
  )
}


// ------------------------------------------------------------
// SECTION C — Conditional Rendering
//
// Why we learn this:
//   Not everything should appear on the screen at all times.
//   Conditional rendering lets you show or hide content based on state.
//   This is how alerts, dropdowns, modals, and toggled UI elements
//   work in React.
// ------------------------------------------------------------

function Toggle() {
  // C1.
  // Declare a state variable called isVisible with an initial value of false.

  // C2.
  // Add a button that toggles isVisible between true and false when clicked.
  // The button label should change based on the current state —
  // one label when the content is visible, a different label when it is not.
  //
  // Hint: you can use a variable above the return to decide what the label should be.

  // C3.
  // Below the button, render a paragraph that says "Now you see me!" —
  // but only when isVisible is true. Use the && operator to do this.
  //
  // Test it: clicking the button should show and hide the message.

  // C4.
  // Replace C3 with a ternary instead of &&.
  // When isVisible is false, show a paragraph that says "I am hidden." instead.
  // A ternary has three parts: a condition, a value if true, and a value if false.
  //
  // EXPLAIN: What does the && operator do in JSX?
  //          What is the difference between && and a ternary?
  //          When would you use one over the other?
  //
  //          answer:

  return (
    <div>
      {/* C2: button goes here */}

      {/* C3 / C4: conditional message goes here */}
      
    </div>
  )
}

function SectionC() {
  return (
    <div>
      <h2>Section C — Conditional Rendering</h2>
      <Toggle />
    </div>
  )
}


// ------------------------------------------------------------
// Do not edit below this line.
// ------------------------------------------------------------

function Part4() {
  return (
    <section>
      <h1>Part 4 — State and Events</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
      <hr />
      <SectionC />
    </section>
  )
}

export default Part4
