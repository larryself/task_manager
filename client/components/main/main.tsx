import * as React from 'react';
import './main.scss';

const Main = ({ children }: any) => (
  <main>
    <div className={'wrap'}>{children}</div>
  </main>
);
export default Main;
