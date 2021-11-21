import React from 'react';

import { Cell } from '../cell';
import { BoardContainer } from './styled-containers';

export const Board = ({ matrix, triggerCell, hoveredCells }) => {
  return (
    <BoardContainer>
      {matrix.map((array, index) => {
        return (
          <div key={index}>
            {array.map((item) => {
              return (
                <Cell
                  key={item}
                  triggerCell={() => triggerCell(item)}
                  className={hoveredCells.indexOf(item) !== -1 ? 'active' : ''}
                />
              );
            })}
          </div>
        );
      })}
    </BoardContainer>
  );
};