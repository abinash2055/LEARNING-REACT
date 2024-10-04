import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Inline from "../../day3/src/components/Inline";
import Stylesheet from "../../day3/src/components/Stylesheet";
import "./appStyles.css";
import styles from "./appStyles.module.css";


function App() {
  return (
    <div className="App">
      <h1 className="error">Error in App Style of CSS</h1>
      <h1 className={styles.success}>Error in App Style of module CSS</h1>
      <Inline />
      <Stylesheet primary={true} />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}

export default App;
