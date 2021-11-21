import React from 'react';

import { BtnDefaultStyled } from './styled-containers';

export const ButtonDefault = ({ btnText, disabled, onClick }) => {
  return <BtnDefaultStyled disabled={disabled} onClick={onClick}>{btnText}</BtnDefaultStyled>;
};
