import React from 'react';

import './sidebarRow.css';

const SidebarRow = ({ selected, title, Icon }) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;

//selected prop 전달해서 선택되어져 있는 효과 추가
