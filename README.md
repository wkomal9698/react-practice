# React practice

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Uses a file watching algorithm (written in C++)
- Caching (faster builds)
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling (to support older browsers)
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking (removes unused code)
- Different dev and prod bundles


Food ordering app
/**
 * Header
 *  - Logo
 *  - Nav Items (Home, About us, Cart)
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Cuisine
 *          - Star Rating, Time to delivery, Price for two
 *          - Offers
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *  - Feedback
 */

 Two types of Export/Import:
 - Default Export/Import
    export default Component;
    import Component from "path";

- Named Export/Import
    export const Component;
    import {Component} from "path";

# React Hooks
(Normal JS utility functions)
- useState() - Super powerful state variables in react
- useEffect()

# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing

# Redux

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create Slice - Cart slice
- dispatch (action)
- Subscribe via selector