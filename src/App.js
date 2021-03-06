import Navbar from './components/Navbar'
import Chapter01 from './components/Chapter01'
import Chapter02 from './components/Chapter02'
import Chapter03 from './components/Chapter03'
import Chapter04 from './components/Chapter04'
import Team from './components/Team'
import './assests/style/style.css'
import 'aos/dist/aos.css'
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Chapter01/>
      <Chapter02/>
      <Chapter03/>
      <Chapter04/>
      <Team/>
    </div>
  );
}

export default App;
