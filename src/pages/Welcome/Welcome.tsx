import React from 'react';
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import CheckCircle from '@/assets/icons/heroicons-outline/check-circle.svg';

function Welcome() {
  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={'column'}>
        <h1>Welcome to gustave.pro design system</h1>
        <div>
          <h2>Buttons</h2>
          <Button label={'Label'} iconComponent={<CheckCircle />}></Button>
        </div>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
