import React from 'react';

function Home() {
    return (
        <div style={styles.wrapper}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.title}>Welcome to Tech Services</h1>
                <p style={styles.subtitle}>
                    Empowering businesses, students, and professionals with innovative technology solutions.
                </p>
            </section>

            {/* About Us */}
            <section style={styles.section}>
                <h2>Who We Are</h2>
                <p>
                    Tech Services is a leading provider of cutting-edge IT solutions, consultancy, and training.
                    Our mission is to bridge the gap between technology and people, helping organizations and individuals
                    achieve their goals through digital transformation.
                </p>
            </section>

            {/* Services */}
            <section style={styles.section}>
                <h2>Our Services</h2>
                <ul>
                    <li>Custom Software Development</li>
                    <li>Cloud Solutions & Migration</li>
                    <li>Cybersecurity Consulting</li>
                    <li>IT Training & Workshops for Students</li>
                    <li>Career Guidance & Placement Assistance</li>
                </ul>
            </section>

            {/* Why Choose Us */}
            <section style={styles.section}>
                <h2>Why Choose Tech Services?</h2>
                <ul>
                    <li>Experienced and Certified Professionals</li>
                    <li>Client-Centric Approach</li>
                    <li>Innovative and Scalable Solutions</li>
                    <li>Proven Track Record of Success</li>
                    <li>Support for Students, Startups, and Enterprises</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section style={styles.section}>
                <h2>What People Say</h2>
                <blockquote style={styles.quote}>
                    "Tech Services helped our company modernize our infrastructure and train our staff. Highly recommended!"
                    <br />
                    <span style={styles.author}>— CEO, Leading Manufacturing Firm</span>
                </blockquote>
                <blockquote style={styles.quote}>
                    "As a student, their workshops gave me the skills and confidence to start my tech career."
                    <br />
                    <span style={styles.author}>— Computer Science Graduate</span>
                </blockquote>
            </section>

            {/* Call to Action */}
            <section style={styles.cta}>
                <h2>Ready to Transform Your Future?</h2>
                <p>
                    Contact us today to learn how Tech Services can help you achieve your goals.
                </p>
                <a href="mailto:tech.services101991@gmail.com" style={styles.ctaButton}>Get in Touch</a>
            </section>
        </div>
    );
}

const styles = {
    wrapper: {
        fontFamily: 'Segoe UI, Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '0 0 40px 0',
    },
    hero: {
        background: 'linear-gradient(90deg, #0078d7 0%, #00b4ff 100%)',
        color: '#fff',
        padding: '60px 20px 40px 20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.8rem',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '1.3rem',
        marginBottom: '0',
    },
    section: {
        background: '#fff',
        margin: '30px auto',
        maxWidth: '800px',
        padding: '30px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    },
    quote: {
        fontStyle: 'italic',
        color: '#555',
        margin: '20px 0',
        paddingLeft: '20px',
        borderLeft: '4px solid #0078d7',
    },
    author: {
        display: 'block',
        marginTop: '8px',
        fontWeight: 'bold',
        color: '#0078d7',
    },
    cta: {
        textAlign: 'center',
        marginTop: '40px',
        padding: '30px 20px',
        background: '#0078d7',
        color: '#fff',
        borderRadius: '8px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ctaButton: {
        display: 'inline-block',
        marginTop: '18px',
        padding: '12px 28px',
        background: '#fff',
        color: '#0078d7',
        fontWeight: 'bold',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        transition: 'background 0.2s, color 0.2s',
    },
};

export default Home;