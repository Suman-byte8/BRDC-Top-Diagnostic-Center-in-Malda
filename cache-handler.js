// Move Next.js cache away from OneDrive to improve performance
// Point to C:\Temp\.next-cache instead (or another fast local drive)

const path = require('path')
const fs = require('fs')

const cacheDir = process.env.NEXT_CACHE_DIR || 'C:\\Temp\\.next-cache'

// Create cache directory if it doesn't exist
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true })
}

module.exports = {
  dir: cacheDir,
  name: 'next-cache',
}
