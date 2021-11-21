import React, { forwardRef } from 'react';

import Select from 'react-select';

export const Picker = forwardRef(({ modes }, ref ) => {
  return (
    <Select
      name="Pick Mode"
      options={modes}
      placeholder="Pick mode"
      ref={ref}
    />
  );
});
