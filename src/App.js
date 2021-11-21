import { useState, useRef } from 'react';

import { useFetchData } from './hooks/useFetchData';
import { usePrepareMatrix } from './hooks/usePrepareMatrixData';

import { Picker } from './components/picker';
import { Board } from './components/board';
import { HoverSquare } from './components/hover-square/HoverSquare';
import { ButtonDefault } from './components/buttons';
import { FlexContainer, PickerContainer, HoveredStateContainer, HoveredStateTitleContainer, LoadingContainer, HoveredStateItemsContainer } from './styled-containers';
import './App.css';


function App() {
  const { data, loading, error } = useFetchData();
  const [state, setState] = useState();
  const matrix = usePrepareMatrix(state);
  const pickedRef = useRef();
  const [hoveredCells, setHoveredCells] = useState([]);


  const setFieldSize = () => {
    const ref = pickedRef.current;
    console.log(ref)
    setHoveredCells([]);
    setState(ref?.state?.selectValue[0]?.value);
  };

  const triggerCell = (cellName) => {
    hoveredCells.indexOf(cellName) === -1 ? (
      setHoveredCells([cellName, ...hoveredCells])
    ) : (
      setHoveredCells(hoveredCells.filter(cell => cell !== cellName))
    )
  };

  console.log(matrix);

  return (
    <div className="App">
      {!error ? (
        <FlexContainer>
          <div>
            <PickerContainer>
              {!loading && data ? (
                <Picker modes={data} ref={pickedRef} />
              ) : (
                <LoadingContainer>Loading...</LoadingContainer>
              )}
              <ButtonDefault btnText='Start' disabled={!data && loading} onClick={setFieldSize} />
            </PickerContainer>
            {state && <Board matrix={matrix} triggerCell={triggerCell} hoveredCells={hoveredCells} />}
          </div>
          <HoveredStateContainer>
            <HoveredStateTitleContainer>Hover squares</HoveredStateTitleContainer>
            <HoveredStateItemsContainer>
              {hoveredCells.map(item => {
                return <HoverSquare text={item} key={item} />
              })}
            </HoveredStateItemsContainer>
          </HoveredStateContainer>

        </FlexContainer>
      ) : <p>Something went wrong!</p>}
    </div>
  );
}

export default App;
