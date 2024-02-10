# DNS Resolver

## Overview

The **DNS Resolver** is a backend application developed to efficiently resolve Domain Name System (DNS) queries. Built using Node.js, this application provides a robust and scalable solution for translating domain names into IP addresses.

## Features

1. **Asynchronous DNS Resolution:** The application utilizes the asynchronous nature of Node.js to handle multiple DNS queries concurrently, ensuring optimal performance and responsiveness.

2. **Caching Mechanism:** To enhance efficiency, the resolver incorporates a caching mechanism that stores previously resolved DNS queries. Cached results are retrieved quickly, reducing the need for redundant queries and improving overall response time.

3. **Configurable Time-to-Live (TTL):** The caching system includes a configurable Time-to-Live (TTL) for cached records, allowing administrators to control the duration for which resolved DNS entries remain valid.

4. **Logging and Monitoring:** The application includes comprehensive logging features to track DNS resolution requests, responses, and errors. Monitoring tools can be easily integrated to provide insights into the performance and health of the resolver.

5. **RESTful API:** A user-friendly RESTful API is exposed to facilitate easy integration with other applications or services. Clients can make HTTP requests to the resolver, providing the domain name as a parameter and receiving the corresponding IP address in the response.

6. **Security Measures:** The Node.js DNS Resolver implements security best practices, such as input validation and sanitization, to prevent potential vulnerabilities. Additionally, it supports configurable rate limiting to protect against abuse or malicious activities.

## Getting Started

### Prerequisites

- Node.js installed on the server
- Internet connectivity for external DNS resolution

### Installation

1. Clone the repository: `git clone https://github.com/Desmond167/dns-resolver.git`
2. Navigate to the project directory: `cd dns-resolver`
3. Install dependencies: `npm install`
4. Configure the application settings in the `config.js` file.

### Usage

1. Start the application: `npm start`
2. The resolver is now accessible through the specified API endpoint (e.g., `http://localhost:3000/resolve?domain=example.com`).

## Contribution and Support

Contributions to the DNS Resolver project are welcome. Feel free to submit issues, pull requests, or suggestions on the [GitHub repository](https://github.com/Desmond167/dns-resolver.git).

For support or questions, please contact [career.soham.dev@gmail.com](mailto:career.soham.dev@gmail.com).

## License

This project is licensed under the [MIT License](LICENSE.md).