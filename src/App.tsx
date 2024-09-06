import Menu from './components/Menu';
import Content from './pages/Content';

export default function App() {
  return (
      <div className="bg-blue-950 p-3 m-auto flex flex-col items-center justify-center">
        <Menu />
        <Content />
      </div>
  );
}
