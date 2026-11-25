import React from 'react'
import './App.css'
import LibraryBooks from './Component/LibraryBooks.jsx'
import LibraryLogin from './Component/LibraryLogin.jsx'
import Office from './Component/Office.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'

function App() {

  return (
    <>
  
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<LibraryLogin />} />
          <Route path="/office" element={<Office />} />
          <Route path="/books" element={<LibraryBooks />} />
          <Route path="*" element={<LibraryLogin />} />
    </Routes>
    </BrowserRouter>
    </>

    // <>
    //   <div>
    //     {/*
    //     <header>
    //         <h1>LIBRARY MANAGEMENT SYSTEM</h1>
    //         <p>This is a simple library management system built with React.</p>
    //     </header>

    //          <LibraryLogin />
    //     */}

    //     <main>
    //       {/*
    //       <section className="library-cards-section">
    //         <LibraryBooks />
    //       </section>
    //       */}
    //       <Office />
    //       <Route path="/" element={<LibraryLogin />} />
    //       <Route path="/office" element={<Office />} />
    //       <Route path="/books" element={<Librarybooks />} />
    //       <Route path="*" element={<LibraryLogin />} />
    //     </main>
    //   </div>
    // </>
  )
}

export default App
