const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const favicons = require('favicons');

// Configuration
const source = "./src/assets/logo.png"; // Use your existing logo if available
const outputPath = "./public";

// If no logo exists, create a simple one
async function createLogoIfNeeded() {
  if (fs.existsSync(source)) {
    return source;
  }
  
  // Create the assets directory if it doesn't exist
  const assetDir = path.dirname(source);
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
  }
  
  // Create a simple canvas with "TR" text
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  
  // Background color
  ctx.fillStyle = '#0066cc'; // Using your theme primary color
  ctx.fillRect(0, 0, 512, 512);
  
  // Add a decorative element - compass/globe style
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(256, 256, 200, 0, Math.PI * 2);
  ctx.fill();
  
  // Add grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  
  // Horizontal line
  ctx.beginPath();
  ctx.moveTo(56, 256);
  ctx.lineTo(456, 256);
  ctx.stroke();
  
  // Vertical line
  ctx.beginPath();
  ctx.moveTo(256, 56);
  ctx.lineTo(256, 456);
  ctx.stroke();
  
  // Add "TR" text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 180px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TR', 256, 256);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(source, buffer);
  
  return source;
}

// Generate favicons
async function generateFavicons() {
  const logoPath = await createLogoIfNeeded();
  
  const configuration = {
    path: "/", // Path for generated files
    appName: "Travel Recommender",
    appShortName: "TravelRec",
    appDescription: "Find your perfect travel destination",
    developerName: "Travel Recommender Team",
    developerURL: "https://travelrecommender.com",
    background: "#ffffff",
    theme_color: "#0066cc",
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      windows: true,
      yandex: false
    }
  };
  
  try {
    const response = await favicons(logoPath, configuration);
    
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    // Write the files
    response.images.forEach(image => {
      fs.writeFileSync(
        path.join(outputPath, image.name),
        image.contents
      );
    });
    
    response.files.forEach(file => {
      fs.writeFileSync(
        path.join(outputPath, file.name),
        file.contents
      );
    });
    
    // Update the HTML file with the favicon links
    const faviconHtml = response.html.join('\n');
    console.log("Add the following to your HTML head section:");
    console.log(faviconHtml);
    
    // Create a simple HTML snippet file for reference
    fs.writeFileSync(
      path.join(outputPath, 'favicon-snippet.html'),
      faviconHtml
    );
    
    console.log(`Favicons generated successfully in ${outputPath}`);
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();