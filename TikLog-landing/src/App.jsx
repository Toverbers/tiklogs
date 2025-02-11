import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/Contact';




function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
