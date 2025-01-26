const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '72px',
        color: 'green',
    },
    subheading: {
        fontSize: '24px',
        color: '#555',
    },
    link: {
        marginTop: '20px',
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: 'green',
        textDecoration: 'none',
        borderRadius: '5px',
    }
};

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <h2 style={styles.subheading}>Page Not Found</h2>
            <p style={styles.subheading}>Sorry, the page you are looking for does not exist.</p>
            <a href="/" style={styles.link}>Go to Homepage</a>
        </div>
    );
};

export default ErrorPage;