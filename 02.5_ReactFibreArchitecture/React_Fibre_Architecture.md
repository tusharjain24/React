# REACT FIBRE

## Prerequisites

- **React Components, Elements, and Instances** - "Component" is often an overloaded term. A firm grasp of these terms is crucial.
- **Reconciliation** - A high-level description of React's reconciliation algorithm.
- **React Basic Theoretical Concepts** - A description of the conceptual model of React without implementation burden. Some of this may not make sense on first reading. That's okay, it will make more sense with time.
- **React Design Principles** - Pay special attention to the section on scheduling. It does a great job of explaining the why of React Fiber.

To know more about the above concepts [_CLICK HERE_](https://github.com/reactjs/react-basic)

## What is reconciliation?

- **Reconciliation:** It is a recursive algorithm used by react to reconsider what to update, what not to update, i.e., React uses this algorithm to differentiate one tree(DOM) from another (VDOM) to determine which part needs to be changed.

- **Update**: A change in the data used to render a React app. Usually the result of `setState`. Eventually results in re-render.

- The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment(done using `ReactDOM.render()`) — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via `setState`), a new tree is generated. The new tree is differentiated with the previous tree to compute which operations are needed to update the rendered app.

The key points are:

- Different component types are assumed to generate substantially different trees. React will not attempt to differentiate them, but rather replace the old tree completely.
- Differentiating of lists is performed using keys. Keys should be "stable, predictable, and unique."

## What actually is a Virtual DOM

In React, the Virtual DOM (VDOM) is a lightweight, in-memory representation of the actual DOM (Document Object Model). It's a JavaScript object that mirrors the structure of the real DOM, representing the UI of your application at a given point in time.

**Hydration:** It is a technique that to inject JavaScript into a static HTML web page to make it interactive and dynamic.

## What is Scheduling

- **Scheduling:** The process of determining when work should be performed.
- **work:** Any computations that must be performed. Work is usually the result of an update (e.g. `setState`).

The key points are:

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.
  React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber.

## What is React Fibre

- In React, React Fibre is an implementation of React's Core Algorithm. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- We use React Fibre to update the Virtual DOM.

- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

- _For Example:_ Suppose an element in DOM is network dependent (let's say a button) whose text is being updated and then from network call another update comes while the text inside the button is being updated the first time and another update come while being updated the second time. Then is there a way to wait for some time before updating the UI so that we can skip the intermidiate update? For this we use _REACT FIBRE_.

# Conclusion

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

To Know more about [**REACT FIBRE ARCHITECTURE**](https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file)
