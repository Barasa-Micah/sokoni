// src/services/mockApiService.js
const mockUsers = [
    { username: 'testuser', password: 'password123' }
];

const mockProducts = [
    { id: 1, name: 'Product A', description: 'Great product A', price: 29.99 },
    { id: 2, name: 'Product B', description: 'Amazing product B', price: 49.99 }
];

// Simulate API call to login
export const loginUser = async (username, password) => {
    const user = mockUsers.find(user => user.username === username && user.password === password);
    if (user) {
        return { success: true, message: 'Login successful!' };
    } else {
        throw new Error('Invalid username or password');
    }
};

// Simulate API call to register user
export const registerUser = async (username, password) => {
    const userExists = mockUsers.find(user => user.username === username);
    if (userExists) {
        throw new Error('User already exists');
    } else {
        mockUsers.push({ username, password });
        return { success: true, message: 'Registration successful!' };
    }
};

// Simulate API call to get products
export const getProducts = async () => {
    return mockProducts;
};
