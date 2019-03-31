import { Component } from "react";

type ComponentState = {
  on: boolean;
  toggle?: () => void;
};

type ComponentProps = {
  children: ({ on, toggle }: { on: boolean; toggle: () => void }) => any;
};

class Toggle extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { on: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ on: !prevState.on }));
  }

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.state.toggle
    });
  }
}

export default Toggle;
