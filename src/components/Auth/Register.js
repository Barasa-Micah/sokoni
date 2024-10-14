// src/components/Auth/Register.js
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { registerUser } from '../../services/mockApiService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleRegister = async () => {
        setError('');
        setMessage('');
        
        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            const response = await registerUser(username, password);
            setMessage(response.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box 
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to right, #e0f7fa, #e1bee7)',
                padding: '2rem',
            }}
        >
            <Container 
                maxWidth="sm"
                sx={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    Create Account
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
                    label="Email"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />
                <TextField
                    label="Phone Number (Optional)"
                    fullWidth
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <TextField
                    label="Confirm Password"
                    fullWidth
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                        onClick={handleRegister} 
                        disabled={loading}
                        sx={{ padding: '0.75rem', fontSize: '1rem' }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
                    </Button>
                </Box>
                <Typography variant="body2" sx={{ marginTop: '1rem', color: 'gray' }}>
                    Already have an account? Log in
                </Typography>
            </Container>
        </Box>
    );
};

export default Register;
