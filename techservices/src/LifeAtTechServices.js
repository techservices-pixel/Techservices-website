import React from 'react';

function LifeAtTechServices() {
    return (
        <div style={styles.wrapper}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.title}>Life at Tech Services</h1>
                <p style={styles.subtitle}>
                    Experience a vibrant, supportive, and innovative workplace where your growth and well-being matter.
                </p>
            </section>

            {/* Our Environment */}
            <section style={styles.section}>
                <h2>Our Work Environment</h2>
                <p>
                    At Tech Services, we believe that a positive and inclusive environment is key to success. 
                    Our offices are designed for collaboration, creativity, and comfort, with open spaces, breakout zones, and modern amenities.
                </p>
                <ul>
                    <li>Collaborative open workspaces</li>
                    <li>Quiet zones for focused work</li>
                    <li>Modern meeting rooms and tech labs</li>
                    <li>Relaxation lounges and game areas</li>
                </ul>
            </section>

            {/* Team Spirit */}
            <section style={styles.section}>
                <h2>Team Spirit & Community</h2>
                <p>
                    We celebrate diversity and encourage everyone to bring their authentic selves to work. 
                    Our team enjoys regular social events, volunteering opportunities, and knowledge-sharing sessions.
                </p>
                <ul>
                    <li>Monthly team lunches and celebrations</li>
                    <li>Annual retreats and hackathons</li>
                    <li>Community outreach and charity drives</li>
                    <li>Peer-to-peer learning and mentorship</li>
                </ul>
            </section>

            {/* Wellness & Balance */}
            <section style={styles.section}>
                <h2>Wellness & Work-Life Balance</h2>
                <p>
                    Your health and happiness are important to us. We offer flexible schedules, wellness programs, and support for personal growth.
                </p>
                <ul>
                    <li>Flexible working hours and remote options</li>
                    <li>Health and wellness initiatives</li>
                    <li>Employee assistance programs</li>
                    <li>Paid time off for rest and recharge</li>
                </ul>
            </section>

            {/* Employee Stories */}
            <section style={styles.section}>
                <h2>Employee Experiences</h2>
                <blockquote style={styles.quote}>
                    "Tech Services is more than a workplace—it's a community. I feel valued and inspired every day."
                    <br />
                    <span style={styles.author}>— Project Manager</span>
                </blockquote>
                <blockquote style={styles.quote}>
                    "The opportunities to learn and grow here are endless. The team truly cares about your success."
                    <br />
                    <span style={styles.author}>— Software Intern</span>
                </blockquote>
            </section>

            {/* Call to Action */}
            <section style={styles.cta}>
                <h2>Ready to Experience Life at Tech Services?</h2>
                <p>
                    Join us and be part of a workplace that supports your ambitions and celebrates your achievements.
                </p>
                <a href="mailto:careers@techservices.com" style={styles.ctaButton}>Join Our Team</a>
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
        padding: '50px 20px 30px 20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '1.2rem',
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
        color: '#00b4ff',
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

export default LifeAtTechServices;