import React from 'react';

function Opportunities() {
    return (
        <div style={styles.wrapper}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.title}>Opportunities at Tech Services</h1>
                <p style={styles.subtitle}>
                    Unlock your potential and shape the future of technology with us. Explore exciting career paths and growth opportunities!
                </p>
            </section>

            {/* Why Join Us */}
            <section style={styles.section}>
                <h2>Why Join Tech Services?</h2>
                <ul>
                    <li>Work on innovative projects with global impact</li>
                    <li>Collaborate with talented professionals and mentors</li>
                    <li>Continuous learning and skill development</li>
                    <li>Inclusive, diverse, and supportive culture</li>
                    <li>Competitive compensation and benefits</li>
                </ul>
            </section>

            {/* Open Positions */}
            <section style={styles.section}>
                <h2>Current Openings</h2>
                <ul>
                    <li><strong>Software Engineer</strong> – Build scalable solutions for enterprise clients</li>
                    <li><strong>Cloud Specialist</strong> – Design and implement cloud architectures</li>
                    <li><strong>Cybersecurity Analyst</strong> – Protect data and infrastructure</li>
                    <li><strong>IT Trainer</strong> – Empower students and professionals</li>
                    <li><strong>Business Development Executive</strong> – Drive growth and partnerships</li>
                </ul>
                <p>
                    We also welcome interns and fresh graduates! If you’re passionate about technology, we want to hear from you.
                </p>
            </section>

            {/* Growth & Rewards */}
            <section style={styles.section}>
                <h2>Growth & Rewards</h2>
                <ul>
                    <li>Personalized career development plans</li>
                    <li>Performance bonuses and recognition programs</li>
                    <li>Opportunities for leadership and advancement</li>
                    <li>Access to conferences, certifications, and workshops</li>
                </ul>
            </section>

            {/* Employee Testimonials */}
            <section style={styles.section}>
                <h2>Hear from Our Team</h2>
                <blockquote style={styles.quote}>
                    "Tech Services gave me the platform to innovate and grow. Every day brings new challenges and rewards."
                    <br />
                    <span style={styles.author}>— Lead Cloud Engineer</span>
                </blockquote>
                <blockquote style={styles.quote}>
                    "As an intern, I was trusted with real projects and mentored by industry experts. I’m proud to be part of this team."
                    <br />
                    <span style={styles.author}>— Software Intern</span>
                </blockquote>
            </section>

            {/* Call to Action */}
            <section style={styles.cta}>
                <h2>Ready to Start Your Journey?</h2>
                <p>
                    Apply now or reach out to learn more about opportunities at Tech Services. Your future starts here!
                </p>
                <a href="mailto:careers@techservices.com" style={styles.ctaButton}>Apply Today</a>
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
        background: 'linear-gradient(90deg, #00b4ff 0%, #0078d7 100%)',
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
        borderLeft: '4px solid #00b4ff',
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
        background: '#00b4ff',
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
        color: '#00b4ff',
        fontWeight: 'bold',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        transition: 'background 0.2s, color 0.2s',
    },
};

export default Opportunities;