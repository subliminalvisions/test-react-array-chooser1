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
  options: [],
  question1: 'question 1 text',
  question2: 'other text for Q2',
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  console.log('target:',e.target);
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log('options:',app.options);
    
    e.target.elements.option.value = '';

    render();
  }
}

const onRemoveAll = () => {
  app.options = [];
  // app.options.length = 0;
  console.log('options:',app.options);
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log('RandomNum', randomNum);
  console.log('option', option);
  alert(option);
}

const appRoot = document.getElementById('app');
const numbers = [55, 101, 100];

const render = () => {
  const templateOne = (
    <div key="appwrap" className="wrap">
      <h1 className="suma-class">{app.title}</h1> 
      
      {(app.subtitle) && <p className="subttile">{app.subtitle}</p>}

      <p>{(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}</p>

      {/* onClick={test} */}
      <button disabled={app.options.length == 0 } onClick={onMakeDecision}>What should I do?</button>
      
      <button onClick={onRemoveAll}>Remove All</button>
      {/* <button >Show Details</button> */}
      {/* <p>{app.options.length}</p> */}
      <ol className="questionList">
        {
          app.options.map( (option) => {
            return <li key={option} className={option}>option: {option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateOne, appRoot);
}
render();



// create render function that renders the new JSX
// Call it right away
// then call it after aptions array is added to 


// live-server public 
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
