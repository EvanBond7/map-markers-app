import './App.css';
import FormInputDestination from './components/FormInputDestination/FormInputDestination';
import InteractiveMap from './components/InteractiveMap/InteractiveMap';

function App() {
  return (
    <>
      <h1 className='app-title'>Map Markers App</h1>
      <div className='map-wrapper'>
        <FormInputDestination />
        <InteractiveMap />
      </div>
    </>
  );
}

export default App;
