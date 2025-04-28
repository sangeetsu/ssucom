# Sangeet Sankaramangalam Ulhas - Portfolio Website

This is the professional portfolio website for Sangeet Sankaramangalam Ulhas, a PhD candidate specializing in robotics and autonomous systems at Arizona State University.

## Technology Stack

- **Frontend**: React.js with Bootstrap 5
- **Styling**: CSS and React-Bootstrap components
- **Icons**: FontAwesome
- **Containerization**: Docker with multi-stage build
- **Deployment**: Nginx with Traefik for routing and TLS

## Project Structure

```
portfolio/
├── public/              # Static files
│   ├── assets/          # Images, documents, etc.
│   └── index.html       # HTML entry point
├── src/                 # Source code
│   ├── components/      # React components
│   ├── data/            # Content data files
│   ├── styles/          # CSS styles
│   └── App.js           # Main React component
├── Dockerfile           # Docker configuration
├── .env                 # Environment variables
├── package.json         # Dependencies
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- Docker and Docker Compose
- Traefik (for production deployment)

### Quick Start Guide

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Customize the content**
   - Edit files in the `src/data/` directory to update:
     - Personal information
     - Projects
     - Publications
     - Work experience
     - Education
   - Replace images in `public/assets/` with your own

3. **Install dependencies and test locally**
   ```bash
   npm install
   npm start
   ```
   This will start a development server at http://localhost:3000

4. **Build and test with Docker locally**
   ```bash
   docker build -t my-portfolio .
   docker run -p 8080:80 my-portfolio
   ```
   Access your site at http://localhost:8080

## Deployment

### Setting up with Traefik

1. **Create a Docker network for Traefik**
   ```bash
   docker network create proxy
   ```

2. **Configure your domain**
   - Update the `docker-compose.yaml` file, replacing `sangeetsu.com` with your domain name

3. **Deploy your portfolio**
   ```bash
   docker-compose up -d
   ```

### SSL Certificates

This setup automatically handles SSL certificates through Traefik. Make sure:
- Your domain points to your server
- Ports 80 and 443 are accessible
- Traefik is properly configured as a reverse proxy

## Customization

### Changing the Theme

The website uses Bootstrap themes that can be customized in `src/styles/`:
- Edit color variables in the main CSS file
- Modify component styles as needed

### Adding New Sections

1. Create new React components in `src/components/`
2. Add corresponding data files in `src/data/`
3. Import and add the components to `App.js`

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React.js and Bootstrap
- Deployed with Docker and Traefik
- Icons from FontAwesome

## Contact

For questions or feedback, please reach out at sulhas@asu.edu

