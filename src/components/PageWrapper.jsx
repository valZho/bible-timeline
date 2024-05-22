import React from 'react';
import { LoadingOverlay } from '@mantine/core';

import Navbar from './Navbar';
import Timeline from './Timeline';

const PageWrapper = () => {
  return (
    <div className="pageWrapper">
      <LoadingOverlay
        visible={false}
        zIndex="3000"
        overlayProps={{ blur: 2 }}
        loaderProps={{ color: 'blue', type: 'dots', size: 'xl' }}
      />
      <Navbar />
      <Timeline />
    </div>
  );
};

export default PageWrapper;
