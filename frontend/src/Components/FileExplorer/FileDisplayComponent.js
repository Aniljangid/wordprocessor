import React, { Component } from 'react';
import {List, Icon, Button, Divider, Segment, Input, Dimmer, Loader} from 'semantic-ui-react';
import FileUnitComponent from './FileUnitComponent';

class FileDisplayComponent extends Component {
  render() {
    return (
      <div>
        <FileUnitComponent name="hello"/>
        <FileUnitComponent name="hello"/>
        <FileUnitComponent name="hello"/>
        <FileUnitComponent name="hello"/>
        <FileUnitComponent name="hello"/>
      </div>
    )
  }
}

export default FileDisplayComponent;