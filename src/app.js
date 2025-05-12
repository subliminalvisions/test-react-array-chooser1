class IndecisionApp extends React .Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      // options: ['Thing one', 'Thing two', 'Thing three']
      options: []
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  // handlePick = pass down to Action and setup onClick - bind here 
  // randomly pick an option and alert it .. 
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'enter valid item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists';
    }
      
    this.setState((prevState) => {
      // prevState.options.push(option);
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  render() {
    const appTitle = "Indecision App";
    const appSubTitle = "Let functions decide your fate";

    return (
      <div>
        <Header title={appTitle} subtitle={appSubTitle}/>
        <Action 
          hasOptions={this.state.options.length > 0 }
          options={this.state.options}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}  
          />
        <AddOption
          handleAddOption={this.handleAddOption}  
         />
      </div>
    );
  }
}

class Header extends React .Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}


class Action extends React.Component {
  // handlePick() {
  //   console.log('handlePick');
  //   // alert('handlePick');
  // }
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
        What should it do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  
  // const getName = obj.getName.bind( {name: 'Andrew'}); 

  render() {
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      <p>Options are:</p>
        <ul>
        {
          this.props.options.map( (option) => 
            <Option key={option} className={option} text={option}/>)
        }
        </ul>
        <br/>
        <br/>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // // this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
    // if (option) {
    //   this.props.handleAddOption(option);
    //   console.log('option:', option);
    // }
    // this.setState(() => {
    //   return { error };
    // });
  }
  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        {/* <form onSubmit={this.props.handleAddOption}> */}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const obj = {
//   name: 'vikram',
//   getName() {
//     return this.name;
//   }
// }
// const getName = obj.getName.bind( {name: 'Andrew'}); 
// // console.log(obj.getName());
// // console.log(getName());


