#!/bin/bash

# Create destination images directory
mkdir -p public/images/destinations

# Download placeholder destination images
curl -o public/images/destinations/barcelona.jpg "https://via.placeholder.com/800x600?text=Barcelona"
curl -o public/images/destinations/kyoto.jpg "https://via.placeholder.com/800x600?text=Kyoto"
curl -o public/images/destinations/bali.jpg "https://via.placeholder.com/800x600?text=Bali"
curl -o public/images/destinations/new-york.jpg "https://via.placeholder.com/800x600?text=New+York"
curl -o public/images/destinations/cape-town.jpg "https://via.placeholder.com/800x600?text=Cape+Town"
curl -o public/images/destinations/santorini.jpg "https://via.placeholder.com/800x600?text=Santorini"

echo "Destination images downloaded successfully!"
