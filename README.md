# fetch-retry-backoff

A utility to enhance the `fetch` API with retry and exponential backoff capabilities. Useful for handling transient network errors gracefully.

## Installation

Install `fetch-retry-backoff` using npm:

```bash
npm install fetch-retry-backoff
```

## Usage

Import and use `fetchRetryBackoff` to make resilient fetch requests:

```javascript
const { fetchRetryBackoff } = require('fetch-retry-backoff');

// Usage
fetchRetryBackoff('https://api.example.com/data', {}, 3, 300)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));
```

Parameters:
- `url` (string): The URL to fetch.
- `options` (object): Options to pass to the `fetch` call.
- `retries` (number): Maximum number of retry attempts.
- `backoff` (number): Initial backoff delay in milliseconds.

## License

This project is licensed under the MIT License.
