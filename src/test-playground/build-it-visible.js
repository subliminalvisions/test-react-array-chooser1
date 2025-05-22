console.log('it is running');

const app = {
    title: 'Indecision VisiToggle',
    subtitle: 'ready player one',
};
  
class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  // condition ? expressionIfTrue : expressionIfFalse
  render() {
    return (
      <div>
        <h1 className="some-class">{app.title}</h1> 
        <div>{this.state.visibility ? <p>Condition is true</p> : <p>Condition is false</p>}
</div>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>

        {this.state.visibility && (
          <div>detail info if true</div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<ToggleVisibility/>, document.getElementById('app'));
