import React, { Component } from 'react';
import {Segment, Grid, Header} from 'semantic-ui-react';
import SideNav from '../Commons/SideNav';
import FileDisplayComponent from './FileDisplayComponent';

const fileMgmtStyles = {
  gridGap : {
    marginTop : '3%',
    paddingLeft : '2%',
    paddingRight : '2%',
    zIndex: 1,
    position: 'relative'
  }
}

class FileExplorer extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name:'Adarsh'
      },
      {
        name:'Anil'
      },
      {
        name:'Abid'
      },
      {
        name:'Sidhant'
      }
    ];
  }
  render() {
    return (
        <div>
          <Grid columns={2} divided style={fileMgmtStyles.gridGap}>
            <Grid.Row>
              <Grid.Column>
                <Header as='h1'>Your Files</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <FileDisplayComponent files={this.data}/>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}


export default FileExplorer;