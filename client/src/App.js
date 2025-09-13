import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/TestPage';
import UnsubscribePage from './pages/UnsubscribePage';

function  App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/unsubscribe" element={<UnsubscribePage />} />
            </Routes>
        </Router>
    )
};

export default App;