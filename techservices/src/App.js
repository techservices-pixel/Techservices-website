import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import WorkingWithUs from './WorkingWithUs';
import LifeAtTechServices from './LifeAtTechServices';
import Opportunities from './Opportunities';
import logo from './assets/logo.png';
import cover from './assets/cover.jpg';


const styles = {
    navbar: {
        backgroundColor: '#f1f1f1',
        padding: '10px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center all content
        borderBottom: '2px solid #ddd',
        position: 'relative',
    },
    logo: {
        height: '60px',
        position: 'absolute',
        left: '10px',
        top: '0px',
    },

navLinks: {
    display: 'flex',
    gap: '40px', // Use a smaller, flexible gap
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap', // Allow wrapping on small screens
},


    link: {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.1rem',
    },
};




function Layout() {
    return (
        <div>
            {/* Logo */}
    {/* <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <img src={logo} alt="Tech Services Logo" style={{ height: '70px' }} />
            </div> */ }
            {/* Cover Image */}

	    {/*<div>
                <img src={cover} alt="Tech Services Cover" style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }} />
		</div> */}

		
            {/* Navigation Bar */}

<style>
{`
  @media (max-width: 700px) {
    .nav-links {
      gap: 16px !important;
      font-size: 0.95rem !important;
    }
    .navbar-logo {
      height: 40px !important;
    }
  }
`}
</style>

<nav style={styles.navbar}>
    <img src={logo} alt="Tech Services Logo" style={styles.logo} />
    <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/working-with-us" style={styles.link}>Working with Us</Link>
        <Link to="/life-at-tech-services" style={styles.link}>Life at Tech Services</Link>
        <Link to="/opportunities" style={styles.link}>Opportunities</Link>
    </div>
</nav>
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="working-with-us" element={<WorkingWithUs />} />
                    <Route path="life-at-tech-services" element={<LifeAtTechServices />} />
                    <Route path="opportunities" element={<Opportunities />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
