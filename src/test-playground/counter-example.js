
class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.logThecount = this.logThecount.bind(this);
    this.state = {
      count: 0
    };
  }
  // Utilizing life-cycle Methods
  componentDidMount() {
    // console.log('componentDidMount, fetching data');

    const stringCount = localStorage.getItem('count');
    console.log('c-DidMount, stringCount: ', stringCount);
    
    // const varTypeString = typeof stringCount;
    // console.log('c-DidMount, varTypeString: ', varTypeString);

    // const numCount = JSON.parse(stringCount, 10);
    const count = parseInt(stringCount, 10);
    // console.log('c-DidMount, numCount: ', numCount);
  
    // const varType = typeof numCount;
    // console.log('c-DidMount, varType: ', varType);
    // const numCount = stringCount;
    // if (!isNaN(numCount) || numCount > 0) { 
    //   // console.log('componentDidMount, no data to fetch');
    //   console.log('componentDidMount, num > 0');
    //   return;
    // }

    // if (typeof count === 'number') {
    if (!isNaN(count)) {
      console.log('count is number: ', count);
      this.setState(() => ({ count }));
    } else {
      console.log('componentDidMount, no data to fetch');
    }

    // try {
      

    // } catch (e) {
    //   // do nothing
    // } 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate, saving data');

    if (prevState.count !== this.state.count) {
      // const json = JSON.stringify(this.state.count);
      // const num = parseInt(json, 10);
      // localStorage.setItem('count', num);
      localStorage.setItem('count', this.state.count);
      console.log('saving data, count changed');
    }
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

// Counter.defaultProps = {
//   count: 0
// };

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