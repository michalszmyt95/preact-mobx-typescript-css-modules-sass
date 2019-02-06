import { Component, h } from 'preact';
import { observer } from 'mobx-preact';

@observer
export default class Boxy extends Component<any> {
  render() {
    const box = this.props.box;
    return (
      <div onClick={()=>{box.set(box.get()+1)}}>{box.get()}</div>
    );
  }
}
