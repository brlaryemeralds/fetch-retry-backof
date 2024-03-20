async function fetchRetryBackoff(url, options = {}, retries = 3, backoff = 300) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Fetch failed');
    return response;
  } catch (error) {
    if (retries > 1) {
      await new Promise(resolve => setTimeout(resolve, backoff));
      return fetchRetryBackoff(url, options, retries - 1, backoff * 2);
    } else {
      throw error;
    }
  }
}

module.exports = { fetchRetryBackoff };
