// a simple app to modify arrays & output to the screen
class IndecisionApp extends React .Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  // life-cycle Methods
  componentDidMount() {
    console.log('componentDidMount, fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate, saving data');    
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');    
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    // console.log('H-D-O--test', option);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
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
      
    this.setState((prevState) => ({ 
      options: prevState.options.concat([option]) 
    }));
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
          handleDeleteOption={this.handleDeleteOption}  
          />
        <AddOption
          handleAddOption={this.handleAddOption}  
         />
      </div>
    );
  }
}

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
  title: 'InDecision APP'
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
          props.options.map( (option) => (
            <Option 
              key={option} 
              className={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />)
          )
            
        }
        </ul>
        <br/>
        <br/>
      </div>
    );
}

const Option = (props) => {
    return (
      <li>
        <span className="optionText" style={{ padding: '0 6px' }}>
         {props.optionText}  
      </span> 
        <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
        >
        remove</button>
      </li>
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
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['dev-den', 'new-brew']} />, document.getElementById('app'));


