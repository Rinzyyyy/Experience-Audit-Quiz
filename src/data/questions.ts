export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  personalReflection: string;
  tag: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of: console.log(typeof [])?",
    options: ["array", "object", "list", "undefined"],
    correctAnswer: "object",
    personalReflection:
      "In JavaScript, arrays are technically specialized objects. This is a classic 'gotcha' that reminds us to use Array.isArray() for reliable type checking.",
    tag: "JavaScript",
  },
  {
    id: 2,
    question:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "let",
    personalReflection:
      "Switching from var to let/const was a turning point for JS stability, helping prevent those frustrating variable hoisting bugs.",
    tag: "JavaScript",
  },
  {
    id: 3,
    question:
      "In the Event Loop, which queue has higher priority: the Task Queue (Macrotasks) or the Microtask Queue?",
    options: [
      "Task Queue",
      "Microtask Queue",
      "They have equal priority",
      "It depends on the browser",
    ],
    correctAnswer: "Microtask Queue",
    personalReflection:
      "The Event Loop processes all available microtasks (like Promises) before moving to the next macrotask (like setTimeout). This is why Promise.resolve() finishes before a 0ms timer!",
    tag: "JavaScript",
  },
  {
    id: 4,
    question: "What is 'Temporal Dead Zone' in JavaScript?",
    options: [
      "The time between a function call and execution",
      "The period between variable hoisting and initialization",
      "A state where the Event Loop stops",
      "The time it takes for a Promise to reject",
    ],
    correctAnswer: "The period between variable hoisting and initialization",
    personalReflection:
      "Even though let and const are hoisted, accessing them before their definition throws a ReferenceError. It forces cleaner, more readable code habits.",
    tag: "JavaScript",
  },
  {
    id: 5,
    question:
      "Which hook is used to handle side effects in a functional React component?",
    options: ["useSideEffect", "useState", "useEffect", "useMemo"],
    correctAnswer: "useEffect",
    personalReflection:
      "useEffect is the Swiss Army knife of React; mastering its dependency array is the key to avoiding infinite loops.",
    tag: "React",
  },
  {
    id: 6,
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Via State", "Via Props", "Via Redux", "Via Context"],
    correctAnswer: "Via Props",
    personalReflection:
      "One-way data flow is a core React philosophy. It makes tracking where data comes from much simpler compared to two-way binding.",
    tag: "React",
  },
  {
    id: 7,
    question: "When using 'useMemo', what is the primary purpose?",
    options: [
      "To persist values between renders",
      "To cache the result of an expensive calculation",
      "To memoize a component to prevent re-renders",
      "To synchronize with local storage",
    ],
    correctAnswer: "To cache the result of an expensive calculation",
    personalReflection:
      "Performance optimization is a double-edged sword. Don't over-use useMemo; it has its own overhead. Use it only when calculations are truly heavy.",
    tag: "React",
  },
  {
    id: 8,
    question:
      "What happens if you call a State Updater function (e.g., setCounter) multiple times in a single event handler?",
    options: [
      "The component re-renders for every call",
      "React batches the updates and re-renders once",
      "The app crashes",
      "Only the last call is executed",
    ],
    correctAnswer: "React batches the updates and re-renders once",
    personalReflection:
      "Automatic batching in React 18+ is a lifesaver for performance, ensuring the UI stays snappy even with complex state logic.",
    tag: "React",
  },
  {
    id: 9,
    question:
      "Which folder in a Next.js (App Router) project is used to define routes?",
    options: ["/routes", "/pages", "/app", "/src"],
    correctAnswer: "/app",
    personalReflection:
      "The shift from the 'pages' router to the 'app' router introduced a more powerful layout system and Server Components by default.",
    tag: "Next.js",
  },
  {
    id: 10,
    question: "What is the purpose of the 'Link' component in Next.js?",
    options: [
      "To link external CSS",
      "To perform client-side navigation",
      "To create an SEO-only anchor tag",
      "To pre-fetch images",
    ],
    correctAnswer: "To perform client-side navigation",
    personalReflection:
      "Using the Link component allows Next.js to prefetch the code for the linked page, making transitions feel instantaneous.",
    tag: "Next.js",
  },
  {
    id: 11,
    question: "In Next.js, what is 'ISR' (Incremental Static Regeneration)?",
    options: [
      "Regenerating the entire site on every request",
      "Updating static pages after the site is built without a full rebuild",
      "Compiling JavaScript to WebAssembly",
      "Streaming HTML from the server",
    ],
    correctAnswer:
      "Updating static pages after the site is built without a full rebuild",
    personalReflection:
      "ISR is the best of both worlds: you get the speed of static content with the freshness of dynamic data.",
    tag: "Next.js",
  },
  {
    id: 12,
    question:
      "Which file in the App Router is used to create a shared UI for multiple routes?",
    options: ["template.js", "shared.js", "layout.js", "middleware.js"],
    correctAnswer: "layout.js",
    personalReflection:
      "Layouts preserve state across navigation, which is perfect for headers or sidebars that shouldn't re-render when the user clicks a link.",
    tag: "Next.js",
  },
  {
    id: 13,
    question:
      "What is the correct order of events when a browser loads a page?",
    options: [
      "DOM -> CSSOM -> Render Tree -> Layout -> Paint",
      "CSSOM -> DOM -> Paint -> Layout",
      "Render Tree -> DOM -> Layout -> Paint",
      "Paint -> Layout -> Render Tree -> DOM",
    ],
    correctAnswer: "DOM -> CSSOM -> Render Tree -> Layout -> Paint",
    personalReflection:
      "Understanding the 'Critical Rendering Path' is essential for web performance. Optimizing CSS can often prevent the dreaded 'Flash of Unstyled Content'.",
    tag: "Browser",
  },
  {
    id: 14,
    question: "What does the 'DOMContentLoaded' event signify?",
    options: [
      "The entire page and all images are loaded",
      "The HTML is fully parsed and the DOM is built",
      "The CSSOM is ready",
      "The user has interacted with the page",
    ],
    correctAnswer: "The HTML is fully parsed and the DOM is built",
    personalReflection:
      "DOMContentLoaded is the moment your scripts can safely manipulate the UI, even if heavy images are still downloading in the background.",
    tag: "Browser",
  },
  {
    id: 15,
    question: "In an OAuth2 flow, what is the 'Authorization Grant'?",
    options: [
      "The final Access Token",
      "A credential representing the user's permission",
      "The login password",
      "The Client ID",
    ],
    correctAnswer: "A credential representing the user's permission",
    personalReflection:
      "OAuth is all about delegated authority. You aren't giving the app your password; you're giving it a temporary 'key' to act on your behalf.",
    tag: "OAuth",
  },
  {
    id: 16,
    question:
      "Which OAuth2 flow is recommended for Single Page Applications (SPAs)?",
    options: [
      "Implicit Grant",
      "Authorization Code Flow with PKCE",
      "Resource Owner Password Credentials",
      "Client Credentials",
    ],
    correctAnswer: "Authorization Code Flow with PKCE",
    personalReflection:
      "The Implicit flow is largely deprecated for security reasons. PKCE (Proof Key for Code Exchange) adds a layer of protection that makes SPAs much safer.",
    tag: "OAuth",
  },
  {
    id: 17,
    question: "What is the primary defense against Cross-Site Scripting (XSS)?",
    options: [
      "Using HTTPS",
      "Sanitizing and escaping user input",
      "Storing passwords as hashes",
      "Disabling cookies",
    ],
    correctAnswer: "Sanitizing and escaping user input",
    personalReflection:
      "Never trust user input! Whether it's a comment box or a search bar, treat every string from a user as potentially malicious code.",
    tag: "Security",
  },
  {
    id: 18,
    question: "How does a Content Security Policy (CSP) help secure a website?",
    options: [
      "By encrypting the database",
      "By restricting the sources from which scripts and resources can be loaded",
      "By hiding the server IP address",
      "By forcing users to use 2FA",
    ],
    correctAnswer:
      "By restricting the sources from which scripts and resources can be loaded",
    personalReflection:
      "A strong CSP acts as a 'whitelist,' telling the browser: 'Only run scripts from my own domain.' This can stop an XSS attack even if a vulnerability exists.",
    tag: "Security",
  },
  {
    id: 19,
    question:
      "A JSON Web Token (JWT) consists of three parts. What is the correct order?",
    options: [
      "Header, Payload, Signature",
      "Payload, Header, Signature",
      "ID, Data, Hash",
      "Header, Body, Key",
    ],
    correctAnswer: "Header, Payload, Signature",
    personalReflection:
      "Remember: The Header and Payload are just Base64 encoded, NOT encrypted. Anyone can read them; the Signature is what proves they haven't been tampered with.",
    tag: "JWT",
  },
  {
    id: 20,
    question:
      "Where is the safest place to store a JWT in a browser to prevent XSS theft?",
    options: [
      "LocalStorage",
      "SessionStorage",
      "An HttpOnly, Secure cookie",
      "A global JavaScript variable",
    ],
    correctAnswer: "An HttpOnly, Secure cookie",
    personalReflection:
      "If a script can't access the cookie (HttpOnly), an XSS attacker can't steal your session token. Security is always about layers of defense.",
    tag: "JWT",
  },
  {
    id: 21,
    question:
      "If an API is hosted on 'api-service.com' and the frontend on 'myshop.com', why might developers choose LocalStorage over Cookies?",
    options: [
      "LocalStorage is faster at data retrieval than Cookies.",
      "Browsers block cross-site HttpOnly cookies by default (Third-Party Cookie restrictions).",
      "LocalStorage automatically encrypts the JWT.",
      "Cookies cannot store strings as long as a JWT.",
    ],
    correctAnswer:
      "Browsers block cross-site HttpOnly cookies by default (Third-Party Cookie restrictions).",
    personalReflection:
      "Reflect on how modern privacy settings in browsers like Safari and Brave make 'SameSite=None' cookies difficult to maintain compared to manual headers.",
    tag: "JWT",
  },
  {
    id: 22,
    question:
      "Which vulnerability is 'HttpOnly' cookies specifically designed to prevent?",
    options: [
      "CSRF (Cross-Site Request Forgery)",
      "SQL Injection",
      "XSS (Cross-Site Scripting) token theft",
      "Man-in-the-Middle (MitM) attacks",
    ],
    correctAnswer: "XSS (Cross-Site Scripting) token theft",
    personalReflection:
      "Remember that HttpOnly makes the cookie invisible to document.cookie, so a malicious script cannot 'grab' it.",
    tag: "JWT",
  },
  {
    id: 23,
    question: "Why is a JWT stored in LocalStorage immune to CSRF attacks?",
    options: [
      "Because LocalStorage is encrypted by the browser.",
      "Because LocalStorage requires a 'Secure' flag to work.",
      "Because the browser does not automatically attach LocalStorage items to outgoing requests.",
      "Because CSRF only affects PHP-based backends.",
    ],
    correctAnswer:
      "Because the browser does not automatically attach LocalStorage items to outgoing requests.",
    personalReflection:
      "Consider that for LocalStorage, the developer must manually add the 'Authorization' header. A malicious site cannot force your browser to add that header.",
    tag: "JWT",
  },
  {
    id: 24,
    question:
      "When injecting a token from a Native App into a Web-View, what is the 'Gold Standard' for security?",
    options: [
      "Injecting the token into LocalStorage via evaluateJavaScript.",
      "Passing the token as a URL Query Parameter.",
      "Injecting a Secure, HttpOnly cookie via the Native Cookie Manager.",
      "Asking the user to copy-paste the token manually.",
    ],
    correctAnswer:
      "Injecting a Secure, HttpOnly cookie via the Native Cookie Manager.",
    personalReflection:
      "Native injection allows the Web-View to have HttpOnly protection even though the code is running in a 'browser' environment.",
    tag: "JWT",
  },
  {
    id: 26,
    question:
      "Where is the most secure place to define the CSP 'Acceptable Domains' list for a production React application?",
    options: [
      "In the Redux store or React Context",
      "In the HTTP response header sent by the server",
      "Inside a hidden <div> tag in the index.html",
      "In the package.json file of the project",
    ],
    correctAnswer: "In the HTTP response header sent by the server",
    personalReflection:
      "Setting it at the server level ensures the policy is immutable and cannot be tampered with by client-side scripts.",
    tag: "CSP",
  },
  {
    id: 27,
    question:
      "If a React app is loaded from 'myapp.com' and tries to fetch data from 'api.helper.com' without it being in the 'connect-src' directive, what happens?",
    options: [
      "The server will send a 404 error",
      "The browser will allow it but show a warning",
      "The browser will block the request before it leaves the network layer",
      "The data will be fetched but encrypted so React cannot read it",
    ],
    correctAnswer:
      "The browser will block the request before it leaves the network layer",
    personalReflection:
      "CSP is a 'pre-flight' gatekeeper; it kills unauthorized outgoing requests immediately.",
    tag: "CSP",
  },
  {
    id: 28,
    question:
      "An attacker manages to inject a <script> tag into your React DOM via a database vulnerability. How does CSP stop this XSS attack?",
    options: [
      "By deleting the script tag from the HTML automatically",
      "By checking the script source against the 'script-src' whitelist",
      "By crashing the browser to protect the user",
      "By scanning the script for malicious keywords like 'alert'",
    ],
    correctAnswer:
      "By checking the script source against the 'script-src' whitelist",
    personalReflection:
      "CSP doesn't care if the code exists in your HTML; it only cares if the source of that code is 'Acceptable'.",
    tag: "CSP",
  },
  {
    id: 29,
    question:
      "What happens if an API response (Content-Type: application/json) contains a 'Content-Security-Policy' header?",
    options: [
      "The browser applies the policy to the entire website",
      "The browser ignores the header because it is not an HTML document",
      "The browser stops the React app from rendering",
      "The browser saves the policy for the next page load",
    ],
    correctAnswer:
      "The browser ignores the header because it is not an HTML document",
    personalReflection:
      "CSP is document-based. It only triggers when the browser parses HTML/DOM environments.",
    tag: "CSP",
  },
  {
    id: 30,
    question:
      "In the CSP workflow, which entity is responsible for 'Enforcing' the rules and blocking the unapproved domains?",
    options: [
      "The Web Server (e.g., Nginx)",
      "The React Application code",
      "The User's Browser engine",
      "The Database",
    ],
    correctAnswer: "The User's Browser engine",
    personalReflection:
      "The server gives the orders (Header), but the browser is the bouncer that actually stops the action.",
    tag: "CSP",
  },
  {
    id: 31,
    question:
      "Which of the following is a key difference between a 'type' and an 'interface'?",
    options: [
      "Interfaces cannot be used for objects",
      "Types can be merged using declaration merging, interfaces cannot",
      "Interfaces can be merged using declaration merging, types cannot",
      "Types are only for primitive values",
    ],
    correctAnswer:
      "Interfaces can be merged using declaration merging, types cannot",
    personalReflection:
      "Declaration merging is a unique superpower of interfaces. If you define the same interface twice, TS combines them—this is why they are preferred for public API libraries.",
    tag: "TypeScript",
  },
  {
    id: 32,
    question:
      "What is the primary advantage of using a Union Type in TypeScript?",
    options: [
      "It allows a variable to hold only one specific type",
      "It allows a variable to be one of several types",
      "It merges two objects into one",
      "It is used for loops",
    ],
    correctAnswer: "It allows a variable to be one of several types",
    personalReflection:
      "Union types are the bread and butter of TS flexibility; they allow us to handle dynamic data while keeping the safety rails on.",
    tag: "TypeScript",
  },
  {
    id: 33,
    question:
      "How do you define an Interface for an object with a string key and a number value?",
    options: [
      "{ key: string, value: number }",
      "interface Map { [key: string]: number; }",
      "interface Map { string: number }",
      "type Map = string[]",
    ],
    correctAnswer: "interface Map { [key: string]: number; }",
    personalReflection:
      "Index signatures are vital when you don't know the exact names of the properties beforehand, like when parsing API responses.",
    tag: "TypeScript",
  },
  {
    id: 34,
    question:
      "What does the 'readonly' modifier do when applied to a property?",
    options: [
      "Makes the property invisible",
      "Prevents the property from being assigned a value after initialization",
      "Allows the property to be changed only by the constructor",
      "Automatically makes the property a string",
    ],
    correctAnswer:
      "Prevents the property from being assigned a value after initialization",
    personalReflection:
      "Immutability is a great pattern for preventing bugs. Using readonly helps ensure that your configuration objects stay exactly how you intended.",
    tag: "TypeScript",
  },
  {
    id: 35,
    question: "In TypeScript, what is 'Type Narrowing'?",
    options: [
      "Converting a string to a number",
      "Reducing a union type to a more specific type using logic",
      "Making the code file smaller",
      "Removing types from a project",
    ],
    correctAnswer: "Reducing a union type to a more specific type using logic",
    personalReflection:
      "This is where the TypeScript compiler shows its intelligence—it watches your if statements and typeof checks to know exactly what a variable is at any given line.",
    tag: "TypeScript",
  },
  {
    id: 31,
    question:
      "Which of the following is true regarding 'WeakMap' in JavaScript?",
    options: [
      "Keys must be strings",
      "Keys are weakly held and can be garbage collected if no other references exist",
      "It is enumerable using for...of loops",
      "It has a .size property to track elements",
    ],
    correctAnswer:
      "Keys are weakly held and can be garbage collected if no other references exist",
    personalReflection:
      "WeakMaps are essential for preventing memory leaks when associating metadata with objects, as they don't prevent the object from being cleared from memory.",
    tag: "JavaScript",
  },
  {
    id: 32,
    question:
      "What is the primary difference between a 'Worker' (Web Worker) and the main thread in JS?",
    options: [
      "Workers can access the DOM directly",
      "Workers run on a separate thread and communicate via message passing",
      "Workers share the same memory space as the main thread",
      "Workers are only used for network requests",
    ],
    correctAnswer:
      "Workers run on a second thread and communicate via message passing",
    personalReflection:
      "Web Workers are the key to 'multi-threaded' JS. Use them for heavy computations (like image processing) to keep your UI thread buttery smooth.",
    tag: "JavaScript",
  },
  {
    id: 33,
    question:
      "In the context of the Event Loop, when does the browser typically perform UI rendering?",
    options: [
      "After every single microtask",
      "Before the microtask queue is cleared",
      "Usually after the microtask queue is empty and before the next macrotask",
      "Only when the call stack has more than 10 functions",
    ],
    correctAnswer:
      "Usually after the microtask queue is empty and before the next macrotask",
    personalReflection:
      "This is why infinite microtask loops (like a recursive Promise) can freeze the UI—the browser never gets the 'gap' it needs to paint the screen.",
    tag: "JavaScript",
  },
  {
    id: 34,
    question:
      "What is the 'Double Mounting' behavior in React 18's Strict Mode (Development)?",
    options: [
      "A bug in the React engine",
      "React mounts, unmounts, and remounts components to ensure effects are resilient",
      "It renders the component twice to compare virtual DOM performance",
      "It happens only when using Concurrent features",
    ],
    correctAnswer:
      "React mounts, unmounts, and remounts components to ensure effects are resilient",
    personalReflection:
      "While annoying at first, this helps you catch 'cleanup' bugs in useEffect that would otherwise lead to memory leaks in production.",
    tag: "React",
  },
  {
    id: 35,
    question: "How does 'useDeferredValue' improve user experience in React?",
    options: [
      "It speeds up the execution of a function",
      "It allows you to delay re-rendering a non-urgent part of the UI",
      "It caches a value in LocalStorage automatically",
      "It prevents a component from ever re-rendering",
    ],
    correctAnswer:
      "It allows you to delay re-rendering a non-urgent part of the UI",
    personalReflection:
      "Use this when you have a heavy UI part (like a large list) that depends on a fast-changing input. It keeps the typing feel responsive while the list catches up.",
    tag: "React",
  },
  {
    id: 36,
    question:
      "In React's 'Concurrent Rendering', what does 'Transitions' (useTransition) allow you to do?",
    options: [
      "Animate CSS properties",
      "Mark a state update as non-urgent so it can be interrupted",
      "Navigate between routes faster",
      "Sync state between two different browser tabs",
    ],
    correctAnswer: "Mark a state update as non-urgent so it can be interrupted",
    personalReflection:
      "Transitions allow React to keep the current UI interactive even while a heavy background render is happening. It's a game-changer for complex dashboards.",
    tag: "React",
  },
  {
    id: 37,
    question:
      "What is the behavior of a 'Server Action' in Next.js when called from a Client Component?",
    options: [
      "It runs a local fetch request to an API route",
      "It executes on the server as a POST request with encrypted data",
      "It serializes the entire DOM and sends it to the server",
      "It can only be used to read data, not write it",
    ],
    correctAnswer:
      "It executes on the server as a POST request with encrypted data",
    personalReflection:
      "Server Actions reduce boilerplate by removing the need to manually write fetch() and API routes. They bring a 'RPC-like' feel to modern web dev.",
    tag: "Next.js",
  },
  {
    id: 38,
    question:
      "In the Next.js App Router, what is the 'Streaming' mechanism used for?",
    options: [
      "Video playback optimization",
      "Progressively rendering parts of the UI as data becomes available",
      "Sending logs to a third-party service",
      "Real-time chat using WebSockets",
    ],
    correctAnswer:
      "Progressively rendering parts of the UI as data becomes available",
    personalReflection:
      "Streaming (via Suspense) prevents the 'all-or-nothing' loading state. You can show the header immediately while the slow database parts 'stream' in later.",
    tag: "Next.js",
  },
  {
    id: 39,
    question:
      "Which Next.js configuration property allows you to use 'Edge Runtime' for specific routes?",
    options: [
      "export const runtime = 'edge'",
      "config.edge = true",
      "next.config.js { edge: true }",
      "useEdgeRuntime()",
    ],
    correctAnswer: "export const runtime = 'edge'",
    personalReflection:
      "The Edge Runtime is great for low-latency tasks like geolocation or A/B testing, but remember it has a limited set of Node.js APIs available.",
    tag: "Next.js",
  },

  {
    id: 40,
    question:
      "What is the purpose of the 'key' prop when rendering a list in React?",
    options: [
      "To style the element",
      "To help React identify which items have changed, been added, or removed",
      "To bind data to the DOM",
      "To create a unique CSS class",
    ],
    correctAnswer:
      "To help React identify which items have changed, been added, or removed",
    personalReflection:
      "Keys are crucial for the Reconciliation process. Without unique keys, React might unnecessarily re-render everything in a list, hurting performance.",
    tag: "React",
  },
  {
    id: 41,
    question:
      "Which React hook would you use to store a mutable value that does not cause a re-render when updated?",
    options: ["useState", "useMemo", "useRef", "useReducer"],
    correctAnswer: "useRef",
    personalReflection:
      "useRef is like a 'box' that holds a value for the full lifetime of the component. It's perfect for accessing DOM elements or storing interval IDs.",
    tag: "React",
  },
  {
    id: 42,
    question: "What does the 'useContext' hook solve in a React application?",
    options: [
      "Prop drilling",
      "State persistence",
      "API fetching",
      "Memory leaks",
    ],
    correctAnswer: "Prop drilling",
    personalReflection:
      "Context provides a way to pass data through the component tree without having to manually pass props down at every level.",
    tag: "React",
  },
  {
    id: 43,
    question: "In Next.js, what is the 'public' folder used for?",
    options: [
      "Server-side code",
      "Static assets like images and fonts",
      "Public API routes",
      "Shared React components",
    ],
    correctAnswer: "Static assets like images and fonts",
    personalReflection:
      "Files in the public folder can be referenced starting from the base URL (/), making it the home for your favicons and brand assets.",
    tag: "Next.js",
  },
  {
    id: 44,
    question: "What is 'Hydration' in the context of Next.js?",
    options: [
      "Cleaning up unused memory",
      "The process of attaching event listeners to static HTML",
      "Downloading data from a database",
      "Optimizing images for mobile",
    ],
    correctAnswer: "The process of attaching event listeners to static HTML",
    personalReflection:
      "Hydration is what turns a 'dry' static page into an interactive 'wet' React application. If you see hydration errors, your server and client HTML don't match!",
    tag: "Next.js",
  },
  {
    id: 45,
    question:
      "What is the default rendering environment for components inside the 'app' directory in Next.js?",
    options: [
      "Client Components",
      "Server Components",
      "Static Components",
      "Edge Components",
    ],
    correctAnswer: "Server Components",
    tag: "Next.js",
    personalReflection:
      "By defaulting to Server Components, Next.js reduces the amount of JavaScript sent to the browser, resulting in faster initial page loads.",
  },
  {
    id: 46,
    question:
      "Which of the following methods is used to merge two or more arrays into a new array?",
    options: ["push()", "join()", "concat()", "slice()"],
    correctAnswer: "concat()",
    personalReflection:
      "While concat() is the classic method, the modern spread operator [...arr1, ...arr2] has become the industry standard for its readability.",
    tag: "JavaScript",
  },
  {
    id: 47,
    question: "What is a 'Closure' in JavaScript?",
    options: [
      "A way to close a browser tab",
      "A function that has access to its outer function's scope",
      "The end of a loop",
      "A private class method",
    ],
    correctAnswer: "A function that has access to its outer function's scope",
    personalReflection:
      "Closures allow for powerful patterns like data privacy and factories. They 'remember' the environment where they were created.",
    tag: "JavaScript",
  },
];
