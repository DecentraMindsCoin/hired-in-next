import React from 'react'

const ReactInterview = () => {
  return (
    <div>
      <button>
        <Link href="https://dev.to/frontendengineer/react-interview-questions-part-2-mid-senior-level-cal" />
      </button>
      <div>
        <div>
          <p>
            What are React Hooks? React Hooks are a new addition in React
            version 16.8. They let you use state and other React features
            without converting functional components to a class. Hooks does the
            same job with less code and with less code means less chances of
            producing bugs.
            <br />
            Basic Hooks useState returns a stateful value, and a function to
            update it.
            <br />
            useEffect lets us perform side effects in function components
            <br />
            useContext gives a simple function to access the data via value prop
            of the Context Provider in any child component
            <br />
            Additional Hooks useReducer state management like redux for managing
            state in smaller applications rather than having to reach for a
            third-party state management library
            <br />
            useCallback memoizes callback functions, so they not recreated on
            every re-render.
            <br />
            useMemo stores the results of expensive operations
            <br />
            useRef lets us perform side effects in function components
            <br />
            useImperativeHandle Used together with forwardRef which allows you
            to modify the ref instance that is exposed from parent components
            <br />
            useLayoutEffect this runs synchronously immediately after React has
            performed all DOM mutations
            <br />
            useDebugValue allows you to display additional, helpful information
            next to your custom Hooks, with optional formatting.
          </p>
        </div>

        <div>
          <p>
            What is context? Context provides a way to pass data through
            component tree without having to pass props down manually at every
            level.
            <br />
            It is designed to share data that can be considered global for a
            tree of React components.￼
            <br />
            Note: Apply it sparingly because it makes component reuse more
            difficult. Consider component composition as it is often a simpler
            solution than context.
            <br />
            How to pass data between components? To pass data from parent to
            child, use props To pass data from child to parent, use callbacks To
            pass data among siblings AND anywhere else use React’s Context API
            also use state management libraries for mid - big sized applications
            that are stateful. Example: Redux, MobX, and Recoil
          </p>
        </div>
        <div>
          What are some limitations of React. First, JSX can make the coding
          complex. It will have a steep learning curve for the beginners
          <br />
          Second, React documentation is not user friendly and thorough as it
          should be.
          <br />
          Third, every React project are unique to engineers as they will rely
          on numerous technologies to incorporate in their projects.
        </div>
        <div>
          <p>
            What is the use of dangerouslySetInnerHTML?
            <br />
            This property is React’s replacement for using innerHTML in the
            browser. It will render raw HTML in a component.
            <br />
            One should limit its use because it can expose users to potential
            cross-site scripting attacks.
          </p>
        </div>
        <div>
          Name a few techniques to optimize React app performance.
          <br /> First, Use React.Suspense and React.Lazy for Lazy Loading
          Components. This will only load component when it is needed.
          <br />
          Second, Use React.memo for Component Memoization React.memo is a
          higher order component that will render the component and memoizes the
          result. Before the next render, if the new props are the same, React
          reuses the memoized result skipping the next rendering
          <br />
          Third, Use React.Fragment to Avoid Adding Extra Nodes to the DOM React
          Fragments do not produce any extra elements in the DOM Fragment’s
          child components will be rendered without any wrapping DOM node.
          <br />
          Fourth, Use Reselect / Re-reselect in Redux to Avoid Frequent
          Re-render. Reselect is a library for building memoized selectors that
          is commonly used for redux.
        </div>
        <div>
          What is reconciliation? <br />
          When a component's props or state change, React decides whether an
          actual DOM update is necessary by comparing the newly returned element
          with the previously rendered one. When they are not equal, React will
          update the DOM. This process is called reconciliation.
        </div>
        <div>
          What are Higher-Order Components? <br /> A higher-order component
          (HOC) is an advanced technique in React for reusing component logic.
          It is a function that takes a component and returns a new component.
          const EnhancedComponent = higherOrderComponent(WrappedComponent); HOCs
          are common in third-party React libraries, such as Redux’s connect and
          Relay’s createFragmentContainer. HOC can be used for many use cases:
          Conditionally rendering components. Providing components with specific
          styles. Give other components any props. Showing a loader while a
          component waits for data
        </div>
        <div>
          What is children prop? <br />
          It is a prop that allow us to pass components as data to other
          components, just like any other prop. Component tree between the
          component's opening tag and closing tag will be passed to that
          component as children prop.
        </div>
        <div>
          How to pass a parameter to an event handler or callback?
          <br />
          You can use an arrow function to wrap around an event handler and pass
          parameters:
        </div>
      </div>
    </div>
  )
}

export default ReactInterview
