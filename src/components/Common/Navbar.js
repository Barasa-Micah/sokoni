// src/components/Common/Navbar.js
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material'; // Import Box here
import MenuIcon from '@mui/icons-material/Menu'; // Correctly import MenuIcon
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
                <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register" onClick={handleDrawerToggle}>
                <ListItemText primary="Register" />
            </ListItem>
            <ListItem button component={Link} to="/products" onClick={handleDrawerToggle}>
                <ListItemText primary="Products" />
            </ListItem>
            <ListItem button component={Link} to="/livestream" onClick={handleDrawerToggle}>
                <ListItemText primary="Livestream" />
            </ListItem>
        </List>
    );

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#1e88e5' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            '&:hover': { color: '#ffd54f' }
                        }}
                    >
                        Sokoni
                    </Typography>

                    {/* Menu for larger screens */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to="/login" sx={navButtonStyle}>
                            Login
                        </Button>
                        <Button component={Link} to="/register" sx={navButtonStyle}>
                            Register
                        </Button>
                        <Button component={Link} to="/products" sx={navButtonStyle}>
                            Products
                        </Button>
                        <Button component={Link} to="/chat" sx={navButtonStyle}>
                        Chat
                        </Button>
                        <Button component={Link} to="/livestream" sx={navButtonStyle}>
                            Livestream
                        </Button>
                    </Box>

                    {/* Menu button for mobile screens */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile navigation */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

const navButtonStyle = {
    color: 'white',
    marginRight: '1rem',
    '&:hover': {
        backgroundColor: '#ffd54f',
        color: '#1e88e5',
    }
};

export default Navbar;
