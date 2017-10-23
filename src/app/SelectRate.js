import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'flag-icon-css/css/flag-icon.css';
import { FaLock } from 'react-icons/lib/fa';

const GravatarOption = createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired,
  },

  handleMouseDown (event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  },

  handleMouseEnter (event) {
    this.props.onFocus(this.props.option, event);
  },

  handleMouseMove (event) {
    if (this.props.isFocused) return;
    this.props.onFocus(this.props.option, event);
  },

  render () {
    return (
      <div className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        title={this.props.option.title}
      >
        <span className="Select-currency-name">{this.props.children}</span>
        <span className={'Select-flag flag-icon flag-icon-' + this.props.option.iso}></span>
      </div>
    );
  }
});

const GravatarValue = createClass({
  propTypes: {
    children: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.object
  },

  render () {
    return (
      <div className="Select-value" title={this.props.value.title}>
        <span className="Select-value-label">
          <span className="Select-currency-name">{this.props.children}</span>
          <span className={'Select-flag flag-icon flag-icon-' + this.props.value.iso}></span>
          {this.props.disabled && <FaLock className="Select-locker" />}
        </span>
      </div>
    );
  }
});

const SelectRate = createClass({
  propTypes: {
    hint: PropTypes.string,
    label: PropTypes.string,
  },

  getInitialState () {
    return {};
  },

  render () {
    const { options, value, disabled, clearable, name, onChange } = this.props;

    return (
      <Select
        onChange={onChange}
        optionComponent={GravatarOption}
        options={options}
        name={name}
        value={value}
        disabled={disabled}
        clearable={clearable}
        valueComponent={GravatarValue}
      />
    );
  }
});

export default SelectRate;
