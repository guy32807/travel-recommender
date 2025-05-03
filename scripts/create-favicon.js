const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const outputPath = "./public";

// Create basic SVG for favicon
const createFaviconFiles = () => {
  // Create simple SVG favicon
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="#0066cc"/>
    <circle cx="32" cy="32" r="20" fill="rgba(255,255,255,0.1)"/>
    <line x1="12" y1="32" x2="52" y2="32" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <line x1="32" y1="12" x2="32" y2="52" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="32" y="38" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">TR</text>
  </svg>`;

  // Ensure output directory exists
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // Write SVG file
  const svgPath = path.join(outputPath, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Created favicon.svg');

  // Create placeholder ICO file (1x1 pixel transparent)
  const icoPixel = Buffer.from([
    0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x01, 0x01, 
    0x00, 0x00, 0x01, 0x00, 0x18, 0x00, 0x0A, 0x00, 
    0x00, 0x00, 0x16, 0x00, 0x00, 0x00, 0x28, 0x00, 
    0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 
    0x00, 0x00, 0x01, 0x00, 0x18, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
    0x00, 0x00
  ]);
  fs.writeFileSync(path.join(outputPath, 'favicon.ico'), icoPixel);
  console.log('Created basic favicon.ico');

  // Create PNG versions
  const sizes = [16, 32, 48, 192];
  for (const size of sizes) {
    const pngContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="#0066cc"/>
      <circle cx="32" cy="32" r="20" fill="rgba(255,255,255,0.1)"/>
      <line x1="12" y1="32" x2="52" y2="32" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <line x1="32" y1="12" x2="32" y2="52" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="32" y="38" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">TR</text>
    </svg>`;
    
    fs.writeFileSync(path.join(outputPath, `favicon-${size}x${size}.svg`), pngContent);
    console.log(`Created favicon-${size}x${size}.svg`);
  }

  // Create manifest.json
  const manifest = {
    "name": "Travel Recommender",
    "short_name": "TravelRec",
    "description": "Find your perfect travel destination",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#0066cc",
    "icons": [
      {
        "src": "/favicon.svg",
        "sizes": "any",
        "type": "image/svg+xml"
      },
      {
        "src": "/favicon-192x192.svg",
        "sizes": "192x192",
        "type": "image/svg+xml"
      }
    ]
  };

  fs.writeFileSync(
    path.join(outputPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Created manifest.json');

  console.log('All favicon files created successfully!');
}

createFaviconFiles();