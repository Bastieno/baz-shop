import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './directory.data';
import './directory.styles.scss';

class Directory extends Component {
  state = {
    sections: SECTIONS_DATA
  }

  renderDirectoryMenu() {
    return this.state.sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
      )
    )
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.renderDirectoryMenu()
        }
      </div>
    )
  }
}

export default Directory;