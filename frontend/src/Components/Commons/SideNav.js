import React, { Component } from 'react';
import { Sidebar, Menu, Icon} from 'semantic-ui-react';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavVisible: false,
    };
  }

  toggleSideNav() {
    this.setState({
      sideNavVisible: !this.state.sideNavVisible
    });
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='scale down' style={{ width: '150px', display: 'flex'}} visible={this.state.sideNavVisible} icon='labeled' vertical inverted>
            <Menu.Item name='user'>
              <Icon name='user' />
              John Doe
            </Menu.Item>
            <Menu.Item style={{margin: '0px',marginTop: 'auto'}} name='logout' onClick={this.handleLogout.bind(this)}>
              <Icon name='log out' />
              Logout
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu fixed='top' inverted>
                <Menu.Item name='bars' onClick={this.toggleSideNav.bind(this)}>
                    <Icon name='bars' />
                </Menu.Item>
            </Menu>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideNav;