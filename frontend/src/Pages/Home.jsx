import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaUserPlus, FaListAlt, FaEdit, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';

const Home = () => {
  // Color scheme
  const colors = {
    primary: '#212121',  // Dark background color
    secondary: '#f5f5f5', // Light background
    accent: '#f44336',    // Red accent for buttons
    textLight: '#fff',    // White text on dark
    textDark: '#212121',  // Dark text
  };

  // Styles
  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: colors.primary,
      color: colors.textLight,
      minHeight: '100vh',
      padding: '3rem 2rem',
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
      backgroundColor: colors.secondary,
      borderRadius: '8px',
      marginBottom: '2rem',
      textAlign: 'center',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
    heroIcon: {
      color: colors.accent,
      marginBottom: '1rem',
      fontSize: '4rem',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    button: {
      backgroundColor: colors.accent,
      color: colors.textLight,
      padding: '0.8rem 2rem',
      borderRadius: '30px',
      textDecoration: 'none',
      fontSize: '1rem',
      margin: '0.5rem',
      textAlign: 'center',
      display: 'inline-block',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#e57373',  // Lighter shade for hover effect
    },
    section: {
      marginTop: '3rem',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: colors.textLight,
      marginBottom: '2rem',
      fontWeight: 'bold',
    },
    featureCard: {
      backgroundColor: '#333',
      borderRadius: '10px',
      color: colors.textLight,
      padding: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
    },
    featureIconWrapper: {
      backgroundColor: colors.accent,
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
    },
    featureTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    featureDescription: {
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      

      {/* Features Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Key Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Feature 1 */}
          <div 
            style={{ ...styles.featureCard, ':hover': styles.featureCardHover }}
          >
            <div style={styles.featureIconWrapper}>
              <FaUserPlus style={{ color: colors.textLight }} size={30} />
            </div>
            <h3 style={styles.featureTitle}>Student Registration</h3>
            <p style={styles.featureDescription}>
              Seamlessly add and register students with all necessary details.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{ ...styles.featureCard, ':hover': styles.featureCardHover }}
          >
            <div style={styles.featureIconWrapper}>
              <FaListAlt style={{ color: colors.textLight }} size={30} />
            </div>
            <h3 style={styles.featureTitle}>Student Directory</h3>
            <p style={styles.featureDescription}>
              Easily search, filter, and view all student records with just a click.
            </p>
          </div>

          {/* Feature 3 */}
          <div 
            style={{ ...styles.featureCard, ':hover': styles.featureCardHover }}
          >
            <div style={styles.featureIconWrapper}>
              <FaEdit style={{ color: colors.textLight }} size={30} />
            </div>
            <h3 style={styles.featureTitle}>Record Management</h3>
            <p style={styles.featureDescription}>
              Update and maintain student records easily and quickly.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <FaChalkboardTeacher size={50} color={colors.accent} />
        <h2 style={{ color: colors.textLight, margin: '1rem 0' }}>Get Started Today!</h2>
        <p style={{ color: colors.textLight, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Join us now and make student management easier and more effective.
        </p>
        <Link to="/add" style={styles.button}>
          Add Your First Student
        </Link>
      </div>
    </div>
  );
};

export default Home;
