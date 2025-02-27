import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation'
import Home from './pages/Home';
import Borough from './pages/Borough';
import Tracking from './pages/Tracking';

function App() {
  const [limit, setLimit] = useState(3)

  return (
    <div className="app">
      <Navigation limit={limit} setLimit={setLimit} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />}/>
          <Route path="/borough/:id" element={<Borough limit={limit} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
