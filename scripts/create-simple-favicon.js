const fs = require('fs');
const path = require('path');

// Configuration
const outputPath = "./public";

// Create output directory if needed
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// Create a simple SVG favicon
const createSVGFavicon = () => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <rect width="32" height="32" fill="#0066cc"/>
    <circle cx="16" cy="16" r="12" fill="#0066cc" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
    <line x1="4" y1="16" x2="28" y2="16" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
    <line x1="16" y1="4" x2="16" y2="28" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
    <text x="16" y="20" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">TR</text>
  </svg>`;

  fs.writeFileSync(path.join(outputPath, 'favicon.svg'), svgContent);
  console.log('Created favicon.svg');
}

// Create a simple HTML favicon configuration
const createHtmlSnippet = () => {
  const htmlSnippet = `<!-- Favicon -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="any">
`;

  fs.writeFileSync(path.join(outputPath, 'favicon-snippet.html'), htmlSnippet);
  console.log('Created favicon-snippet.html');
}

// Create a basic manifest.json
const createManifest = () => {
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
      }
    ]
  };

  fs.writeFileSync(
    path.join(outputPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Created manifest.json');
}

// Execute
createSVGFavicon();
createHtmlSnippet();
createManifest();

console.log('Favicon files created successfully in the public directory.');
console.log('Add the contents of favicon-snippet.html to your HTML head section.');