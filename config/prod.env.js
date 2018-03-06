module.exports = {
  NODE_ENV: '"production"',
  API_URL: JSON.stringify(process.env.FIVERINGSDB_API_URL),
  GA_TRACKING_ID: JSON.stringify(process.env.FIVERINGSDB_GA_TRACKING_ID),
  AUTH_URL: JSON.stringify(process.env.FIVERINGSDB_AUTH_URL),
  CLIENT_ID: JSON.stringify(process.env.FIVERINGSDB_CLIENT_ID),
  REDIRECT_URI: JSON.stringify(process.env.FIVERINGSDB_REDIRECT_URI),
}