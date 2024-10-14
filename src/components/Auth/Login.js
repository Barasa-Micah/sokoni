// src/components/Auth/Login.js
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { loginUser } from '../../services/mockApiService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true); // Start loading indicator
        try {
            const response = await loginUser(username, password);
            setMessage(response.message);
            setError('');
        } catch (err) {
            setError(err.message);
            setMessage('');
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    return (
        <Box 
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to right, #e0f7fa, #e1bee7)', // Same background as Register
                padding: '2rem',
            }}
        >
            <Container 
                maxWidth="xs"
                sx={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    Welcome Back
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1.5rem' }}>
                    Please log in to your account
                </Typography>

                <TextField
                    label="Username"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />
                <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />

                {error && (
                    <Typography color="error" sx={{ mt: 2 }}>
                        {error}
                    </Typography>
                )}
                {message && (
                    <Typography color="primary" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}

                <Box sx={{ position: 'relative', mt: 3 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        onClick={handleLogin} 
                        disabled={loading}
                        sx={{ padding: '0.5rem', fontSize: '1rem' }}  // Adjust button size
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                    </Button>
                </Box>
                <Typography variant="body2" sx={{ marginTop: '1rem', color: 'gray' }}>
                    Don't have an account? Sign up
                </Typography>
            </Container>
        </Box>
    );
};

export default Login;
