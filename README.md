# Quiz Web App - React

A modern, feature-rich quiz and flashcard application built with React, TypeScript, and Vite. This app provides an engaging learning experience with multiple choice questions and interactive flashcards across 24+ categories.

## 🎯 Key Features

- **Dual Learning Modes:** MCQ Quiz and Flashcard modes
- **24+ Categories:** From General Knowledge to Science, History, Movies, and more
- **Smart Timer:** 20 seconds per question with color-coded urgency indicators
- **Keyboard Shortcuts:** Full keyboard navigation for accessibility
- **Detailed Analytics:** Track accuracy, time spent, and performance by difficulty
- **Mark & Review:** Flag questions for later review
- **Responsive Design:** Works seamlessly on desktop and mobile devices

**[📋 View Complete Feature List](./FEATURES.md)** - Quick reference guide with all features and use cases

## 📊 Comparison with Existing Quiz Apps

Wondering how this app compares to popular platforms like Kahoot!, Quizlet, or Duolingo? Check out our comprehensive comparison:

**[📖 View Full Comparison & Real-World Applications](./COMPARISON.md)**

This document covers:
- Feature-by-feature comparison with 5 major quiz platforms
- Unique advantages of this application
- Real-world use cases across education, training, and entertainment
- Deployment scenarios and technical advantages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Satjeet2005/quiz-web-app-react.git

# Navigate to project directory
cd quiz-web-app-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎮 How to Use

1. **Select a Category:** Choose from 24+ topics like Science, History, Movies, etc.
2. **Choose Difficulty:** Pick Easy, Medium, Hard, or Any
3. **Set Question Count:** Select between 10-50 questions
4. **Take the Quiz:** Answer questions using mouse clicks or keyboard shortcuts
5. **Review Results:** View detailed analytics and solutions

### Keyboard Shortcuts

- **Arrow Keys (← →):** Navigate between questions
- **Number Keys (1-4):** Select answer options
- **M:** Mark question for review
- **Esc:** Unselect current answer
- **Enter:** Submit quiz

## 🏗️ Tech Stack

- **Frontend:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **Styling:** TailwindCSS
- **Charts:** Chart.js + React-ChartJS-2
- **Animations:** Motion (Framer Motion)
- **API:** Open Trivia Database (opentdb.com)
- **HTTP Client:** Axios
- **Form Handling:** React Hook Form
- **Icons:** Phosphor Icons

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── MCQWorkspace/ # Quiz interface
│   ├── Flashcard/    # Flashcard mode
│   ├── Result/       # Results and analytics
│   └── ...
├── hooks/            # Custom React hooks
├── HTTP/             # API client and services
├── data/             # Static data and configurations
└── assets/           # Images and media files
```

## 🌐 Real-World Applications

This quiz app is perfect for:

- **Education:** Classroom assessments, test prep, student self-study
- **Corporate Training:** Employee onboarding, certification prep
- **Entertainment:** Trivia nights, team building, social gaming
- **Personal Development:** Brain training, hobby enhancement, self-assessment

[Learn more about real-world applications →](./COMPARISON.md#real-world-applications)

## 📝 License

This project is open-source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Satjeet2005/quiz-web-app-react/issues).

---

# React + TypeScript + Vite - Developer Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
