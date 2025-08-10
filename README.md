# Haitham Amireh - Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and experience as a DevOps professional and software developer. The site features smooth animations, a terminal-style skills display, and interactive project cards.

![Portfolio Preview](images/3.png)

## 🌟 Features

- **Interactive Terminal**: Skills displayed in a realistic terminal interface with glitch effects
- **3D Project Cards**: Mouse-responsive project cards with smooth 3D tilt animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Powered by GSAP (GreenSock Animation Platform)
- **Professional Layout**: Clean, developer-focused design with custom CSS variables
- **Fast Loading**: Optimized static assets and CDN integration
- **Auto-Deployment**: Automated deployment pipeline via GitHub Actions

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation**: GSAP 3.12.2 with ScrollTrigger
- **Fonts**: Google Fonts (Ubuntu family)
- **Hosting**: Nginx on Hetzner Cloud
- **CI/CD**: GitHub Actions
- **Version Control**: Git

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic HTTP server for local development (optional)
- For deployment: SSH access to your server

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/HaithamAmireh/portfolio2024V2.git
   cd portfolio2024V2
   ```

2. **Run locally**
   
   **Option 1: Direct file opening**
   - Simply open `index.html` in your web browser
   
   **Option 2: Using Python HTTP server**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```
   
   **Option 3: Using Node.js http-server**
   ```bash
   npx http-server -p 8000
   # Visit http://localhost:8000
   ```

3. **Start developing**
   - Edit HTML in `index.html`
   - Modify styles in `styles.css`
   - Add JavaScript functionality in `script.js`

## 🏗 Project Structure

```
portfolio2024V2/
├── .github/
│   └── workflows/
│       └── deploy_hetzner.yml    # Automated deployment workflow
├── images/                       # Image assets
│   ├── 1.png
│   ├── 2.jpg
│   ├── 3.png                    # Background image
│   ├── favicon.ico              # Site icon
│   └── naruto.png              # Hero section image
├── HaithamAmireh.pdf           # Resume (old version)
├── HaithamAmireh25.pdf         # Current resume
├── index.html                  # Main HTML file
├── script.js                   # JavaScript animations and interactions
├── styles.css                  # CSS styles and responsive design
└── README.md                   # This file
```

## 🎨 Key Sections

### Hero Section
- Professional introduction
- Character illustration
- Brief overview of experience and expertise

### Skills Terminal
- Interactive terminal displaying technical skills
- Categories: DevOps, Programming, Tools, Languages
- Glitch animation effects on hover

### Projects Showcase
- Grid layout of featured projects
- 3D hover effects with mouse tracking
- Direct links to source code and live demos

### Contact Information
- Email and phone contact details
- Downloadable resume (PDF)

## 🚀 Deployment

### Automated Deployment (Current Setup)

The project uses GitHub Actions for automated deployment to Hetzner Cloud:

1. **Push to main branch** triggers deployment
2. **Files are copied** via SCP to the server
3. **Nginx is reloaded** automatically

### Manual Deployment

1. **Upload files** to your web server directory:
   ```bash
   scp -r * user@yourserver.com:/var/www/html/
   ```

2. **Configure Nginx** (sample configuration):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache static assets
       location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Reload Nginx**:
   ```bash
   sudo systemctl reload nginx
   ```

## 🎯 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Skills**: Modify the terminal output sections
3. **Projects**: Update the projects grid with your own work
4. **Contact**: Change contact details in the contact section
5. **Resume**: Replace `HaithamAmireh25.pdf` with your own resume

### Styling

- **Color Scheme**: Modify CSS variables in `:root` selector in `styles.css`
- **Fonts**: Change Google Fonts import in `index.html` head section
- **Background**: Replace `images/3.png` with your preferred background
- **Animations**: Adjust GSAP animations in `script.js`

### Adding New Sections

1. Add HTML structure in `index.html`
2. Style with CSS in `styles.css`
3. Add any required JavaScript interactions in `script.js`

## 🔧 Configuration

### GitHub Actions Setup

Required repository secrets for automated deployment:

- `HETZNER_HOST`: Your server IP address
- `HETZNER_USER`: SSH username
- `HETZNER_SSH_KEY`: Private SSH key for authentication
- `DEPLOY_PATH`: Target directory path on server

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Haitham Amireh**
- Email: [haithamamireh@gmail.com](mailto:haithamamireh@gmail.com)
- Phone: [+962776520394](tel:+962776520394)
- Portfolio: [Live Site](https://yourdomain.com) <!-- Update with your actual domain -->

---

⭐ **Star this repository if it helped you!**