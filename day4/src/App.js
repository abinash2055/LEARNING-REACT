
import './App.css';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import ParentComp from './components/ParentComp';
import PureComp from './components/PureComp';
import Tables from './components/Tables';


function App() {
  return (
    <div className="App">
      {/* <PureComp /> */}
      <ParentComp />
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <LifecycleC /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables /> */}
    </div>
  );
}

export default App;
