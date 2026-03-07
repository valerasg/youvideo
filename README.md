# YouVideo 🎥

A modern YouTube clone application built with React 19, Material UI 7, and the RapidAPI YouTube V3 interface.

## 🚀 Features

- **Video Search**: Search for any video content.
- **Category Feeds**: Browse videos by categories (Coding, Music, Education, etc.).
- **Video Playback**: Watch videos directly in the app using React Player.
- **Channel Details**: View channel information and their video lists.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop.
- **Clean UI**: Built with the latest Material UI components and Emotion styling.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **UI Framework**: [Material UI 7](https://mui.com/)
- **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **API Requests**: [Axios](https://axios-http.com/)
- **Video Player**: [React Player](https://github.com/cookpete/react-player)
- **Deployment**: [GitHub Pages](https://pages.github.com/) & [GitHub Actions](https://github.com/features/actions)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/valerasg/youvideo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
   ```env
   REACT_APP_RAPID_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📜 Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run test:ci`: Runs tests once (ideal for CI/CD).
- `npm run deploy`: Builds and deploys the app to GitHub Pages.

## 🧪 Testing

The project includes a testing suite using React Testing Library and Jest.
To run tests with coverage:
```bash
npm run test:coverage
```

## 🚢 Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `master` branch.

Live Demo: [https://valerasg.github.io/youvideo/](https://valerasg.github.io/youvideo/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/valerasg/youvideo/issues).

---
Built with ❤️ by [valerasg](https://github.com/valerasg)
