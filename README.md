# Agents4Science Website Clone

This is a complete clone of the [Agents4Science 2025](https://agents4science.stanford.edu/) website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Exact Replication**: Faithfully reproduces the original website's design and content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component-Based**: Modular architecture with reusable components
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Pages

1. **Home Page** (`/`) - Main conference information, vision, goals, and organizers
2. **FAQ Page** (`/faq`) - Frequently asked questions about the conference
3. **Call for Papers** (`/call-for-papers`) - Submission guidelines and requirements

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agents4science-clone
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

## Project Structure

```
agents4science-clone/
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
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

The website can be easily customized by:

- Modifying content in the page components
- Updating styles in `globals.css` and Tailwind classes
- Adding new pages in the `app` directory
- Customizing the color scheme in `tailwind.config.js`

## Deployment

The project can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License allows you to:
- Use the code commercially
- Modify the code
- Distribute the code
- Use it privately
- Sublicense it

## Contact

For questions about this clone project, please refer to the original website at [https://agents4science.stanford.edu/](https://agents4science.stanford.edu/).
