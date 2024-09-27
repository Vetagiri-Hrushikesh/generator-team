Main Application Structure and Description:
├── Main Application (Root)
│   ├── <GlobalProvider>
│   │   Manages global state and context, passing it down to child components.
│
├── src - Source directory for the application's code.
│   ├── components - Reusable UI components.
│   │   ├── controls
│   │   │   ├── BackgroundColor.tsx - Allows users to select a background color.
│   │   │   └── IconSizeControl.tsx - Slider control for adjusting icon size.
│   │   ├── preview
│   │   │   └── LivePreview.tsx - Shows a live preview of the current settings.
│   │   └── settings
│   │       ├── clip-art-selector
│   │       │   └── ClipArtSelector.tsx - Interface for selecting clip-art icons.
│   │       └── image-uploader
│   │           └── ImageUploader.tsx - Interface for uploading images.
│   ├── config
│   │   ├── controlAccessConfig.ts - Defines control access based on roles.
│   │   └── featureAccessConfig.ts - Defines feature access based on roles.
│   ├── controllers
│   │   ├── ControlController.tsx - Renders controls based on configurations.
│   │   ├── DisplayController.tsx - Manages rendering of features and controls.
│   │   └── FeatureController.tsx - Manages feature tabs and selection.
│   ├── handlers
│   │   ├── controlHandlers.ts - Fetches control configurations.
│   │   └── featureHandlers.ts - Determines accessible features based on role.
│   ├── lib
│   │   └── icon-splash-generator.tsx - Main component, integrating all parts.
│   ├── providers
│   │   ├── GlobalContext.tsx - Provides global context for state management.
│   │   └── reducer.ts - Contains reducer functions for state updates.
│   ├── types
│   │   └── index.ts - Defines TypeScript types and interfaces for the app.
│   └── utils
│       └── actionTypes.ts - Contains constants for action types in state management.
│
├── tsconfig.json - Configures TypeScript for the project.
├── tsconfig.lib.json - TypeScript configuration for library builds.
├── tsconfig.spec.json - TypeScript configuration for specifications.
└── vite.config.ts - Configuration for the Vite build tool.

File Breakdown and Functionality:
- **GlobalProvider**: Top-level component that provides a global state context to all child components, ensuring state is accessible throughout the application.
- **Components**: Organized into sub-directories for controls, previews, and settings, each component is designed to handle specific user interactions and reflect changes in the global state.
- **Configurations**: Contains configuration files that outline access controls and feature availability based on user roles, crucial for role-based access control.
- **Controllers**: These components orchestrate the rendering of the UI based on the state, handling logic to display appropriate components as per the current configuration.
- **Handlers**: Dedicated to fetching and computing configurations for controls and features, ensuring that only permissible elements are active based on the user's role and permissions.
- **Providers**: Manage the state context and handle state updates through reducers, facilitating global state management across the application.
- **Types**: Centralizes all TypeScript type definitions used across the application, promoting consistency and aiding in maintaining type safety.
- **Utils**: Holds utility constants such as action types, which are used across the application to ensure consistent handling of state changes.
- **Library Component (icon-splash-generator.tsx)**: Acts as the main component that ties together various controllers and settings, encapsulating the entire functionality of the icon splash generator library.
