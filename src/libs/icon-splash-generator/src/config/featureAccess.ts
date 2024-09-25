// src/config/featureAccess.js
const featureAccessConfig = {
    livePreview: {
        isAuthenticated: true,
        roles: ['admin', 'editor'],
        packages: ['premium']
    },
    clipArtSelector: {
        isAuthenticated: true,
        roles: ['admin', 'user', 'editor'],
        packages: ['basic', 'premium']
    },
    // Add more features as needed
};
export default featureAccessConfig;
