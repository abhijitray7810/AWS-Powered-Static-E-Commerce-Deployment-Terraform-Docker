# Use Nginx to serve static HTML/CSS/JS
FROM nginx:alpine

# Copy your static website files to Nginx html directory
COPY ./website /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
