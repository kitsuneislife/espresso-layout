  
  import React from 'react'
  import './styles/Root.css'
  
  import Sidebar from './components/Sidebar';
  import { GlobalContext } from './toolbox/GlobalContext';

  
  export default function App() {

    const { page } = React.useContext(GlobalContext);
    
    return (
      <main>
        <Sidebar />
        {page === 'home' ? <div>Oi</div> : null}
        
      </main>
    )
  }
  