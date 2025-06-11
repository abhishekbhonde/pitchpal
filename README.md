# PitchPal - AI-Powered Pitch Deck Generator

<div align="center">
  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="PitchPal Logo" width="200" height="200" style="border-radius: 20px;">
  
  <h3>Transform Your Startup Ideas Into Investor-Ready Pitch Decks</h3>
  
  [![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/abhishekbhonde/pitchpal)
  [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
  [![Version](https://img.shields.io/badge/version-1.0.0-orange)](package.json)
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)](https://supabase.com/)
</div>

## 🚀 Overview

PitchPal is an AI-powered platform that helps entrepreneurs create professional, investor-ready pitch decks in minutes. Using advanced artificial intelligence, it transforms your startup ideas into comprehensive presentations complete with market analysis, financial projections, and compelling narratives.

### ✨ Key Features

- **🤖 AI-Powered Generation**: Advanced AI creates comprehensive pitch decks from your startup description
- **🎤 Voice Narration**: Professional AI-generated voice synthesis with ElevenLabs integration
- **📊 Market Analysis**: Automated market research and competitive landscape analysis
- **🎨 Professional Templates**: Industry-specific templates for various business sectors
- **👥 Collaboration Tools**: Team collaboration features for Pro and Enterprise users
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🔒 Secure & Private**: Enterprise-grade security with data encryption
- **📈 Analytics Dashboard**: Track pitch performance and engagement metrics

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Shadcn/UI** - Beautiful and accessible UI components
- **Lucide React** - Modern icon library

### Backend & Services
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **ElevenLabs API** - AI voice synthesis
- **OpenAI API** - AI content generation (optional)

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher)
- **Git** (for version control)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekbhonde/pitchpal.git
cd pitchpal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```env
# Supabase Configuration (Required)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# ElevenLabs Configuration (Optional - for voice features)
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key

# OpenAI Configuration (Optional - for enhanced AI features)
VITE_OPENAI_API_KEY=your_openai_api_key
```

### 4. Database Setup

The project uses Supabase for the backend. The database schema is automatically managed through migrations located in `supabase/migrations/`.

#### Database Schema

The main table structure:

```sql
-- Pitches table
CREATE TABLE pitches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT,
  pitch_data JSON,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security enabled
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Policies for user data access
CREATE POLICY "Users can read own pitches" ON pitches
  FOR SELECT USING (user_email = email());

CREATE POLICY "Users can insert own pitches" ON pitches
  FOR INSERT WITH CHECK (user_email = email());

CREATE POLICY "Users can update own pitches" ON pitches
  FOR UPDATE USING (user_email = email());

CREATE POLICY "Users can delete own pitches" ON pitches
  FOR DELETE USING (user_email = email());
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
pitchpal/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn/UI components
│   │   ├── Footer.tsx     # Application footer
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── PitchCard.tsx  # Pitch display card
│   │   └── VoicePlayer.tsx # AI voice player
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   │   ├── supabaseClient.ts    # Supabase configuration
│   │   ├── elevenlabsClient.ts  # ElevenLabs integration
│   │   └── mockPitchGenerator.ts # AI pitch generation
│   ├── pages/             # Application pages
│   │   ├── LandingPage.tsx # Home page
│   │   ├── CreatePitch.tsx # Pitch creation
│   │   ├── Dashboard.tsx   # User dashboard
│   │   └── ...            # Other pages
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   └── App.tsx            # Main application component
├── supabase/
│   └── migrations/        # Database migrations
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript type checking

# Production
npm run build:prod      # Production build with type checking
```

## 🌟 Features Deep Dive

### AI Pitch Generation

The core feature of PitchPal is its AI-powered pitch generation:

1. **Input Processing**: Users describe their startup idea
2. **AI Analysis**: Advanced algorithms analyze the input for key components
3. **Content Generation**: AI creates comprehensive pitch content including:
   - Executive summary
   - Problem statement
   - Solution overview
   - Market analysis
   - Business model
   - Financial projections
   - Competitive analysis

### Voice Narration

PitchPal integrates with ElevenLabs for professional voice synthesis:

- **Multiple Voice Options**: Choose from various professional voices
- **Customizable Settings**: Adjust stability, clarity, and style
- **Real-time Generation**: Generate voice narration on-demand
- **Download Support**: Export audio files for presentations

### User Authentication

Secure authentication powered by Supabase:

- **Email/Password Authentication**: Standard login system
- **Session Management**: Persistent login sessions
- **Password Recovery**: Secure password reset functionality
- **User Profiles**: Customizable user profiles and settings

### Data Security

Enterprise-grade security measures:

- **Row Level Security (RLS)**: Database-level access control
- **Data Encryption**: All data encrypted in transit and at rest
- **User Isolation**: Complete data separation between users
- **GDPR Compliance**: Privacy-first approach to data handling

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. Key customization points:

- **Color Scheme**: Modify `tailwind.config.js` for custom colors
- **Typography**: Update font families and sizes
- **Components**: Customize Shadcn/UI components in `src/components/ui/`

### Themes

The application supports light and dark themes:

```typescript
// Theme switching logic in components
const { theme, setTheme } = useTheme()
```

## 📱 Responsive Design

PitchPal is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Netlify (Recommended)

The project is configured for Netlify deployment:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Environment Variables**: Set up environment variables in Netlify dashboard
3. **Build Settings**: Use the included `netlify.toml` configuration
4. **Deploy**: Automatic deployments on git push

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

### Environment Variables for Production

Ensure these environment variables are set in your production environment:

```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_supabase_anon_key
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key
NODE_VERSION=18
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Strategy

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API and database integration testing
- **E2E Tests**: Full user journey testing

## 🔍 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

#### Environment Variables

```bash
# Check if environment variables are loaded
console.log(import.meta.env.VITE_SUPABASE_URL)
```

#### Database Connection

```bash
# Test Supabase connection
npm run test:db
```

### Performance Optimization

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Use WebP format for images
- **Bundle Analysis**: Analyze bundle size with `npm run analyze`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- **Code Style**: Follow ESLint configuration
- **Commit Messages**: Use conventional commit format
- **Testing**: Add tests for new features
- **Documentation**: Update README for significant changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Supabase** - Backend infrastructure
- **ElevenLabs** - AI voice synthesis
- **Shadcn/UI** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing frontend framework

## 📞 Support

### Getting Help

- **Documentation**: Check this README and inline code comments
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact us at support@pitchpal.ai

### Community

- **Discord**: Join our Discord community
- **Twitter**: Follow [@PitchPalAI](https://twitter.com/pitchpalai)
- **LinkedIn**: Connect with us on LinkedIn

## 🗺️ Roadmap

### Upcoming Features

- [ ] **Advanced Analytics**: Detailed pitch performance metrics
- [ ] **Team Collaboration**: Real-time collaborative editing
- [ ] **Custom Branding**: White-label solutions for enterprises
- [ ] **API Access**: RESTful API for third-party integrations
- [ ] **Mobile App**: Native iOS and Android applications
- [ ] **Advanced AI**: GPT-4 integration for enhanced content generation

### Version History

- **v1.0.0** - Initial release with core features
- **v0.9.0** - Beta release with voice generation
- **v0.8.0** - Alpha release with basic pitch generation

---

<div align="center">
  <p>Made with ❤️ by the PitchPal Team</p>
  <p>
    <a href="https://pitchpal.ai">Website</a> •
    <a href="https://github.com/abhishekbhonde/pitchpal">GitHub</a> •
    <a href="https://twitter.com/pitchpalai">Twitter</a> •
    <a href="mailto:support@pitchpal.ai">Email</a>
  </p>
</div>