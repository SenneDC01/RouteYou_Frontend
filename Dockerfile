# Use the official NGINX image as the base image
FROM nginx:latest
# Copy the entire .next directory to the NGINX HTML root
COPY .next /usr/share/nginx/html/.next
# Copy the custom NGINX configuration to the configuration directory
COPY custom.conf /etc/nginx/conf.d/custom.conf
# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf
