// console.log('it is running');
const app = {
    title: 'Indecision VisiToggle',
    subtitle: 'ready player one',
};
  
let isVisible = false;
const onToggleVisibility = (e) => {
    e.preventDefault();
    // console.log('target:',e.target);
    console.log('isVisible:',isVisible);

    isVisible = !isVisible;
    // if (!isVisible) {
    //     isVisible = true;
    // } else {
    //     isVisible = false;
    // }
    render();
}
const render = () => {
    const jsx = (
      <div key="appwrap" className="wrap">
        <h1 className="suma-class">{app.title}</h1> 
          
        <button onClick={onToggleVisibility}>
        {isVisible ? 'Hide details' : 'Show details'}
        </button>
        {isVisible && (
            <div>
            <p>{(isVisible) ? 'option is: ' + app.subtitle : ''}</p>
            </div>
        )}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
}
render();
  