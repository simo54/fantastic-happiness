import ROUTESLIST, { RenderRoutes } from './routes/Routes';

function App() {
  return (
    <div>
      <div>route menu</div>
      <div>
        <RenderRoutes routes={ROUTESLIST} />
      </div>
    </div>
  );
}

export default App;
