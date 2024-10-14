// src/components/Livestream/Chat.js
import { useState } from 'react';
import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';
import { format } from 'date-fns';

const Chat = () => {
    // Initial mock messages
    const [messages, setMessages] = useState([
        { user: 'Host', text: 'Welcome to the livestream! Feel free to ask any questions.', time: new Date() },
        { user: 'User1', text: 'Thanks! Looking forward to this session!', time: new Date() },
        { user: 'User2', text: 'Are there any discounts today?', time: new Date() }
    ]);
    
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const message = { user: 'Me', text: newMessage, time: new Date() };
        setMessages((prevMessages) => [...prevMessages, message]);
        setNewMessage('');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '500px',
                width: '100%',
                border: '1px solid #ddd',
                borderRadius: 3,
                padding: 2,
                backgroundColor: '#f7f7f7',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', // Subtle gradient
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px', // Set max width for better layout
                margin: 'auto' // Center on the page
            }}
        >
            {/* Chat Messages */}
            <Box 
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    paddingRight: 1,
                    paddingBottom: 1,
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
            >
                <List sx={{ padding: 0 }}>
                    {messages.map((message, index) => (
                        <ListItem 
                            key={index} 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: message.user === 'Me' ? 'flex-end' : 'flex-start',
                                mb: 2,
                                maxWidth: '80%' // Keep chat bubbles at a reasonable width
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: message.user === 'Me' ? '#1e88e5' : '#e0e0e0',
                                    color: message.user === 'Me' ? 'white' : 'black',
                                    borderRadius: '16px',
                                    padding: '10px 15px',
                                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                                    wordBreak: 'break-word',
                                    fontSize: '0.95rem',
                                    position: 'relative',
                                    ':after': message.user === 'Me'
                                        ? { // Add triangle on the right for "Me"
                                            content: '""',
                                            position: 'absolute',
                                            top: '10px',
                                            right: '-10px',
                                            borderWidth: '10px',
                                            borderStyle: 'solid',
                                            borderColor: '#1e88e5 transparent transparent transparent'
                                        }
                                        : { // Add triangle on the left for others
                                            content: '""',
                                            position: 'absolute',
                                            top: '10px',
                                            left: '-10px',
                                            borderWidth: '10px',
                                            borderStyle: 'solid',
                                            borderColor: '#e0e0e0 transparent transparent transparent'
                                        }
                                }}
                            >
                                <Typography variant="body2">
                                    <strong>{message.user}</strong>: {message.text}
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                                    {format(message.time, 'hh:mm a')}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Message Input */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    size="small"
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                            padding: '8px'
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSendMessage} 
                    sx={{
                        padding: '8px 16px',
                        backgroundColor: '#1e88e5',
                        ':hover': {
                            backgroundColor: '#1565c0'
                        }
                    }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
