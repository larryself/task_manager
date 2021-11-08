import React from 'react';

const Icon = ({ type, typeIcon }: any) => {
  let icon;
  switch (type) {
    case 'docType':
      icon = (
        <svg width={'22'} height={'22'}>
          <use href={`../public/img/docType.svg#${typeIcon}`} />
        </svg>
      );
      break;
    default:
      icon = (
        <svg className={`icon icon-type-${typeIcon}`}>
          <use href={`../public/img/icon.svg#${typeIcon}`} />
        </svg>
      );
  }
  return icon;
};

export default Icon;
