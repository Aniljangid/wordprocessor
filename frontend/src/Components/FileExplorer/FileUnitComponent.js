import React, { Component } from 'react';
import { Icon, Divider } from 'semantic-ui-react';

class FileUnitComponent extends Component {
  render() {
    return (
      <div>
        <span>
          <Icon name='file' color='blue' size='big'/>
            {this.props.name}
        </span>
        <Divider></Divider>
      </div>
    )
  }
}

export default FileUnitComponent;