Main Application
│
├── <GlobalProvider>
│   └── Manages state and context, passing it down to child components.
│
├── Components (src/components)
│   ├── controls
│   │   ├── BackgroundColor.tsx
│   │   │   └── <BackgroundColorControl>
│   │   │       ├── label: string
│   │   │       ├── value: string
│   │   │       └── onChange(newValue: string): void
│   │   │           └── Updates the background color in the global state.
│   │   └── IconSizeControl.tsx
│   │       └── <IconSizeControl>
│   │           ├── label: string
│   │           ├── value: number
│   │           ├── min: number
│   │           ├── max: number
│   │           └── onChange(newValue: number): void
│   │               └── Updates the icon size in the global state.
│   │
│   ├── preview
│   │   └── LivePreview.tsx
│   │       └── <LivePreview>
│   │           ├── Uses the current global state to render:
│   │           │   ├── selectedIcon
│   │           │   ├── selectedBackground
│   │           │   └── selectedIconSize
│   │           └── Renders a live preview of the current configuration.
│   │
│   └── settings
│       ├── clip-art-selector
│       │   └── ClipArtSelector.tsx
│       │       └── <ClipArtSelector>
│       │           ├── Renders a set of predefined icons.
│       │           └── handleIconSelect(icon: React.ElementType)
│       │               └── Updates the selected icon in the global state.
│       └── image-uploader
│           └── ImageUploader.tsx
│               └── <ImageUploader>
│                   ├── Allows users to upload images.
│                   └── Uploads and updates the icon in the global state.
│
├── Controllers (src/controllers)
│   ├── ControlController.tsx
│   │   └── <ControlController>
│   │       ├── Renders controls passed via props.
│   │       └── Maps through controls and renders dynamic components.
│   │
│   ├── DisplayController.tsx
│   │   └── <DisplayController>
│   │       ├── Manages overall control and feature rendering.
│   │       └── Combines <FeatureController> and <ControlController> based on state.
│   │
│   └── FeatureController.tsx
│       └── <FeatureController>
│           ├── Manages feature tabs (ClipartSelector, ImageUploader)
│           └── handleChange(event, newValue: number)
│               └── Switches between feature tabs.
│
├── Handlers (src/handlers)
│   ├── controlHandlers.ts
│   │   └── getAllowedControls(packageType, role, state, dispatch)
│   │       └── Returns the list of controls based on user role and package.
│   │
│   └── featureHandlers.ts
│       └── getAllowedFeatures(packageType, role)
│           └── Returns the list of features based on the role and package.
│
├── Providers (src/providers)
│   ├── GlobalContext.tsx
│   │   └── Creates and provides global context.
│   │
│   └── reducer.ts
│       └── globalReducer(state, action)
│           ├── Handles actions:
│           │   ├── SET_ICON
│           │   ├── SET_BACKGROUND
│           │   ├── SET_ICON_SIZE
│           │   ├── SET_AUTHENTICATION
│           │   ├── SET_PACKAGE_TYPE
│           │   ├── SET_ROLE
│           │   ├── SET_FEATURES
│           │   └── SET_CONTROLS
│           └── Updates the state accordingly.
│
├── Configurations (src/config)
│   ├── controlConfig.ts
│   │   └── generateControls(state, dispatch)
│   │       └── Generates control configurations for the user.
│   │
│   └── featureAccessConfig.ts
│       └── Holds the access configurations for each feature.
│
├── Library (src/lib)
│   └── icon-splash-generator.tsx
│       └── <IconSplashGenerator>
│           ├── Combines all controllers, preview, and settings.
│           └── Serves as the main component of the library.
│
├── Utils (src/utils)
│   └── actionTypes.ts
│       └── Holds action type constants:
│           ├── SET_ICON
│           ├── SET_BACKGROUND
│           ├── SET_ICON_SIZE
│           ├── SET_AUTHENTICATION
│           └── SET_CONTROLS
│
└── Types (src/types)
    └── index.ts
        ├── Defines type aliases:
        │   ├── PackageType
        │   ├── RoleType
        │   └── FeatureKey
        └── Interfaces:
            ├── FeatureAccess
            ├── RoleBasedAccess
            ├── ControlConfig
            └── GlobalState
