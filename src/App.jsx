import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Hero ,Navbar,Tech,Works,Boxcontent,Footer} from  './components';


const App=()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-neutral-900">
        <div className=' bg-cover bg-node-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <div className = " bg-gradient-to-t from-neutral-900 from-50% to-yellow-400 to-50%">
        <About/>
        </div>
        <Works/>
        <Boxcontent/>
        <div className=' w-full bg-yellow-400 bg-node-repeat bg-center'>
          <Experience/>
        </div>
        <div className = " bg-gradient-to-t from-neutral-900 from-50% to-yellow-400 to-50%">
        <Tech />
        </div>
        <Footer />
        
      </div>
    </BrowserRouter>
  )
}

export default App
