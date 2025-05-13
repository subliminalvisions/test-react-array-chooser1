// stateless functional component


class IndecisionApp extends React .Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
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
    const appSubTitle = "Let functions decide your fate";

    return (
      <div>
        <Header subtitle={appSubTitle}/>
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

// options: ['Thing one', 'Thing two', 'Thing three']
IndecisionApp.defaultProps = {
  options: []
};


const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>Why?: To {props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps = {
  title: 'InDecision'
};

const Action = (props) => {
    return (
      <div>
        <button 
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
        What should it do?</button>
      </div>
    );
}

const Options = (props) => {
   return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <p>Options are:</p>
        <ul>
        {
          props.options.map( (option) => 
            <Option key={option} className={option} text={option}/>)
        }
        </ul>
        <br/>
        <br/>
      </div>
    );
}

const Option = (props) => {
    return (
      <li>{props.text}</li>
    );
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

// stateless functional component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp options={['devil one', 'Thing two', 'Thing three']}/>, document.getElementById('app'));
// ReactDOM.render(<User name="Andrew" age={26}/>, document.getElementById('app'));


