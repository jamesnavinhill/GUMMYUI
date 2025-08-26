# BlackBox UI Library 🎨

A beautiful, gummy UI component library extracted from BlackBox featuring gorgeous themes, warm color schemes, and that perfect "gummy" aesthetic.

## ✨ Features

- **6 Beautiful Color Schemes**: Honey, Berry, Sage, Sky, Lavender, and Monochrome
- **Dark/Light Mode**: Seamless theme switching
- **Gummy Aesthetic**: Soft shadows, rounded corners, and warm tones
- **Monospace Typography**: Clean, technical feel throughout
- **Background Variants**: Solid colors and gradient backgrounds
- **Responsive Design**: Works beautifully on all screen sizes

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run the demo
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the beautiful UI showcase.

## 🎯 What's Included

### Core Theme System
- CSS custom properties for consistent theming
- Automatic dark/light mode switching
- 6 gorgeous color schemes with accent colors
- Multiple background options (solid + gradients)

### Components
- **ThemeSettings**: Complete theme customization panel
- **Sidebar**: Collapsible navigation with beautiful styling
- **Gummy Panels**: Cards and containers with soft shadows
- **Gummy Buttons**: Standard and accent button styles
- **Gummy Inputs**: Beautiful form elements
- **Typography**: Consistent monospace font hierarchy

### Color Schemes
1. **Warm Honey** (#d4a574) - Cozy and inviting
2. **Soft Berry** (#b67b7b) - Gentle and warm
3. **Gentle Sage** (#8fb08f) - Natural and calming
4. **Calm Sky** (#7ba3c4) - Cool and peaceful
5. **Cozy Lavender** (#a396b6) - Soft and elegant
6. **Soft Monochrome** (#8b7f73) - Classic and subtle

## 🎨 Usage Examples

### Theme Provider
```tsx
import { ThemeProvider } from '@/lib/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  )
}
```

### Using Components
```tsx
import ThemeSettings from '@/components/ThemeSettings'
import Sidebar from '@/components/Sidebar'

// Gummy styled elements
<div className="gummy-panel p-6">
  <button className="gummy-button">Standard Button</button>
  <button className="gummy-button-accent">Accent Button</button>
  <input className="gummy-input" placeholder="Beautiful input" />
</div>
```

### CSS Classes
- `.gummy-panel` - Beautiful card/panel styling
- `.gummy-panel-strong` - Panel with stronger background
- `.gummy-button` - Standard button styling
- `.gummy-button-accent` - Accent colored button
- `.gummy-input` - Form input styling
- `.accent-text` - Text in current accent color
- `.status-dot` - Animated status indicator

## 🛠 Customization

The theme system uses CSS custom properties that can be easily customized:

```css
:root {
  --accent-primary: #your-color;
  --accent-primary-bg: rgba(your-color, 0.12);
  --accent-primary-border: rgba(your-color, 0.25);
}
```

## 📁 Project Structure

```
ui-library/
├── app/
│   ├── globals.css          # Complete theme system
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Demo showcase
├── components/
│   ├── Sidebar.tsx         # Navigation component
│   └── ThemeSettings.tsx   # Theme control panel
├── lib/
│   ├── ThemeContext.tsx    # Theme state management
│   └── utils.ts           # Utility functions
└── README.md              # This file
```

## 🎭 Live Demo Features

The demo application showcases:
- Interactive theme switching
- All 6 color schemes
- Dark/light mode toggle
- Typography hierarchy
- Button variations
- Input components
- Panel layouts
- Real-time theme preview

## 💡 Design Philosophy

This UI library was extracted from BlackBox with the goal of preserving its beautiful "gummy" aesthetic:

- **Warm, inviting colors** that feel approachable
- **Soft shadows and rounded corners** for that gummy feel
- **Monospace typography** for a clean, technical look
- **Consistent theming** across all components
- **Accessibility-focused** design patterns

## 🔥 What Makes It Special

- **Zero business logic** - Pure UI components
- **Theme persistence** - Settings saved in localStorage
- **Smooth animations** - Subtle transitions everywhere
- **Mobile-friendly** - Responsive design patterns
- **Developer-friendly** - Clean, semantic CSS classes

Perfect for projects that need beautiful, consistent UI with that special "gummy" aesthetic! 🎨✨