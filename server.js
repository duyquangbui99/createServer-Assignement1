const http = require('http');
//mock data
const products = [
    { id: 1, name: "Smartphone", category: "electronics" },
    { id: 2, name: "Laptop", category: "electronics" },
    { id: 3, name: "Coffee Maker", category: "home appliances" },
];

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to My Web Server!');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hi, I am Quang, a Grad Student from OCU.');
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at: qbui@example.com or call 123-456-7890.');
    } else if (url.startsWith('/products')) {
        handleProductRoutes(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found - The requested route does not exist.');
    }
});

function handleProductRoutes(req, res) {
    const urlParts = req.url.split('?');
    const path = urlParts[0];
    const query = urlParts[1];

    if (path.startsWith('/products/')) {
        const id = parseInt(path.split('/')[2], 10);
        const product = products.find((p) => p.id === id);
        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Product not found.');
        }
    }

    else if (query && query.startsWith('category=')) {
        const category = query.split('=')[1];
        const filteredProducts = products.filter((p) => p.category === category);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(filteredProducts));
    }

    else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    }
}

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
