const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Run the build
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  
  console.log('Build completed successfully');
  
  // Copy index.html to 404.html to handle SPA routing
  fs.copyFile(
    path.join(__dirname, '../build/index.html'), 
    path.join(__dirname, '../build/404.html'),
    (err) => {
      if (err) {
        console.error('Error copying index.html to 404.html:', err);
        return;
      }
      
      console.log('Created 404.html for handling routes');
      
      // Deploy to GitHub Pages
      exec('npx gh-pages -d build', (error, stdout, stderr) => {
        if (error) {
          console.error(`Deployment error: ${error}`);
          return;
        }
        
        console.log('Successfully deployed to GitHub Pages');
      });
    }
  );
});