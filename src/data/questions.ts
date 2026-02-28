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
    "id": 1,
    "question": "What is the output of: console.log(typeof [])?",
    "options": ["array", "object", "list", "undefined"],
    "correctAnswer": "object",
    "personalReflection": "In JavaScript, arrays are technically specialized objects. This is a classic 'gotcha' that reminds us to use Array.isArray() for reliable type checking.",
    "tag": "JavaScript"
  },
  {
    "id": 2,
    "question": "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    "options": ["var", "let", "const", "static"],
    "correctAnswer": "let",
    "personalReflection": "Switching from var to let/const was a turning point for JS stability, helping prevent those frustrating variable hoisting bugs.",
    "tag": "JavaScript"
  },
  {
    "id": 3,
    "question": "In the Event Loop, which queue has higher priority: the Task Queue (Macrotasks) or the Microtask Queue?",
    "options": ["Task Queue", "Microtask Queue", "They have equal priority", "It depends on the browser"],
    "correctAnswer": "Microtask Queue",
    "personalReflection": "The Event Loop processes all available microtasks (like Promises) before moving to the next macrotask (like setTimeout). This is why Promise.resolve() finishes before a 0ms timer!",
    "tag": "JavaScript"
  },
  {
    "id": 4,
    "question": "What is 'Temporal Dead Zone' in JavaScript?",
    "options": ["The time between a function call and execution", "The period between variable hoisting and initialization", "A state where the Event Loop stops", "The time it takes for a Promise to reject"],
    "correctAnswer": "The period between variable hoisting and initialization",
    "personalReflection": "Even though let and const are hoisted, accessing them before their definition throws a ReferenceError. It forces cleaner, more readable code habits.",
    "tag": "JavaScript"
  },
  {
    "id": 5,
    "question": "Which hook is used to handle side effects in a functional React component?",
    "options": ["useSideEffect", "useState", "useEffect", "useMemo"],
    "correctAnswer": "useEffect",
    "personalReflection": "useEffect is the Swiss Army knife of React; mastering its dependency array is the key to avoiding infinite loops.",
    "tag": "React"
  },
  {
    "id": 6,
    "question": "How do you pass data from a parent component to a child component?",
    "options": ["Via State", "Via Props", "Via Redux", "Via Context"],
    "correctAnswer": "Via Props",
    "personalReflection": "One-way data flow is a core React philosophy. It makes tracking where data comes from much simpler compared to two-way binding.",
    "tag": "React"
  },
  {
    "id": 7,
    "question": "When using 'useMemo', what is the primary purpose?",
    "options": ["To persist values between renders", "To cache the result of an expensive calculation", "To memoize a component to prevent re-renders", "To synchronize with local storage"],
    "correctAnswer": "To cache the result of an expensive calculation",
    "personalReflection": "Performance optimization is a double-edged sword. Don't over-use useMemo; it has its own overhead. Use it only when calculations are truly heavy.",
    "tag": "React"
  },
  {
    "id": 8,
    "question": "What happens if you call a State Updater function (e.g., setCounter) multiple times in a single event handler?",
    "options": ["The component re-renders for every call", "React batches the updates and re-renders once", "The app crashes", "Only the last call is executed"],
    "correctAnswer": "React batches the updates and re-renders once",
    "personalReflection": "Automatic batching in React 18+ is a lifesaver for performance, ensuring the UI stays snappy even with complex state logic.",
    "tag": "React"
  },
  {
    "id": 9,
    "question": "Which folder in a Next.js (App Router) project is used to define routes?",
    "options": ["/routes", "/pages", "/app", "/src"],
    "correctAnswer": "/app",
    "personalReflection": "The shift from the 'pages' router to the 'app' router introduced a more powerful layout system and Server Components by default.",
    "tag": "Next.js"
  },
  {
    "id": 10,
    "question": "What is the purpose of the 'Link' component in Next.js?",
    "options": ["To link external CSS", "To perform client-side navigation", "To create an SEO-only anchor tag", "To pre-fetch images"],
    "correctAnswer": "To perform client-side navigation",
    "personalReflection": "Using the Link component allows Next.js to prefetch the code for the linked page, making transitions feel instantaneous.",
    "tag": "Next.js"
  },
  {
    "id": 11,
    "question": "In Next.js, what is 'ISR' (Incremental Static Regeneration)?",
    "options": ["Regenerating the entire site on every request", "Updating static pages after the site is built without a full rebuild", "Compiling JavaScript to WebAssembly", "Streaming HTML from the server"],
    "correctAnswer": "Updating static pages after the site is built without a full rebuild",
    "personalReflection": "ISR is the best of both worlds: you get the speed of static content with the freshness of dynamic data.",
    "tag": "Next.js"
  },
  {
    "id": 12,
    "question": "Which file in the App Router is used to create a shared UI for multiple routes?",
    "options": ["template.js", "shared.js", "layout.js", "middleware.js"],
    "correctAnswer": "layout.js",
    "personalReflection": "Layouts preserve state across navigation, which is perfect for headers or sidebars that shouldn't re-render when the user clicks a link.",
    "tag": "Next.js"
  },
  {
    "id": 13,
    "question": "What is the correct order of events when a browser loads a page?",
    "options": ["DOM -> CSSOM -> Render Tree -> Layout -> Paint", "CSSOM -> DOM -> Paint -> Layout", "Render Tree -> DOM -> Layout -> Paint", "Paint -> Layout -> Render Tree -> DOM"],
    "correctAnswer": "DOM -> CSSOM -> Render Tree -> Layout -> Paint",
    "personalReflection": "Understanding the 'Critical Rendering Path' is essential for web performance. Optimizing CSS can often prevent the dreaded 'Flash of Unstyled Content'.",
    "tag": "Browser"
  },
  {
    "id": 14,
    "question": "What does the 'DOMContentLoaded' event signify?",
    "options": ["The entire page and all images are loaded", "The HTML is fully parsed and the DOM is built", "The CSSOM is ready", "The user has interacted with the page"],
    "correctAnswer": "The HTML is fully parsed and the DOM is built",
    "personalReflection": "DOMContentLoaded is the moment your scripts can safely manipulate the UI, even if heavy images are still downloading in the background.",
    "tag": "Browser"
  },
  {
    "id": 15,
    "question": "In an OAuth2 flow, what is the 'Authorization Grant'?",
    "options": ["The final Access Token", "A credential representing the user's permission", "The login password", "The Client ID"],
    "correctAnswer": "A credential representing the user's permission",
    "personalReflection": "OAuth is all about delegated authority. You aren't giving the app your password; you're giving it a temporary 'key' to act on your behalf.",
    "tag": "OAuth"
  },
  {
    "id": 16,
    "question": "Which OAuth2 flow is recommended for Single Page Applications (SPAs)?",
    "options": ["Implicit Grant", "Authorization Code Flow with PKCE", "Resource Owner Password Credentials", "Client Credentials"],
    "correctAnswer": "Authorization Code Flow with PKCE",
    "personalReflection": "The Implicit flow is largely deprecated for security reasons. PKCE (Proof Key for Code Exchange) adds a layer of protection that makes SPAs much safer.",
    "tag": "OAuth"
  },
  {
    "id": 17,
    "question": "What is the primary defense against Cross-Site Scripting (XSS)?",
    "options": ["Using HTTPS", "Sanitizing and escaping user input", "Storing passwords as hashes", "Disabling cookies"],
    "correctAnswer": "Sanitizing and escaping user input",
    "personalReflection": "Never trust user input! Whether it's a comment box or a search bar, treat every string from a user as potentially malicious code.",
    "tag": "Security"
  },
  {
    "id": 18,
    "question": "How does a Content Security Policy (CSP) help secure a website?",
    "options": ["By encrypting the database", "By restricting the sources from which scripts and resources can be loaded", "By hiding the server IP address", "By forcing users to use 2FA"],
    "correctAnswer": "By restricting the sources from which scripts and resources can be loaded",
    "personalReflection": "A strong CSP acts as a 'whitelist,' telling the browser: 'Only run scripts from my own domain.' This can stop an XSS attack even if a vulnerability exists.",
    "tag": "Security"
  },
  {
    "id": 19,
    "question": "A JSON Web Token (JWT) consists of three parts. What is the correct order?",
    "options": ["Header, Payload, Signature", "Payload, Header, Signature", "ID, Data, Hash", "Header, Body, Key"],
    "correctAnswer": "Header, Payload, Signature",
    "personalReflection": "Remember: The Header and Payload are just Base64 encoded, NOT encrypted. Anyone can read them; the Signature is what proves they haven't been tampered with.",
    "tag": "JWT"
  },
  {
    "id": 20,
    "question": "Where is the safest place to store a JWT in a browser to prevent XSS theft?",
    "options": ["LocalStorage", "SessionStorage", "An HttpOnly, Secure cookie", "A global JavaScript variable"],
    "correctAnswer": "An HttpOnly, Secure cookie",
    "personalReflection": "If a script can't access the cookie (HttpOnly), an XSS attacker can't steal your session token. Security is always about layers of defense.",
    "tag": "JWT"
  }
]