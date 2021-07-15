import Weather from './Weather';

function App() {

  return (
    <div className="min-h-screen flex justify-center items-center flex-wrap">
      <Weather city_name="Paris" color_name="green"/>
      <Weather city_name="Los Angeles" color_name="red" />
    </div>
  );
}

export default App;