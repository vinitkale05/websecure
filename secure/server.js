const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Data storage
const dataFile = path.join(__dirname, 'data.json');

// Initialize data file
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({
    contacts: [],
    subscriptions: [],
    inquiries: []
  }, null, 2));
}

// Helper functions
const readData = () => JSON.parse(fs.readFileSync(dataFile, 'utf8'));
const writeData = (data) => fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

// API Routes

// Get all services
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Threat Intelligence',
      description: 'Real-time monitoring and analysis of emerging threats',
      icon: 'shield-alert'
    },
    {
      id: 2,
      name: 'Data Protection',
      description: 'Comprehensive encryption and data loss prevention',
      icon: 'lock'
    },
    {
      id: 3,
      name: 'Incident Response',
      description: 'Rapid detection and containment of security breaches',
      icon: 'alert-triangle'
    },
    {
      id: 4,
      name: 'Identity Management',
      description: 'Secure authentication and access control systems',
      icon: 'user-check'
    },
    {
      id: 5,
      name: 'Vulnerability Assessment',
      description: 'Penetration testing and security scanning',
      icon: 'bug'
    },
    {
      id: 6,
      name: 'Compliance Management',
      description: 'GDPR, HIPAA, and ISO 27001 compliance support',
      icon: 'clipboard-check'
    }
  ];
  res.json(services);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, service } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = readData();
  const contact = {
    id: Date.now(),
    name,
    email,
    phone,
    message,
    service,
    date: new Date().toISOString()
  };

  data.contacts.push(contact);
  writeData(data);

  res.json({ success: true, message: 'Contact form submitted successfully' });
});

// Newsletter subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const data = readData();
  
  // Check if already subscribed
  if (data.subscriptions.some(sub => sub.email === email)) {
    return res.status(400).json({ error: 'Already subscribed' });
  }

  const subscription = {
    id: Date.now(),
    email,
    date: new Date().toISOString()
  };

  data.subscriptions.push(subscription);
  writeData(data);

  res.json({ success: true, message: 'Successfully subscribed' });
});

// Get all inquiries (admin)
app.get('/api/inquiries', (req, res) => {
  const data = readData();
  res.json({
    contacts: data.contacts,
    subscriptions: data.subscriptions
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
