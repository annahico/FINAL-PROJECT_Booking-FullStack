# Book My Hotel

This project is a hotel booking website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search for hotels, view details, and make bookings.

## Features

- **User Authentication:** Register and login functionalities for users.
- **Hotel Search:** Search for hotels based on location, date, and other filters.
- **Booking Management:** View booking history and manage current bookings.
- **Admin Panel:** Admin dashboard to manage hotels, bookings, and users.
<!-- - **Image Uploads:** Integration with Cloudinary for uploading and managing hotel images. -->
- **Responsive Design:** Mobile-friendly interface for seamless user experience.

## Technologies Used

- **Frontend:** React.js, HTML/CSS, Bootstrap (or any other UI framework)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Uploads:** Cloudinary
- **Testing:** Playwright (for end-to-end testing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/annahico/FINAL-PROJECT_Booking-FullStack
   ```

2. Install dependencies:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory.
   - Add the following environment variables:
     - MongoDB URI
     - JWT secret
     - Cloudinary credentials (cloud name, API key, API secret)
     - Any other necessary variables

4. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

<!-- ## Testing

- End-to-end tests are implemented using Playwright.
- Run tests using the following command: -->

<!-- ```bash
cd e2e-tests
npx playwright test
``` -->

## Contributing

Contributions are welcome. Please fork the repository and create a pull request for any enhancements or fixes.
