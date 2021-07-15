import Weather from './Weather';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-wrap">
      <Weather city_name="Paris"/>
      <Weather city_name="Los Angeles" />
    </div>
  );
}

export default App;