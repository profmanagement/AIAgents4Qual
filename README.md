# QualAISummit - AI Agents for Science Conference Website

This is a complete clone of the [Agents4Science 2025](https://agents4science.stanford.edu/) website, adapted for QualAISummit and built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

The website will be available at: `https://profmanagement.github.io/QualAISummit/`

## ✨ Features

- **Exact Replication**: Faithfully reproduces the original Agents4Science website design and content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component-Based**: Modular architecture with reusable components
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **GitHub Pages Ready**: Configured for automatic deployment

## 📄 Pages

1. **Home Page** (`/`) - Main conference information, vision, goals, and organizers
2. **FAQ Page** (`/faq`) - Frequently asked questions about the conference
3. **Call for Papers** (`/call-for-papers`) - Submission guidelines and requirements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/profmanagement/QualAISummit.git
cd QualAISummit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
QualAISummit/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── call-for-papers/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .github/workflows/
│   └── deploy.yml
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── README.md
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and static export
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build static export for GitHub Pages

## 🚀 GitHub Pages Deployment

### Automatic Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch** triggers automatic build and deployment
2. **GitHub Actions workflow** builds the Next.js project
3. **Static export** is generated and deployed to GitHub Pages
4. **Live website** is available at `https://profmanagement.github.io/QualAISummit/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
```

## 🎨 Customization

The website can be easily customized by:

- Modifying content in the page components
- Updating styles in `globals.css` and Tailwind classes
- Adding new pages in the `app` directory
- Customizing the color scheme in `tailwind.config.js`

## 🔧 Configuration

### Next.js Configuration

The project is configured for static export with:
- `output: 'export'` - Enables static site generation
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages compatibility
- `images: { unoptimized: true }` - Disables image optimization for static export

### Tailwind CSS

Custom Tailwind configuration with:
- Responsive breakpoints
- Custom color palette
- Component utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Website**: Based on [Agents4Science 2025](https://agents4science.stanford.edu/) by Stanford University
- **Adaptation**: Modified for QualAISummit conference requirements
- **Technology**: Built with modern web technologies and best practices

## 📞 Contact

For questions about this project, please refer to the original website at [https://agents4science.stanford.edu/](https://agents4science.stanford.edu/).

For questions about QualAISummit, please contact the conference organizers.
