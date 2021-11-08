import React from 'react';
import Select, { components, DropdownIndicatorProps, StylesConfig } from 'react-select';
import './select.scss';
import SimpleBar from 'simplebar-react';

export interface ColourOption {
  value: string;
  label: string;
  color: string;
}
const dot = () => ({
  alignItems: 'center',
  display: 'flex',
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    ':hover': {
      ...styles[':hover'],
      borderColor: '#96AECD',
    },
    ':active': {
      border: 0,
    },
    border: isFocused ? 0 : 0,
  }),
  container: (styles, { isFocused }) => ({ ...styles, border: isFocused ? '1px solid #107EFF' : '1px solid #D8E3EC' }),
  option: (styles, { data, isFocused }) => ({
    ...styles,
    border: 0,

    backgroundColor: isFocused ? '#E8F3FF' : undefined,
    color: data.color,
    cursor: 'pointer',
    borderBottom: '1px solid #D8E3EC',
    ':active': {
      ...styles[':active'],
      backgroundColor: '#E8F3FF',
    },
    padding: '12px 15px',
  }),
  indicatorsContainer: () => ({
    display: 'flex',
    alignItems: 'center',
    div: {
      padding: 0,
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (styles, state) => ({
    width: '10px',
    height: '10px',
    marginRight: '15px',
    div: {
      position: 'relative',
      background: 'url(../public/img/arrow-down.svg) no-repeat top center;',
      height: '100%',
    },
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '12px 15px',
  }),
  menu: (styles) => ({ ...styles, overflow: 'hidden' }),
  input: (styles) => ({ ...styles, margin: 0, padding: 0 }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles) => ({ ...styles, color: '#313131', opacity: '0.6' }),
};
const customMenu = (props: any) => (
  <SimpleBar
    autoHide={false}
    style={{
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '334px',
      boxSizing: 'border-box',
    }}
  >
    {props.children}
  </SimpleBar>
);
const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <div className={'indicator'} />
  </components.DropdownIndicator>
);
const SelectBox = React.forwardRef(({ className, placeholder, label, options, ...props }: any, ref) => (
  <div className={`select-box ${className}`}>
    <label className={'select-box__title'}>{label}</label>
    <Select
      className={'select-box__input'}
      placeholder={placeholder}
      styles={colourStyles}
      options={options}
      ref={ref}
      {...props}
      components={{
        DropdownIndicator,
        MenuList: (props) => customMenu(props),
      }}
    />
  </div>
));
export default SelectBox;
