console.log('App.js is running!');

// T2 instructions
// create app object title/subtitle 
// use title/subtitle in the template
// render template 


// only render subtitle (and p tag) if subtitle exists - (w/ Logical and Operator)
//render new p tag - if options.length > 0 "Here are your options" "No Options"

const app = {
  title: 'Indecision App v1',
  subtitle: 'to decide your fate for you',
  options: ['One', 'Two'],
  question1: 'question 1 text',
  question2: 'other text for Q2',
};

// JSX = JavaScript XML
const templateOne = (
  <div className="wrap">
    <h1 className="suma-class">{app.title}</h1> 
    
    {(app.subtitle) && <p className="subttile">{app.subtitle}</p>}

    <p>{(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}</p>

    <ol className="questionList">
      <li>{app.question1}</li>
      <li>{app.question2}</li>
    </ol>    
  </div>
);
 
// use const / let later 
// if statements 
// ternary operators 
// logical and operator 

const user = {
  name: 'Stephen',
  age: 26,
  location: 'Denver'
};
function getLocation(location) {
  if (location) {
    return <p className="location">
    location: {location}</p>
  } else {
    // return 'is undefined';
    return undefined;
  }  
}
// {user.name.toUpperCase() + "!!"}

// Ternary Operator
// true ? 'Andrew' : 'Anonymous';
// Logical AND Operator
// true && 'Some age'
// false && 'Some age'
const templateTwo = (
  <div id="intro-block">
    <h1 className="name">
    
      {user.name ? 'yup: ' + user.name : 'Anonymous'}</h1>
         
      {(user.age && user.age >= 18) && <p>age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');
// ReactDOM.render(templateOne, appRoot);
ReactDOM.render(templateTwo, appRoot);
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// yarn install
// live-server public 
