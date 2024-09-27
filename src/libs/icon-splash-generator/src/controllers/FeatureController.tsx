import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import ClipartSelector from '../components/settings/clip-art-selector/ClipArtSelector';
import ImageUploader from '../components/settings/image-uploader/ImageUploader';

interface FeatureControllerProps {
  features: string[]; // Array of feature identifiers to be rendered as tabs.
}

/**
 * FeatureController Component
 * 
 * This component displays a tabbed interface for the available features.
 * Each tab corresponds to a feature, and selecting a tab displays the relevant feature component.
 * 
 * It uses a `selectedTab` state to keep track of the currently active tab and dynamically renders the feature
 * component based on the `features` prop.
 * 
 * @param {FeatureControllerProps} props - The props for the component.
 * @returns JSX.Element - A tabbed interface rendering the appropriate feature component based on the active tab.
 */
const FeatureController: React.FC<FeatureControllerProps> = React.memo(({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0); // Track the currently active tab.

  // Handle tab change to update the selectedTab state.
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  /**
   * Dynamically renders the feature component based on the feature key.
   * @param {string} feature - The feature identifier.
   * @returns JSX.Element - The feature component to be rendered.
   */
  const renderFeature = (feature: string) => {
    switch (feature) {
      case 'ClipartSelector':
        return <ClipartSelector />;
      case 'ImageUploader':
        return <ImageUploader />;
      default:
        return <div>Feature not implemented</div>;
    }
  };

  return (
    <div>
      {/* Tab navigation to select different features */}
      <Tabs value={selectedTab} onChange={handleChange}>
        {features.map((feature, index) => (
          <Tab key={index} label={feature.replace(/([A-Z])/g, ' $1').trim()} />
        ))}
      </Tabs>
      
      {/* Render the currently selected feature component */}
      {features[selectedTab] ? renderFeature(features[selectedTab]) : null}
    </div>
  );
});

export default FeatureController;
