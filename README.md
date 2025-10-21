# The Likely Hood - Phish.net Project

## Overview
The Likely Hood is a web application that provides real-time statistics for Phish performances, specifically focusing on the song "Harry Hood." The application fetches data directly from the Phish.net API and displays information such as the last performance date, location, and the number of shows since the last performance.

## Project Structure
```
the-likely-hood-phishnet
├── public
│   └── index.html          # HTML structure for the application
├── src
│   ├── js
│   │   ├── app.js         # Main JavaScript entry point
│   │   └── phishnet-api.js # Functions to interact with the Phish.net API
│   ├── css
│   │   └── styles.css      # CSS styles for the application
│   └── utils
│       └── date-utils.js   # Utility functions for date manipulation
├── package.json            # npm configuration file
├── .gitignore              # Files and directories to ignore by Git
├── README.md               # Documentation for the project
└── LICENSE                 # Licensing information for the project
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/the-likely-hood-phishnet.git
   cd the-likely-hood-phishnet
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   You can use a local server to run the application. For example, you can use `live-server` or any other static server:
   ```bash
   npx live-server public
   ```

## Usage
- Open your browser and navigate to `http://localhost:8080` (or the port specified by your server).
- The application will display real-time statistics for Phish performances.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.