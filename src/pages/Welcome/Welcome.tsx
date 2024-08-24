import React from 'react';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import Meta from '@/components/Meta';
import DemoPanelButtons from '@/components/DesignSystem/Buttons/DemoPanelButtons/DemoPanelButtons';

function Welcome() {
  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={'column'}>
        <h1>Welcome to gustave.pro design system</h1>
        <DemoPanelButtons />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
