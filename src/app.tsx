import { Component, h } from 'preact';
import { observer } from 'mobx-preact';
import { observable } from 'mobx';
import Boxy from './blocks/Boxy';

@observer
export default class App extends Component {
  @observable count = 0;

  box = observable.box(10);

	render() {
    return (
			<div id="app">
        <Boxy box={this.box} />
        TEST: { this.count }
        <button onClick={() => this.count += 1 }>click</button>
			</div>
		);
	}
}
