import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import ClipartSelector from '../components/settings/clip-art-selector/ClipArtSelector';
import ImageUploader from '../components/settings/image-uploader/ImageUploader';

interface FeatureControllerProps {
  features: string[]; // Assuming features are identified by string keys
}

const FeatureController: React.FC<FeatureControllerProps> = ({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
      <Tabs value={selectedTab} onChange={handleChange}>
        {features.map((feature, index) => (
          <Tab key={index} label={feature.replace(/([A-Z])/g, ' $1').trim()} />
        ))}
      </Tabs>
      {features[selectedTab] ? renderFeature(features[selectedTab]) : null}
    </div>
  );
};

export default FeatureController;
