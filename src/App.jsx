import { h, Component } from 'preact';
import { observer } from 'mobx-preact';

@observer
class App extends Component {
  render({ store }) {
    return (
      <div>
        <h1>{store.count}</h1>
        <button onClick={ () => store.increment() }>+</button>
        <button onClick={ () => store.decrement() }>-</button>
      </div>
    );
  }
}

export default App;
