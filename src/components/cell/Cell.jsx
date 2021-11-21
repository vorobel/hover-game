import React from 'react';

import { CellContainer } from './styled-containers';

export const Cell = ({ triggerCell, className }) => {
  return (
    <CellContainer
      onMouseEnter={triggerCell}
      className={className}
    ></CellContainer>
  );
};
