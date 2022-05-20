import React from 'react'

const Interview = () => {
  return (
    <div>
      <button>
        <Link href="https://www.javatpoint.com/es6-interview-questions" />
      </button>
      <p>
        1) What is ES6 or ECMAScript 2015? ES6 was released in June 2015, which
        is stated as the sixth edition of the language. Initially, it was named
        ES6 and later renamed to ECMAScript 2015. This edition includes several
        new features that are modules, iterators, class, arrow functions,
        for...of loop, promises, and many more. Brendan Eich developed it.
      </p>
      <p>
        2) Define ECMAScript. It is the specification that is defined in the
        ECMA-262 standard to create a general-purpose scripting language.
      </p>
      <p>
        3) What are the new features introduced in ES6? Let and const keywords.
        Default Parameters. Arrow functions. Template Literals. Object Literals.
        Rest and spread operators. Destructuring assignment. Modules, Classes,
        Generators, and iterators. Promises, and many more.
      </p>
      <p>
        4) Define let and const keywords. let: The variables declared using let
        keyword will be mutable, i.e., the values of the variable can be
        changed. It is similar to var keyword except that it provides block
        scoping. const: The variables declared using the const keyword are
        immutable and block-scoped. The value of the variables cannot be changed
        or re-assigned if they are declared by using the const keyword.
      </p>
      <p>
        5) What is the arrow function, and how to create it? Arrow functions are
        introduced in ES6. Arrow functions are the shorthand notation to write
        ES6 functions. The definition of the arrow function consists of
        parameters, followed by an arrow, and the body of the function. An Arrow
        function is also called as 'fat arrow' function. We cannot use them as
        constructors.
      </p>
      <p>
        6) Give an example of an Arrow function in ES6? List down its
        advantages. Arrow function provides us a more accurate way of writing
        the functions in JavaScript. They allow us to write smaller function
        syntax. The context within the arrow functions is lexically or
        statically scoped. Arrow functions do not include any prototype
        property, and cannot be used with the new keyword.
      </p>
      <p>
        Advantages of Arrow Function It reduces code size. The return statement
        is optional for a single line function. Lexically bind the context.
        Functional braces are optional for a single-line statement.
      </p>
      <p>
        7) Discuss spread operator in ES6 with an example. The spread operator
        is represented by three dots (...) to obtain the list of parameters. It
        allows the expansion of an iterable such as array or string in places
        where more than zero arguments are expected. The spread operator syntax
        is similar to the rest operator, but functionality is entirely opposite
        to it. It is also used to combine or to perform the concatenation
        between arrays. Let's understand it by an example.
      </p>
      <p>
        8) Discuss the Rest parameter in ES6 with an example.It is introduced in
        ES6 that improves the ability to handle the parameters. With rest
        parameters, it is possible to represent indefinite parameters as an
        array. By using the rest parameter, we can call a function with any
        number of arguments.
      </p>
      <p>
        9) What are the template literals in ES6? Template literals are a new
        feature introduced in ES6. It provides an easy way of creating multiline
        strings and perform string interpolation. Template literals allow
        embedded expressions and also called as string literals. Prior to ES6,
        template literals were referred to as template strings. Template
        literals are enclosed by the backtick (` `) character. Placeholders in
        template literals are represented by the dollar sign and the curly
        braces (${expression}). If we require to use an expression within the
        backticks, then we can place that expression in the (${expression}).
      </p>
      <p>
        10) Discuss Destructuring Assignment in ES6. Destructuring is introduced
        in ECMAScript 2015 or ES6 to extract data from objects and arrays into
        separate variables. It allows us to extract smaller fragments from
        objects and arrays.
      </p>
      <p>
        11) How to create a class in ES6? This keyword is used for creating the
        class. We can include the classes in our code either by using class
        expression or by class declaration. A class definition can only include
        functions and constructors. These components are together called as data
        members of the class. Constructors in classes allocate the memory to the
        objects of the class. Functions in a class are responsible for
        performing the actions to the objects.
      </p>
      <p>
        12) What do you understand by Generator function? A generator provides
        us a new way to work with iterators and functions. The generator is a
        special kind of function that may be paused in the middle either one or
        many times and can be resumed later. The declaration function* (function
        keyword followed by an asterisk) is used to define a generator function.
        When the generator gets called, it does not run its code. Instead, it
        returns a special object, which is called a Generator object to manage
        the execution. Let us see an example of generators in ES6.
      </p>
      <p>
        13) What are the default parameters? By using the default parameters, we
        can initialize named parameters with default values if there is no value
        or undefined is passed
      </p>
      <p>
        14) What do you mean by IIFE (Immediately invoked function expressions)?
        IIFE is a function in JavaScript that runs as soon as it is defined. It
        is also called as the Self-Executing Anonymous Function. It includes two
        major parts that are as follows: The first part is an anonymous function
        that has a lexical scope (static scope), which is enclosed within the
        Grouping operator (). The second part creates the IIFE by which the
        JavaScript engine will interpret the function directly.
      </p>
      <p>
        5) Discuss the for...in loop. It is similar to for loop that iterates
        through the properties of an object. It is useful when we require to
        visit the properties or keys of the object.
      </p>
      <p>
        16) Discuss the for...of loop. This loop is used for iterating the
        iterables (arrays, string, etc.).
      </p>
      <p>
        17) Define set. A set is a data structure that allows us to create a
        collection of unique values. It is a collection of values that are
        similar to arrays, but it does not include any duplicates. It supports
        both object references and primitive values.
      </p>
      <p>
        18) Define Map. Prior to ES6, when we require the mapping of keys and
        values, we often use an object. Map object is a new collection type,
        which is introduced in ES6. It holds the key-value pairs in which any
        type of values can be used as either keys or values. A map object always
        remembers the actual insertion order of the keys. Maps are ordered, so
        they traverse the elements in their insertion order.
      </p>
      <p>
        19) What do you understand by Weakset? Using weakset, it is possible to
        store weakly held objects in a collection. As similar to set, weakset
        cannot store duplicate values. Weakset cannot be iterated. Weakset only
        includes add(value), delete(value) and has(value) methods of the set
        object.
      </p>
      <p>
        20) What do you understand by Weakmap? Weak maps are almost similar to
        maps, but the keys in weak maps must be objects. It stores each element
        as a key-value pair where keys are weakly referenced. Here, the keys are
        objects, and the values are arbitrary. A weak map object iterates the
        element in their insertion order. It only includes delete(key),
        get(key), has(key) and set(key, value) method.
      </p>
      <p>
        21) Explain Promises in ES6. ES6 promises are the easiest way to work
        with asynchronous programming in JavaScript. Asynchronous programming
        includes running of processes individually from the main thread, and it
        notifies the main thread when it gets complete. Prior to ES6, there is
        the use of Callbacks for performing asynchronous programming. Promises
        are used to overcome the problem of Callback hell.
      </p>
      <p>
        22) What are the states of promises in ES6? Promises have mainly three
        states that are as follows: Pending: It is the initial state of every
        promise. It represents that the result has not been computed yet.
        Fulfilled: It represents the completion of an operation. Rejected: It
        represents the failure that occurs during computation. Once the promise
        is fulfilled or rejected, then it will be immutable. The Promise()
        constructor takes two arguments that are rejected function and a resolve
        function. Based on the asynchronous operation, it returns either the
        first argument or the second argument.
      </p>
      <p>
        23) What do you understand by Callback and Callback hell in JavaScript?
        Callback: It is used to handle the execution of function after the
        completion of the execution of another function. A callback would be
        helpful in working with events. In the callback, a function can be
        passed as an argument to another function. It is a great way when we are
        dealing with basic cases such as minimal asynchronous operations.
        Callback hell: When we develop a web application that includes a lot of
        code, then working with callback is messy. This excessive Callback
        nesting is often referred to as Callback hell.
      </p>
      <p>
        24) List the comparisons between ES5 and ES6. ES5 and ES6 are similar in
        their nature, but there are some differences between them. The
        comparison between ES5 and ES6 are tabulated as follows:
      </p>
      <p>
        25) Define Modules in JavaScript. Modules are the piece of JavaScript
        code written in a file. By using Modules, it is easy to maintain the
        code, debug the code, and reuse the code. Each module is a piece of code
        that gets executed once it is loaded.
      </p>
      <p>
        26) What do you understand by the term Hoisting in JavaScript? It is a
        JavaScript's default behavior, which is used to move all the
        declarations at the top of the scope before the execution of code. It
        can be applied to functions as well as on variables. It allows the
        JavaScript to use the component before its declaration. It does not
        apply to scripts that run in strict mode.
      </p>
      <p>
        27) List the new Array methods introduced in ES6? There are many array
        methods available in ES6, which are listed below: Array.of()
        Array.from() Array.prototype.copyWithin() Array.prototype.find()
        Array.prototype.findIndex() Array.prototype.entries()
        Array.prototype.keys() Array.prototype.values() Array.prototype.fill()
      </p>
      <p>
        28) What are the new String methods introduced in ES6? There are four
        string methods introduced in ES6 that are listed as follows:
        string.startsWith() string.endsWith() string.includes() string.repeat()
      </p>
      <p>
        29) Define Babel. Babel is one of the popular transpilers of JavaScript.
        It is mainly used for converting the ES6 plus code into the
        backward-compatible version of JavaScript that can be run by previous
        JavaScript engines.
      </p>
      <p>
        30) Define Webpack. It is an open-source JavaScript module bundler that
        takes modules with dependencies. It allows us to run an environment that
        hosts Babel.
      </p>
      <div>
        <button>
          <Link href="https://www.bestinterviewquestion.com/es6-interview-questions" />
        </button>
        <p>
          4. Explain the motivation behind Symbols to ES6. Symbols are a
          particular kind of object, newly added in the sixth version of
          ECMAScript which can be used as a unique property name in the objects.
          Using Symbol in the place of String (as it was done in the previous
          versions) allows the programmer to use different modules that can
          create properties that will not be problematic to each other. Another
          huge benefit of Symbols is that they can be made private and the
          properties defined cannot be accessed by any user or developer who
          does not have direct access to the Symbol. They comprise of a function
          that can be used to create different symbols that can work
          differently. But they do not have any literal syntax, unlike the other
          primitives of JavaScript.
        </p>
        <p>
          6. Differentiate between ES6 class and ES5 function constructors. ES6
          class ES5 Function Constructors ES6 class basically does the work of
          defining a new object and appending functions to its prototype. ES5
          Function constructors work and look the same but the main difference
          is observed when the developer uses the Inheritance property. They can
          be considered as the syntax base for constructor functions. These can
          only be executed with the help of a new operator. ES6 class allows the
          developers to instantiate objects using the new operator. ES5 function
          constructors focus on how the objects are instantiated. They also
          ensure the developer that this keyword which is basically used inside
          the class only refers to the object that is being created by the
          developer. ES5 function constructor focus on implementing the reusable
          object creation code. Any function can be used as a constructor.
        </p>
        <p>
          7. Differentiate between .call and .apply. .call .apply .call is used
          to invoke the functions, and the first parameter will become the value
          of this within the function created by the developer. .apply is also
          used to invoke the functions but it takes an array of arguments. This
          array works as the next argument and the function works this way.
          .call is used to call the method which takes the owner object as its
          argument. .apply method is used to write methods. These methods can be
          used on several objects. It accepts two parameters namely
          objectInstance and arguments It accepts two parameters namely
          objectInstance and arrayofArguments .call takes several arguments
          separated by commas. .apply takes several arguments with the help of
          an array of arguments.
        </p>
        <p>
          8. Explain the reason for using ES6 classes. ES6 classes have been
          found to be very useful to the developers. Some of the major uses of
          ES6 classes are as follows: ES6 classes have a simpler and less
          error-prone syntax. As far as setting up inheritance hierarchies are
          concerned, ES6 is considered as the best option as it uses new syntax
          with the old syntax which minimizes the errors and eases the process.
          ES6 classes help in defending the developers from failing to use new
          ones properly with the constructor function. This is one of the most
          common errors that occur with the developers during the use of a new
          operator. Classes remove this error by having the constructor throw an
          exception if this proves to be an invalid object for the constructor.
          Classes also help to call the method which is of the prototype’s
          version. This version is much simpler with the new ES6 syntax than the
          old versions.
        </p>
        <p>
          10. Define Temporal Dead Zone in ES6. The temporal dead zone can be
          defined as the time span which exists between the time taken for
          binding of a variable and its declaration in a program. The temporal
          dead zone exists so that program errors can be easily identified as a
          variable that can be made accessible before its declaration. Also for
          making const work properly, the temporal dead zone can be used. It is
          also used to proof guard JavaScript which is basically a mechanism
          used for runtime.
        </p>
        <p>
          11. What is spread, default and rest parameter? Spread Operator-
          Donated by ‘...’ and is followed by the variable. The syntax of the
          spread operator would look like this for example:- ‘...X’. Spread
          operators manipulated objects and arrays which is the prime reason it
          is used in ES6. It is used for copying the property of one object to
          another. Default Operator- In order to initialize a function using
          default values, the default operator is deployed. The parameter’s
          value can be anything- a number or a function or null. Rest Parameter-
          This operator is used for recovering all the arguments that are
          required to invoke a function. This allows us to put items belonging
          to different categories separate. The rest parameter allows combining
          the parameters in a common array parameter.
        </p>
        <p>
          13. What is the advantage of using Webpack? Webpack allows you to
          create a pile of the javascript files that are usable in the browser.
          With Webpack, we can build the dependency graph, do application
          processing. With the dependency graph, one can map every module of the
          project. This helps in matching up with project requirement It helps
          in making a bundle of the project modules into a single javascript
          file. Webpack combined the Dev server which helps in updating the code
          and asset management.
        </p>
        <p>
          14. What are the classes and proxies? Class- You can use the patterns
          easily with OOP based class declaration. It works readily with
          constructors, supports base class access, inheritance and static
          methods. OOP refers to Object-Oriented Programming. Proxies- With
          proxies, you get to create objects and you can host the objects with a
          huge behavior diversity. Proxies can help in profiling and logging as
          well.
        </p>
        <p>
          15. What are constants? You can call the immutable variables as
          constants. The value of a constant once defined remains the same and
          we cannot change it. This is the value that you introduce during the
          declaration. For example, const Y= 6.0. This value of Y would continue
          to be 6 throughout and it won’t be changed.
        </p>
      </div>
      <div>
        <button>
          <Link href="https://www.fullstacktutorials.com/interviews/javascript-es6-interview-questions-11.html" />
        </button>
        <p>
          Object.freeze() Object.freeze works on values and it makes an object
          immutable. Object.freeze() takes an object as an argument and returns
          the same object as an immutable object. Once you have frozen the
          object you cannot change, add or delete object's properties, but you
          can assign another instance.
        </p>
        <p>
          4. Object literals: A JavaScript object literal is a comma-separated
          list of name-value pairs wrapped in curly braces.
        </p>
        <p>
          8. Class In ES6: In ES6, JavaScript classes provide the following
          advantage over prototype based. Syntactic sugar - follow OOP Approach
          (extends etc). Inheritance - JS class inheritance is still
          prototype-based under the hood. It has Static methods - which are
          called on the class itself only.
        </p>
        <p>
          Q:- List some new features in ES7 (ECMAScript 2016)? New Features in
          ES7: Array.prototype.includes() Exponentiation operator
        </p>
        <p>
          Q:- List some new features in ES8 (ECMAScript 2017)? New Features in
          ES8: Async/Await Padstart and Padend functions
        </p>
        <p></p>
        <div>
          <button>
            <Link href="https://www.fullstack.cafe/blog/javascript-tricky-interview-questions" />
          </button>
          <p>
            Q2: Explain the difference between Object.freeze() vs const Mid Top
            179 JavaScript Interview Questions JavaScript 179 Answer const and
            Object.freeze are two completely different things. const applies to
            bindings ("variables"). It creates an immutable binding, i.e. you
            cannot assign a new value to the binding. Object.freeze works on
            values, and more specifically, object values. It makes an object
            immutable, i.e. you cannot change its properties.
          </p>
          <p>
            Explain the differences on the usage of foo between function foo(){' '}
            {} and var foo = function() {}
            The former is a function declaration while the latter is a function
            expression. The key difference is that function declarations have
            its body hoisted but the bodies of function expressions are not
            (they have the same hoisting behavior as variables). If you try to
            invoke a function expression before it is defined, you will get an
            Uncaught TypeError: XXX is not a function error.
          </p>
          <p>
            How would you use a closure to create a private counter? You can
            create a function within an outer function (a closure) that allows
            you to update a private variable but the variable wouldn't be
            accessible from outside the function without the use of a helper
            function.
          </p>
          <p>
            Provide some examples of non-bulean value coercion to a boolean one.
            The question is when a non-boolean value is coerced to a boolean,
            does it become true or false, respectively? The specific list of
            "falsy" values in JavaScript is as follows:
            {/* "" (empty string)
            0, -0, NaN (invalid number)
            null, undefined
            false
            Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

            "hello"
            42
            true
            [ ], [ 1, "2", 3 ] (arrays)
            { }, { a: 42 } (objects)
            function foo() { .. } (functions) */}
          </p>
          <p>
            Q8: What is Currying? Currying is when you break down a function
            that takes multiple arguments into a series of functions that take
            part of the arguments. Here's an example in JavaScript:
          </p>
          <p>
            Q10: What is the definition of a Higher-Order Function? A
            higher-order function is any function that takes one or more
            functions as arguments, which it uses to operate on some data,
            and/or returns a function as a result. Higher-order functions are
            meant to abstract some operation that is performed repeatedly. The
            classic example of this is map, which takes an array and a function
            as arguments. map then uses this function to transform each item in
            the array, returning a new array with the transformed data. Other
            popular examples in JavaScript are forEach, filter, and reduce. A
            higher-order function doesn't just need to be manipulating arrays as
            there are many use cases for returning a function from another
            function. Function.prototype.bind is one such example in JavaScript.
          </p>
          <p>What is the difference between Anonymous and Named functions?</p>
          <div>
            var foo = function(){' '}
            {
              // anonymous function assigned to variable foo
              // ..
            }
            ; var x = function bar()
            {
              // named function (bar) assigned to variable x
              // ..
            }
            ; foo(); // actual function execution x();
          </div>
          <p>
            What is the drawback of creating true private in JavaScript? One of
            the drawback of creating a true private method in JavaScript is that
            they are very memory inefficient because a new copy of the method
            would be created for each instance.
          </p>
          <p>
            Q13: What's a typical use case for anonymous functions? They can be
            used in IIFEs to encapsulate some code within a local scope so that
            variables declared in it do not leak to the global scope.
            <br />
            As a callback that is used once and does not need to be used
            anywhere else. The code will seem more self-contained and readable
            when handlers are defined right inside the code calling them, rather
            than having to search elsewhere to find the function body.
            <br />
            Arguments to functional programming constructs or Lodash (similar to
            callbacks).
          </p>

          <div>
            <button>
              <Link />
            </button>
            <p>
              1. Can you name two programming paradigms important for JavaScript
              app developers? JavaScript is a multi-paradigm language,
              supporting imperative/procedural programming along with OOP
              (Object-Oriented Programming) and functional programming.
              JavaScript supports OOP with prototypal inheritance. Good to hear:
              Prototypal inheritance (also: prototypes, OLOO). Functional
              programming (also: closures, first class functions, lambdas).
            </p>
            <p>
              2. What is functional programming? Functional programming produces
              programs by composing mathematical functions and avoids shared
              state & mutable data. Lisp (specified in 1958) was among the first
              languages to support functional programming, and was heavily
              inspired by lambda calculus. Lisp and many Lisp family languages
              are still in common use today. Functional programming is an
              essential concept in JavaScript (one of the two pillars of
              JavaScript). Several common functional utilities were added to
              JavaScript in ES5. Good to hear: Pure functions / function purity.
              Avoid side-effects. Simple function composition. Examples of
              functional languages: Lisp, ML, Haskell, Erlang, Clojure, Elm, F
              Sharp, OCaml, etc… Mention of features that support FP:
              first-class functions, higher order functions, functions as
              arguments/values.
            </p>
            <p>
              3. What is the difference between classical inheritance and
              prototypal inheritance? Class Inheritance: instances inherit from
              classes (like a blueprint — a description of the class), and
              create sub-class relationships: hierarchical class taxonomies.
              Instances are typically instantiated via constructor functions
              with the `new` keyword. Class inheritance may or may not use the
              `class` keyword from ES6. Prototypal Inheritance: instances
              inherit directly from other objects. Instances are typically
              instantiated via factory functions or `Object.create()`. Instances
              may be composed from many different objects, allowing for easy
              selective inheritance. In JavaScript, prototypal inheritance is
              simpler & more flexible than class inheritance. Good to hear:
              Classes: create tight coupling or hierarchies/taxonomies.
              Prototypes: mentions of concatenative inheritance, prototype
              delegation, functional inheritance, object composition.
            </p>
            <p>
              4. What are the pros and cons of functional programming vs
              object-oriented programming? OOP Pros: It’s easy to understand the
              basic concept of objects and easy to interpret the meaning of
              method calls. OOP tends to use an imperative style rather than a
              declarative style, which reads like a straight-forward set of
              instructions for the computer to follow.
              <br />
              OOP Cons: OOP Typically depends on shared state. Objects and
              behaviors are typically tacked together on the same entity, which
              may be accessed at random by any number of functions with
              non-deterministic order, which may lead to undesirable behavior
              such as race conditions.
              <br />
              FP Pros: Using the functional paradigm, programmers avoid any
              shared state or side-effects, which eliminates bugs caused by
              multiple functions competing for the same resources. With features
              such as the availability of point-free style (aka tacit
              programming), functions tend to be radically simplified and easily
              recomposed for more generally reusable code compared to OOP.
              <br />
              FP also tends to favor declarative and denotational styles, which
              do not spell out step-by-step instructions for operations, but
              instead concentrate on what to do, letting the underlying
              functions take care of the how. This leaves tremendous latitude
              for refactoring and performance optimization, even allowing you to
              replace entire algorithms with more efficient ones with very
              little code change. (e.g., memoize, or use lazy evaluation in
              place of eager evaluation.)
              <br />
              Computation that makes use of pure functions is also easy to scale
              across multiple processors, or across distributed computing
              clusters without fear of threading resource conflicts, race
              conditions, etc…
              <br />
              FP Cons: Over exploitation of FP features such as point-free style
              and large compositions can potentially reduce readability because
              the resulting code is often more abstractly specified, more terse,
              and less concrete.
              <br />
              More people are familiar with OO and imperative programming than
              functional programming, so even common idioms in functional
              programming can be confusing to new team members.
              <br />
              FP has a much steeper learning curve than OOP because the broad
              popularity of OOP has allowed the language and learning materials
              of OOP to become more conversational, whereas the language of FP
              tends to be much more academic and formal. FP concepts are
              frequently written about using idioms and notations from lambda
              calculus, algebras, and category theory, all of which requires a
              prior knowledge foundation in those domains to be understood.
              <br />
              Good to hear:
              <br />
              Mentions of trouble with shared state, different things competing
              for the same resources, etc… Awareness of FP’s capability to
              radically simplify many applications. Awareness of the differences
              in learning curves. Articulation of side-effects and how they
              impact program maintainability. Awareness that a highly functional
              codebase can have a steep learning curve. Awareness that a highly
              OOP codebase can be extremely resistant to change and very brittle
              compared to an equivalent FP codebase. Awareness that immutability
              gives rise to an extremely accessible and malleable program state
              history, allowing for the easy addition of features like infinite
              undo/redo, rewind/replay, time-travel debugging, and so on.
              Immutability can be achieved in either paradigm, but a
              proliferation of shared stateful objects complicates the
              implementation in OOP.
            </p>
            <p>
              5. When is classical inheritance an appropriate choice? The answer
              is never, or almost never. Certainly never more than one level.
              Multi-level class hierarchies are an anti-pattern. I’ve been
              issuing this challenge for years, and the only answers I’ve ever
              heard fall into one of several common misconceptions. More
              frequently, the challenge is met with silence.
            </p>
            <p>
              6. When is prototypal inheritance an appropriate choice? There is
              more than one type of prototypal inheritance:
              <br />
              Delegation (i.e., the prototype chain). Concatenative (i.e.
              mixins, `Object.assign()`). Functional (Not to be confused with
              functional programming. A function used to create a closure for
              private state/encapsulation). Each type of prototypal inheritance
              has its own set of use-cases, but all of them are equally useful
              in their ability to enable composition, which creates has-a or
              uses-a or can-do relationships as opposed to the is-a relationship
              created with class inheritance.
              <br />
              Good to hear: In situations where modules or functional
              programming don’t provide an obvious solution. When you need to
              compose objects from multiple sources. Any time you need
              inheritance.{' '}
            </p>
            <p>
              7. What does “favor object composition over class inheritance”
              mean? This is a quote from “Design Patterns: Elements of Reusable
              Object-Oriented Software”. It means that code reuse should be
              achieved by assembling smaller units of functionality into new
              objects instead of inheriting from classes and creating object
              taxonomies. In other words, use can-do, has-a, or uses-a
              relationships instead of is-a relationships.
            </p>
            <p>
              8. What are two-way data binding and one-way data flow, and how
              are they different? Two way data binding means that UI fields are
              bound to model data dynamically such that when a UI field changes,
              the model data changes with it and vice-versa. One way data flow
              means that the model is the single source of truth. Changes in the
              UI trigger messages that signal user intent to the model (or
              “store” in React). Only the model has the access to change the
              app’s state. The effect is that data always flows in a single
              direction, which makes it easier to understand. One way data flows
              are deterministic, whereas two-way binding can cause side-effects
              which are harder to follow and understand.
            </p>
            <p>
              9. What are the pros and cons of monolithic vs microservice
              architectures? A monolithic architecture means that your app is
              written as one cohesive unit of code whose components are designed
              to work together, sharing the same memory space and resources. A
              microservice architecture means that your app is made up of lots
              of smaller, independent applications capable of running in their
              own memory space and scaling independently from each other across
              potentially many separate machines.
              <br />
              Positive attitudes toward microservices, despite the higher
              initial cost vs monolthic apps. Aware that microservices tend to
              perform and scale better in the long run. Practical about
              microservices vs monolithic apps. Structure the app so that
              services are independent from each other at the code level, but
              easy to bundle together as a monolithic app in the beginning.
              Microservice overhead costs can be delayed until it becomes more
              practical to pay the price.
            </p>
            <p>
              10. What is asynchronous programming, and why is it important in
              JavaScript? <br />
              Synchronous programming means that, barring conditionals and
              function calls, code is executed sequentially from top-to-bottom,
              blocking on long-running tasks such as network requests and disk
              I/O. Asynchronous programming means that the engine runs in an
              event loop. When a blocking operation is needed, the request is
              started, and the code keeps running without blocking for the
              result. When the response is ready, an interrupt is fired, which
              causes an event handler to be run, where the control flow
              continues. In this way, a single program thread can handle many
              concurrent operations. User interfaces are asynchronous by nature,
              and spend most of their time waiting for user input to interrupt
              the event loop and trigger event handlers.
            </p>
          </div>
          <div>
            <button>
              <Link href="https://www.mygreatlearning.com/blog/es6-interview-questions/" />
            </button>
            <div>
              5. What is export default es6?
              <br />
              The export statement is used to export functions, objects, and
              variables, etc. to other JavaScript modules with the help of the
              import statement. There are two types of ways to export 1.) Named
              Export and 2.) Default Export Default Export is when we want to
              export any single, variable, function or object, etc. For Eg: In
              Test.js file var x1=10; export default x1; In Com.js file we want
              to import the x import y1 from ‘./Test.js’ here y1 is importing x1
              from Test.js
            </div>
            <div>
              8. What is Event propagation, capturing, bubbling?
              <br />
              When an event occurs on a DOM, that event does not entirely occur
              on one element. In the Bubbling Phase, the event bubbles up or it
              goes to its parent, to its grandparents, to its grandparent’s
              parent until it reaches all the way to the window while in the
              Capturing Phase the event starts from the window down to the
              element that triggered the event or the event target.
              <br />
              Event Propagation has three phases. Capturing Phase – the event
              starts from the window then goes down to every element until it
              reaches the target element. Target Phase – the event has reached
              the target element. Bubbling Phase – the event bubbles up from the
              target element then goes up every element until it reaches the
              window.
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interview
