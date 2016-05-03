/*
 * Interface
 */ 

interface IInputSwitchProps {
  checked?: boolean;
  labelOn?: string;
  labelOff?: string;
  callback?: (checked) => void;
}

interface IInputSwitchState {
  checked: boolean;
}

// React
import * as React from "react";

// Styles
const style: any = require("./input-switch.css");

/*
 * Import --------------------
 */

export class InputSwitch extends React.Component<IInputSwitchProps, IInputSwitchState> {
    constructor(props: IInputSwitchProps) {
      super(props);
      this.state = {checked: this.props.checked || false};
    }
    handleClick(e) {
      const {callback = (checked) => {}} = this.props;
      const checked = e.target.checked;
      this.setState({checked: checked});
      callback(checked);
    }
    componentWillReceiveProps(nextProps) {
      const {checked} = nextProps;
      this.setState({ checked: checked });
    }
    render(): React.ReactElement<{}> {
        const {labelOn = "On", labelOff = "Off"} = this.props;
        return (
          <label className={style.switch}>
            <input 
              type="checkbox" 
              className={style.switchInput} 
              checked={this.state.checked}
              onChange={(e) => this.handleClick(e)} />

              <span className={style.switchLabel} data-on={labelOn} data-off={labelOff}></span>
              <span className={style.switchHandle} />
          </label>
        );
    }
};
