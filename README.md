# Banshee VTT Documentation

## Features
- Intuitive interface for players and DMs.
- Real-time updates for player actions.
- Customizable character sheets and game rules.
- Integration with popular virtual tabletops.
- Support for various media types and file formats.

## File Structure
- **/src**: Source code for Banshee VTT.
- **/assets**: Images, icons, and other media assets.
- **/docs**: Documentation files including this README.
- **/tests**: Test files to ensure functionality and performance.

## How It Works
Banshee VTT functions by establishing a connection between the DM and the players through a shared platform. When the DM sets up a game, players can join and interact in a virtual environment. The backend runs on Node.js and utilizes WebSocket for real-time communication.

## Data Persistence
Data is persisted using a combination of local storage and server-side databases to maintain user sessions, game states, and player information. This ensures that all progress is saved and can be restored in future sessions.

## Controls
- **Movement**: Use arrow keys or drag-and-drop to move characters.
- **Interactions**: Click on objects to interact, or use context menus for additional options.
- **Chat**: Use the chat window to communicate with players and the DM.

## DM vs Player Differences
- **DM Controls**: DMs have access to advanced features like enemy management, story creation, and game rules editing.
- **Player Controls**: Players can only interact with their characters and the game world as permitted by the DM.

## Technical Details
- Language: JavaScript, with libraries such as React for the frontend and Express for the backend.
- Database: MongoDB for storing user data and game progress.
- Hosting: Deployed using cloud services for scalability and reliability.

---  
*Document Created on: 2026-01-20 15:07:02 UTC*