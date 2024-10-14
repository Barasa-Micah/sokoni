// src/components/Products/ProductList.js
import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'; // Replacing EcoIcon

const ProductList = () => {
    // Temporary mock data with icons
    const mockProducts = [
        { id: 1, name: 'Product A', description: 'High quality product A.', price: 29.99, icon: <ShoppingCartIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> },
        { id: 2, name: 'Product B', description: 'Amazing product B with extra features.', price: 49.99, icon: <SmartphoneIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> },
        { id: 3, name: 'Product C', description: 'Best-selling product C.', price: 19.99, icon: <LaptopIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> },
        { id: 4, name: 'Product D', description: 'Affordable and durable product D.', price: 39.99, icon: <HomeIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> },
        { id: 5, name: 'Product E', description: 'Luxurious product E for premium customers.', price: 89.99, icon: <DevicesIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> },
        { id: 6, name: 'Product F', description: 'Reliable product F with great reviews.', price: 24.99, icon: <LocalFloristIcon sx={{ fontSize: 80, color: '#1e88e5' }} /> }, // Replaced EcoIcon with LocalFloristIcon
    ];

    const [products] = useState(mockProducts);

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', // Same background as chat
                minHeight: '100vh',
                padding: '2rem 0'
            }}
        >
            <Container>
                <Typography 
                    variant="h4" 
                    sx={{ 
                        textAlign: 'center', 
                        fontWeight: 'bold', 
                        marginBottom: '2rem', 
                        color: '#1e88e5' 
                    }}
                >
                    Our Products
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '2rem',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                                {/* Product Icon */}
                                {product.icon}
                                
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e88e5' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '1rem' }}>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#1e88e5' }}>
                                        ${product.price.toFixed(2)}
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#1e88e5',
                                            '&:hover': {
                                                backgroundColor: '#1565c0'
                                            }
                                        }}
                                    >
                                        Buy Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProductList;
