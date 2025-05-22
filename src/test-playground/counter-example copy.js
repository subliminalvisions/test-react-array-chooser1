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
  // console.log('addOneTest');
  
  let count = 0;
  const addOne = () => {
    count++;
    renderCounterApp();
  };
  const minusOne = () => {
    count--;
    renderCounterApp();
  };
  const reset = () => {
    count = 0;
    renderCounterApp();
  };
  const valueOfCount = (count) => {
    return count;
  };
  
  // ReactDOM.render(templateOne, appRoot);
  
  // note: jsx does not have built-in data binding
  const renderCounterApp = () => {
    const templateTwo = (
      <div className="intro-block">
        <h1 className="name">Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    );
    ReactDOM.render(templateTwo, appRoot);
  };
  
  renderCounterApp();
  
  
  // console.log(templateTwo);
  
  // make button "-1" - setup minusOne Function 
  // and register - log "minusOne"
  
  // make reset button - setup reset function  to log reset
  
  // make button "+1"
  
  // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
  // yarn install
  // live-server public 