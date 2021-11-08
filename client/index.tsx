import * as React from 'react';
import * as ReactDom from 'react-dom';
import './styles/font.scss';
import Root from './root/root';
import { startMirage } from './mirage';

if (process.env.NODE_ENV === 'development') {
  startMirage();
}
ReactDom.render(<Root />, document.getElementById('root'));
