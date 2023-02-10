JSX is an SML-like syntax to Javascript
XML is short for extensible markup language and JSX it's one of those extensions, just like HTML is

JSX makes it so we can write code that looks exactly like HTML so we can easily write components (more easily visualize the UI that it's JS is going to create)

In JSX, every element must be explicity closed...every "tag" must either have an opening and closing tag, or in the case of an empty element (a tag that has no content, such as <br> or <img>), unlike in HTML, we must include a foward slash before the closing angle bracked like we did with <br /> above

Syntax Rules
- JSX uses XML syntax (elements within angle brackets) for defining components
- All "empty" components (components with just a start tag - no closing tag) must be self-closed using a forward slash
- React elements are always lower-cased
- user-defined components are always uppercased - like the <Greeter /> component
- When rendering, a component must return a SINGLE NODE OR ARRAY OF NODES - however, when we usually compose components from multiple components...to return multiple components from the render method they can be wrapped by a single component (a <div>)
- If you put adjacent JSX elements, they NEED TO BE WITHIN AN ENCLOSED JSX element (aka WRAP THEM IN A <div> or an empty fragment <> but will have different implications - just have to be careful about what kind of container to put them in)
- Going to have individual stylesheets for every component
- The advantage of using a fragment is that it avoids rendering extra elements into the DOM!!! <> USE THIS WHENEVER POSSIBLE!


What is JSX and why do we use it?
- JSX is a way to write code that makes our lives easier because it says just write what looks like html, we'll handle the rest
- Keeps our code looking cleaner and neater

We use ___ to pass information as key/value pairs to a component
- props

To embed JS expression within JSX, we wrap the expressions with {}


-- sfc + tab is a shortcut to set up a function component

    {props.puppies?.map(puppy => 
    <Puppy key={puppy.name} puppy={puppy}/>)}
    {/* this is an implicit return (after the arrow) so don't need curly brackets, only thing we're ever going to map to is one component */}

- Passing props down through several components is known as prop drilling
- Can only return one thing, needs <>
- A component can be reused any number of times in as many different parts of an application as you want --> TRUE
- What is a benefit of breaking you application into many smaller components, rather than just having a few large components?
  - easier to read the code, easier to see where there are errors, etc.