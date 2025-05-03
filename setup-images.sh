#!/bin/bash
# Setup images for Travel Recommender project

# Create directories
mkdir -p public/images
mkdir -p public/images/team

# Download placeholder images
curl -o public/images/placeholder.jpg "https://via.placeholder.com/800x600?text=Placeholder"
curl -o public/images/placeholder-profile.jpg "https://via.placeholder.com/150?text=Profile"
curl -o public/images/logo-social.png "https://via.placeholder.com/1200x630?text=Travel+Recommender"

# Team placeholder images
curl -o public/images/team/michael.jpg "https://via.placeholder.com/150?text=Michael"
curl -o public/images/team/sophia.jpg "https://via.placeholder.com/150?text=Sophia"
curl -o public/images/team/james.jpg "https://via.placeholder.com/150?text=James"

echo "Placeholder images downloaded successfully!"
