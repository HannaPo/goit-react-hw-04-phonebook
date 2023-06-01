import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
  };

  handleFilterChange = event => {
    this.props.setFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div>
        <Label>
          Find contacts by name
          <Input
            type="text"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </Label>
      </div>
    );
  }
}