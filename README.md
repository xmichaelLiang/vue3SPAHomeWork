# Meeting Room Reservation System

This project is a single-page application (SPA) built with Vue 3 for managing meeting room reservations. It includes features for user authentication, room booking, and administrative management of meeting rooms.

## Project Structure

```
meeting-room-reservation
├── public
│   ├── index.html          # Main HTML file for the application
├── src
│   ├── assets              # Directory for static assets (images, fonts, styles)
│   ├── components          # Vue components for the application
│   │   ├── Navbar.vue      # Navigation bar component
│   │   ├── Login.vue       # Login component for user authentication
│   │   ├── Reservation.vue  # Component for booking meeting rooms
│   │   └── Management.vue   # Component for managing meeting rooms (admin only)
│   ├── router              # Vue Router configuration
│   │   └── index.js        # Defines routes for the application
│   ├── store               # Vuex store for state management
│   │   └── index.js        # Handles user authentication status and token storage
│   ├── views               # Views for different application states
│   │   ├── Home.vue        # Default landing page after login
│   │   ├── Login.vue       # View displayed when user is not authenticated
│   │   ├── Reservation.vue  # View for booking meeting rooms
│   │   └── Management.vue   # View for admin users to manage meeting rooms
│   ├── App.vue             # Root component of the application
│   └── main.js             # Entry point of the Vue application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── vue.config.js           # Configuration options for Vue CLI
```

## Features

1. **Navigation Bar**: Provides links for meeting room reservation, management, and login/logout functionality.
2. **User Authentication**: Users must log in to access the reservation system. The application checks for a valid token to determine access rights.
3. **Admin Management**: Only users with admin privileges can access the management features for meeting rooms.
4. **State Management**: The application uses Vuex to manage authentication state and store the token received from the API.
5. **API Integration**: The application communicates with a backend API for user authentication and meeting room reservation functionalities.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd meeting-room-reservation
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm run serve
   ```

4. Open your browser and navigate to `http://localhost:8080` to view the application.

## Usage

- Upon accessing the application, users will be directed to the login page if they are not authenticated.
- After logging in, users will be redirected to the meeting room reservation page.
- Admin users can access the management page to manage meeting rooms.

## License

This project is licensed under the MIT License.