// session.js - To be included in all protected pages

// List of protected pages
const protectedPages = [
    'cart.html',
    'account.html' // Add any other pages that require login
];

// Check if current page is protected
const currentPage = window.location.pathname.split('/').pop();

if (protectedPages.includes(currentPage)) {
    // Redirect to login page
    window.location.href = 'login.html';
}