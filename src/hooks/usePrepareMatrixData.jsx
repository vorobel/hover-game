import { useEffect, useState } from 'react';

export const usePrepareMatrix = (size) => {
  const [matrixData, setMatrixData] = useState([]);

  useEffect(() => {
    if (size) {
      let m = [];
      for (let i = 1; i <= size; i++) {
        let tempArray = [];
        for (let j = 1; j <= size; j++) {
          tempArray.push(`row ${i} col ${j}`);
        }
        m.push(tempArray);
      }
      setMatrixData(m);
    }
  }, [size]);

  return matrixData;
};
