
class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.logThecount = this.logThecount.bind(this);
    this.state = {
      count: props.count
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      }
    }); 
    // this.state.count = this.state.count +1;
    console.log('handleAddOne: ', this.state.count);
  }
  logThecount() {
    console.log('handleAddOne: ', this.state.count);
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      }
    });
    console.log('handleMinusOne: ', this.state.count);
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
    console.log('handleReset: ', this.state.count);
  }

  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      <button onClick={this.logThecount}>log count</button>
      </div>
    )
  }


}

Counter.defaultProps = {
  count: 0
};

// Create 3 methods: handleAddOne, handleMinusOne, handleReset
// use console.log to print method name
// wire up onClic & bind in the constructor function

// ReactDOM.render(<Counter count={2} />, document.getElementById('app'));
ReactDOM.render(<Counter />, document.getElementById('app'));



// // use const / let later 
// // if statements 
// // ternary operators 
// // logical and operator 

// const user = {
//     name: 'Stephen',
//     age: 26,
//     location: 'Denver'
//   };
//   function getLocation(location) {
//     if (location) {
//       return <p className="location">
//       location: {location}</p>
//     } else {
//       // return 'is undefined';
//       return undefined;
//     }  
//   }
//   // {user.name.toUpperCase() + "!!"}
//   // console.log('addOneTest');
  
//   let count = 0;
//   const addOne = () => {
//     count++;
//     renderCounterApp();
//   };
//   const minusOne = () => {
//     count--;
//     renderCounterApp();
//   };
//   const reset = () => {
//     count = 0;
//     renderCounterApp();
//   };
//   const valueOfCount = (count) => {
//     return count;
//   };
  
//   // ReactDOM.render(templateOne, appRoot);
  
//   // note: jsx does not have built-in data binding
//   const renderCounterApp = () => {
//     const templateTwo = (
//       <div className="intro-block">
//         <h1 className="name">Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//       </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
//   };
  
//   renderCounterApp();
  
  
//   // console.log(templateTwo);
  
//   // make button "-1" - setup minusOne Function 
//   // and register - log "minusOne"
  
//   // make reset button - setup reset function  to log reset
  
//   // make button "+1"
  
//   // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//   // yarn install
//   // live-server public 