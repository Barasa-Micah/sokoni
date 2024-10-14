import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, List, ListItem, Avatar, ListItemText } from '@mui/material';
import { format } from 'date-fns';

const Livestream = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [viewerCount, setViewerCount] = useState(145); // Simulating viewer count
    const user = "Me"; // Simulating the current user

    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                text: newMessage,
                user: user,
                time: new Date(),
                avatar: 'https://via.placeholder.com/40', // Placeholder avatar
            };
            setMessages((prev) => [...prev, message]);
            setNewMessage('');
        }
    };

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
            <Container maxWidth="md">
                {/* Livestream Information */}
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#1e88e5' }}>
                        Product Showcase Livestream
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                        Engage with our host and explore new product features!
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                        Current Viewers: <strong>{viewerCount}</strong>
                    </Typography>
                </Box>

                {/* Chat Section */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                        padding: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#1e88e5' }}>
                        Live Chat
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: '#f9f9f9',
                            padding: '1rem',
                            borderRadius: 2,
                            minHeight: '200px',
                            maxHeight: '300px',
                            overflowY: 'auto',
                            mb: 2,
                        }}
                    >
                        <List>
                            {messages.map((msg, index) => (
                                <ListItem key={index} alignItems="flex-start">
                                    <Avatar alt={msg.user} src={msg.avatar} sx={{ mr: 2 }} />
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: msg.user === "Me" ? '#1e88e5' : 'black' }}>
                                                    {msg.user}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: 'gray' }}>
                                                    {format(msg.time, 'hh:mm a')}
                                                </Typography>
                                            </Box>
                                        }
                                        secondary={<Typography variant="body2">{msg.text}</Typography>}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Message Input */}
                    <TextField
                        label="Type a message"
                        fullWidth
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={sendMessage}
                        sx={{ width: '100%', padding: '10px 0', mt: 1 }}
                    >
                        Send
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Livestream;
