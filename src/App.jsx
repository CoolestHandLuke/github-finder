import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
    /* Two different contexts are provided to allow for global access to state values. 
    GithubProvided handles all the Github state and AlertProvider handles the instance of 
    searching for users with an empty text field. Maybe a little overkill but it's fine. 
    */

    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <main className="container mx-auto px-3 pb-12">
                            <Alert />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/user/:login" element={<User />} />
                                <Route
                                    path="/NotFound"
                                    element={<NotFound />}
                                />
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
