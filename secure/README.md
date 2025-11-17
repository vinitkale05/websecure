# CyberShield - Professional Cybersecurity Website

A full-stack cybersecurity company website built with HTML, CSS, JavaScript, and Node.js/Express backend.

## Features

- Modern, responsive design with dark theme
- 6 core cybersecurity services
- Pricing plans (Starter, Professional, Enterprise)
- Contact form with backend integration
- Newsletter subscription system
- 24/7 monitoring statistics
- Mobile-friendly navigation
- Real-time API integration

## Project Structure

\`\`\`
cybersecurity-website/
├── server.js                 # Express backend server
├── package.json             # Project dependencies
├── README.md                # This file
├── .gitignore              # Git ignore file
└── public/
    ├── index.html          # Main HTML file
    ├── styles.css          # CSS styling
    └── script.js           # JavaScript interactivity
\`\`\`

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 2: Start the Backend Server
\`\`\`bash
node server.js
\`\`\`

The server will run on `http://localhost:5000`

### Step 3: Open the Website
Open your browser and navigate to:
\`\`\`
http://localhost:5000
\`\`\`

## API Endpoints

### Services
- `GET /api/services` - Get all available services

### Contact
- `POST /api/contact` - Submit contact form
  - Required: `name`, `email`, `message`
  - Optional: `phone`, `service`

### Newsletter
- `POST /api/subscribe` - Subscribe to newsletter
  - Required: `email`

### Admin
- `GET /api/inquiries` - Get all contact inquiries and subscriptions (Admin endpoint)

### Health Check
- `GET /api/health` - Check server status

## Data Storage

All submissions are saved to `data.json` file:
- Contact form submissions
- Newsletter subscriptions
- Inquiry records

## Customization

### Update Company Info
Edit `public/index.html` to update:
- Company name: "CyberShield"
- Contact information
- Address
- Phone number
- Email

### Modify Services
Services are loaded from the backend API in `server.js`. Edit the `/api/services` endpoint to add or modify services.

### Change Pricing
Update the pricing cards in `public/index.html` Pricing Section.

### Customize Colors
Update CSS variables in `public/styles.css`:
- `--primary: #00d4ff` (Cyan)
- `--secondary: #1a1a2e` (Dark Blue)
- `--dark: #0f0f1e` (Very Dark)
- `--accent: #ff006e` (Pink)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Security Notes

- All form inputs are validated
- CORS is enabled for cross-origin requests
- Data is stored in local JSON file (not suitable for production)
- For production, implement a proper database (MongoDB, PostgreSQL, etc.)

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication
- Blog section
- Admin dashboard
- Payment integration
- Email notifications
- Advanced analytics

## Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Deploy to Heroku
1. Create Heroku app
2. Connect GitHub repository
3. Deploy from main branch

### Deploy to AWS/Digital Ocean
1. Set up virtual server
2. Install Node.js
3. Clone repository
4. Run `npm install`
5. Start server with PM2: `pm2 start server.js`

## Support

For issues or questions, please contact: support@cybershield.com

## License

MIT License - Feel free to use for commercial projects

---

Built with HTML, CSS, JavaScript, and Express.js
