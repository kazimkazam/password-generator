import './App.css';
import '../resources/styles/reactComponents.css';
import '../resources/styles/inputs.css';
import '../resources/styles/responsiveDesign.css';
import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';

import { ContainerHeader } from '../Components/ContainerComponents/ContainerHeader/ContainerHeader';
import { ContainerPasswordGenerator  } from '../Components/ContainerComponents/ContainerPasswordGenerator/ContainerPasswordGenerator';
import { ContainerMemorablePasswordGenerator } from '../Components/ContainerComponents/ContainerMemorablePasswordGenerator/ContainerMemorablePasswordGenerator';
import { ContainerSha256 } from '../Components/ContainerComponents/ContainerSha256/ContainerSha256';
import { Acknowledgements } from '../Components/PresentationalComponents/Acknowledgements/Acknowledgements';
import { ContainerFooter } from '../Components/ContainerComponents/ContainerFooter/ContainerFooter';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <ContainerHeader />
          
          <main className={ 'mainDiv' }>
            <Routes>
              <Route path={ '/' } element={ <ContainerPasswordGenerator /> } ></Route>
              <Route path={ '/memorablepassword' } element={ <ContainerMemorablePasswordGenerator /> } ></Route>
              <Route path={ '/sha256' } element={ <ContainerSha256 /> } ></Route>
              <Route path={ '/acknowledgements' } element={ <Acknowledgements /> } ></Route>
            </Routes>
          </main>

          <ContainerFooter />
        </HashRouter>
    </div>
  );
}

export default App;
