# Node.js Web Server Assignment 1

This project is a basic Node.js web server built to meet the requirements of the assignment. It demonstrates the creation of a web server using Node.js's `http` module, implements multiple routes, and handles dynamic content and error responses.

## Assignment Requirements and Fulfillment

1. **Create a Web Server:**
   - A Node.js server is created using the built-in `http` module and listens on `http://localhost:3000`.

2. **Static Routes:**
   - `/` (Home): Returns a welcome message.
   - `/about`: Provides a brief introduction.
   - `/contact`: Displays contact information.
   
<img width="513" alt="1" src="https://github.com/user-attachments/assets/e0754df0-e0d3-4a03-9a47-1ffbfcf55ade" />
<img width="502" alt="2" src="https://github.com/user-attachments/assets/9a564037-e224-425d-9a29-1c846a8f3660" />
<img width="541" alt="3" src="https://github.com/user-attachments/assets/a456d584-cb65-45d6-9da3-d1c2c020da2a" />

3. **Dynamic Routes:**
   - `/products`: Returns a list of hardcoded products in JSON format.
   - `/products/:id`: Fetches and returns a product by its ID. If the product does not exist, it responds with a `404` error.
   - 
<img width="541" alt="4" src="https://github.com/user-attachments/assets/18ede34e-1613-44f9-b856-b46063219341" />
<img width="501" alt="5" src="https://github.com/user-attachments/assets/a2c9784a-6c9e-4fb9-a836-d31f960b290a" />

4. **Query Parameters:**
   - `/products?category=<category>`: Filters products by the specified category and returns them in JSON format.
   
<img width="537" alt="7" src="https://github.com/user-attachments/assets/f9bbfedb-9acb-41a5-a19b-6b125a501eb0" />

5. **Error Handling:**
   - Returns a `404 Not Found` message for undefined routes and invalid product IDs.
<img width="487" alt="6" src="https://github.com/user-attachments/assets/2915ee2e-deb2-4503-8746-de4fdd9ec637" />

6. **Custom Headers:**
   - The `Content-Type` header is set appropriately for plain text (`text/plain`) and JSON (`application/json`) responses.

** Quang bui **
