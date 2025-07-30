import React from 'react';

function WorkingWithUs() {
    return (
        <div style={styles.wrapper}>
            {/* Page Title */}
            <section style={styles.hero}>
                <h1 style={styles.title}>Working with Us</h1>
                <p style={styles.subtitle}>
                    Join a team that values innovation, growth, and collaboration. At Tech Services, your career matters!
                </p>
            </section>

            {/* Our Culture */}
            <section style={styles.section}>
                <h2>Our Culture</h2>
                <p>
                    At Tech Services, we foster a culture of respect, creativity, and continuous learning. 
                    Our team is passionate about solving real-world problems and making a positive impact for our clients and communities.
                </p>
                <ul>
                    <li>Open communication and transparency</li>
                    <li>Supportive leadership and mentorship</li>
                    <li>Diversity and inclusion at every level</li>
                    <li>Celebrating achievements and milestones</li>
                </ul>
            </section>

            {/* Growth & Development */}
            <section style={styles.section}>
                <h2>Growth & Development</h2>
                <p>
                    We invest in our people through ongoing training, certifications, and opportunities to work on cutting-edge projects.
                    Whether you are just starting your career or looking to advance, we help you reach your full potential.
                </p>
                <ul>
                    <li>Technical workshops and seminars</li>
                    <li>Leadership development programs</li>
                    <li>Access to online courses and resources</li>
                    <li>Career path planning and guidance</li>
                </ul>
            </section>

            {/* Benefits */}
            <section style={styles.section}>
                <h2>Benefits & Perks</h2>
                <ul>
                    <li>Competitive salary and performance bonuses</li>
                    <li>Flexible work arrangements (remote/hybrid)</li>
                    <li>Health, dental, and wellness programs</li>
                    <li>Paid time off and holidays</li>
                    <li>Team outings, hackathons, and social events</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section style={styles.section}>
                <h2>Employee Stories</h2>
                <blockquote style={styles.quote}>
                    "Tech Services gave me the freedom to innovate and the support to grow. The team spirit here is amazing!"
                    <br />
                    <span style={styles.author}>— Senior Software Engineer</span>
                </blockquote>
                <blockquote style={styles.quote}>
                    "As a recent graduate, I found mentorship and real opportunities to learn and contribute from day one."
                    <br />
                    <span style={styles.author}>— Junior Developer</span>
                </blockquote>
            </section>

            {/* Call to Action */}
            <section style={styles.cta}>
                <h2>Ready to Work with Us?</h2>
                <p>
                    Explore open positions or reach out to discover how you can be part of Tech Services.
                </p>
                <a href="mailto:tech.services101991@gmail.com" style={styles.ctaButton}>Apply Now</a>
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

export default WorkingWithUs;
