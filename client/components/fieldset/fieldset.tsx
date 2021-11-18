import * as React from 'react';
import './fieldset.scss';
import { FieldsetProps } from '../../types';

const Fieldset = ({ className, label, children, ...props }: FieldsetProps) => (
  <fieldset className={`checkbox-group ${className}`} {...props}>
    <legend className={'checkbox-group__legend'}>{label}</legend>
    <div className={'checkbox-group__inner'}>{children}</div>
  </fieldset>
);

export default Fieldset;
