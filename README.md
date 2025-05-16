# Menstrual Health Dashboard & Period Tracker

A modern, responsive menstrual health dashboard and onboarding flow built with React. This app helps users track their cycles, log symptoms, and gain insights into their menstrual health.

## Features

- **Onboarding Flow:**
  - Collects last period date, cycle length, period length, and health conditions.
  - Interactive calendar date picker and range sliders.
- **Personalized Dashboard:**
  - Dynamic cycle phase indicator (Period, Follicular, Fertile, Ovulation, Luteal, Predicted).
  - Cycle day, next period prediction, and sidebar statistics update based on user data.
  - Visual progress bar and phase highlights.
- **Symptom Logging:**
  - Log daily symptoms with intensity sliders and notes.
  - View and update logged symptoms.
- **Statistics & Insights:**
  - Visual charts for cycle history and symptom frequency.
  - Insight cards with recommendations and expected symptoms.
- **Blogs & Resources:**
  - Browse educational articles and subscribe to a newsletter.
- **Modern UI:**
  - Pink accent color and gradients for a friendly, welcoming look.
  - Responsive design with a mobile hamburger menu and desktop navbar.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shrea89/Period_Tracker_website.git
   cd Period_Tracker_website
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
├── public/                  # Static assets (background images, etc.)
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Main app pages (Dashboard, Symptoms, Blogs, etc.)
│   ├── App.jsx              # Main app component
│   └── index.css            # Global styles
├── package.json
├── vite.config.js           # Vite configuration
└── README.md
```

## Customization
- **Accent Color:** Easily change the pink accent in `index.css` or relevant CSS files.
- **Cycle Logic:** Update cycle calculations in `Dashboard.jsx` as needed.
- **Add More Symptoms/Conditions:** Edit the arrays in `Symptoms.jsx` and `OnboardingQuestions.jsx`.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request


## Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Image assets](https://www.freepik.com/) and [SVG icons](https://www.flaticon.com/)

---

**Note:** Image/assets are not pushed here
