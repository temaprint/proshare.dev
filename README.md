# ProShare - Find Your Next Co-founder

![](/public/ProShare.png)

A platform connecting indie founders and developers through project sharing and profit-sharing arrangements.

## 🚀 About ProShare

ProShare helps indie founders and developers find each other by sharing project ideas and profit-sharing arrangements. Whether you have a brilliant idea that needs technical expertise or you're a developer looking for your next venture, ProShare connects passionate creators.

## ✨ Features

- **Project Discovery**: Browse innovative startup ideas from creators worldwide
- **Multilingual Support**: Available in English and Russian
- **Profit Sharing**: Transparent revenue sharing arrangements
- **Direct Contact**: Connect directly with project creators
- **GitHub Integration**: View source code and contribute to projects
- **Responsive Design**: Works perfectly on all devices

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build) - Fast, modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [React](https://reactjs.org) - For interactive components
- **Internationalization**: Built-in i18n support for English and Russian
- **Deployment**: Static site hosting compatible

## 🏗 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ProjectCard.astro
│   ├── data/               # Static data files
│   │   ├── projects.json   # Project listings
│   │   └── i18n.json      # Translation strings
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Homepage
│   │   ├── projects.astro # Projects listing
│   │   ├── submit.astro   # Submit project form
│   │   ├── about.astro    # About page
│   │   ├── projects/      # Dynamic project pages
│   │   └── ru/           # Russian language routes
│   └── utils/            # Utility functions
│       └── i18n.ts       # Internationalization helpers
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:temaprint/proshare.dev.git
cd proshare.dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🌍 Internationalization

ProShare supports multiple languages:

- **English** (default): Available at `/`
- **Russian**: Available at `/ru/`

Language switching is handled automatically with proper URL routing and content translation.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add Projects**: Submit your own projects through the website
2. **Improve Translations**: Help improve Russian translations or add new languages
3. **Bug Reports**: Report issues on GitHub
4. **Feature Requests**: Suggest new features for the platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Website**: [proshare.dev](https://proshare.dev)
- **GitHub**: [github.com/temaprint/proshare.dev.git](https://github.com/temaprint/proshare.dev)

## 💬 Contact

For questions or support, reach out through:
- GitHub Issues
- Website contact form

---

Made with ❤️ and [Astro](https://astro.build)