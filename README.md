# **Kaiju Klimate**

![Kaiju Klimate Logo](/src/assets/monster_weather_logo.png)

## **Overview**
Welcome to **Kaiju Klimate**—the ultimate weather app with a monstrous twist! Get your weather updates like never before, with forecasts described in terms of kaiju (giant monster) behavior. Whether it’s Godzilla basking in the sun or Mothra stirring up strong winds, Kaiju Klimate turns every weather report into an epic event.

No more boring forecasts—Kaiju Klimate makes checking the weather a daily adventure!

## **Features**
- **Kaiju-Themed Weather Forecast:** Receive daily weather updates with kaiju-inspired descriptions. For example, instead of just "rainy," Kaiju Klimate might say, "Ghidora’s causing a downpour today!"
- **Location-Based Forecasts:** Enter your location to get customized kaiju-themed weather updates specific to your area.
- **5-Day Forecast:** Plan ahead with a 5-day forecast, each day featuring a unique kaiju-themed weather description.

## **Quick Start**

### **Installation**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/kaiju-klimate.git
   cd kaiju-klimate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   - Go to `http://localhost:3000` in your browser to see Kaiju Klimate in action!

### **Raycast Integration**
- **Check Weather:** Quickly check today’s kaiju-themed weather forecast from your Raycast command palette.
- **Toggle Mode:** Switch between Normal and Kaiju Mode on the fly.
- **Get 5-Day Forecast:** Access the 5-day kaiju-themed weather forecast directly from Raycast.

### **Configuration**
- **Clerk Authentication:** Ensure your environment variables include your Clerk API key.
- **Convex Backend:** Make sure Convex is set up to store user preferences, weather data, and more.

## **Dependencies**

### **Production Dependencies**
- **[@clerk/clerk-react](https://www.npmjs.com/package/@clerk/clerk-react):** ^5.5.0 - Clerk integration for authentication.
- **[@clerk/themes](https://www.npmjs.com/package/@clerk/themes):** ^2.1.25 - Theming support for Clerk components.
- **[convex](https://www.npmjs.com/package/convex):** ^1.15.0 - Convex backend for managing data and serverless functions.
- **[react](https://www.npmjs.com/package/react):** ^18.3.1 - React library for building user interfaces.
- **[react-dom](https://www.npmjs.com/package/react-dom):** ^18.3.1 - React DOM integration for rendering components in the browser.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** ^6.26.1 - React Router for handling navigation and routing.

### **Development Dependencies**
- **[@eslint/js](https://www.npmjs.com/package/@eslint/js):** ^9.9.0 - ESLint configurations for JavaScript.
- **[@types/react](https://www.npmjs.com/package/@types/react):** ^18.3.3 - TypeScript type definitions for React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom):** ^18.3.0 - TypeScript type definitions for React DOM.
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react):** ^4.3.1 - Vite plugin for React support.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer):** ^10.4.20 - PostCSS plugin to parse CSS and add vendor prefixes.
- **[eslint](https://www.npmjs.com/package/eslint):** ^9.9.0 - ESLint for identifying and fixing problems in JavaScript code.
- **[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react):** ^7.35.0 - ESLint plugin for React-specific linting rules.
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks):** ^5.1.0-rc.0 - ESLint plugin for enforcing rules of hooks.
- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh):** ^0.4.9 - ESLint plugin for React Fast Refresh.
- **[globals](https://www.npmjs.com/package/globals):** ^15.9.0 - Global variables and environments for JavaScript.
- **[postcss](https://www.npmjs.com/package/postcss):** ^8.4.41 - A tool for transforming CSS with JavaScript.
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss):** ^3.4.10 - A utility-first CSS framework for styling.
- **[vite](https://www.npmjs.com/package/vite):** ^5.4.1 - Vite, a next-generation frontend tooling for fast development.

## **APIs Used**
- **Weather API:** Provides real-time weather data that’s transformed into kaiju-themed forecasts.
- **Clerk:** Manages user authentication and preferences.
- **Convex:** Handles backend data management, including storing user settings, weather data, and more.

## **Contributing**
We welcome contributions! Please feel free to submit a pull request or open an issue if you have ideas for new features, improvements, or bug fixes.

## **License**
This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

## **Contact**
For any questions, suggestions, or feedback, feel free to reach out:
- **Email:** david.rod1865@gmail.com
- **GitHub:** [@DavidRod1865](https://github.com/DavidRod1865)