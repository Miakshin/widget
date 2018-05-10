import React, { Component } from 'react';
import Button from './button/Button'
import Frame from './frame/Frame'
import styles from './Widget.css'
import mockData from '../../mockData'



class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
        opened: props.opened || false,
        data: props.data || []
      };
  }

  handleOpen = () => {
    this.setState({opened: !this.state.opened})
  }

  render() {

    return (
      <div
        className={styles.main}
        style={this.state.opened ? {'right':'30px', 'transition': '.5s'} : {'right':'-500px', 'transition': '.5s'}}
      >
        <Frame
          isOpened={this.state.opened}
          data={mockData}
        />
        <Button
          isOpened={this.state.opened}
          onHandleOpen={this.handleOpen}
        />
      </div>
    );
  }
}

export default Widget;
