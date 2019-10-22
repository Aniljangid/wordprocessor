import React, { Component } from 'react';
import {List, Icon, Button, Divider, Segment, Input, Dimmer, Loader} from 'semantic-ui-react';
import FileUnitComponent from './FileUnitComponent';

class FileDisplayComponent extends Component {
  render() {
    return (
      <div>
        {this.props.files.map((each,i) => {
        	return <FileUnitComponent name={each.name}/>
        })}
      </div>
    )
  }
}

export default FileDisplayComponent;