import React from 'react';
import { FlexBox } from '@/components/styled';
import PrimaryButton from '@/components/DesignSystem/Buttons/PrimaryButton/PrimaryButton';
import CheckCircle from '@/assets/icons/heroicons-outline/check-circle.svg';

const DemoPanelButtons: React.FC = () => {
  return (
    <FlexBox flexDirection={'column'} gap={'24px'}>
      <h2>Buttons</h2>
      <FlexBox gap={'24px'}>
        <PrimaryButton label={'Label'}></PrimaryButton>
        <PrimaryButton label={'Label'} iconComponent={<CheckCircle />}></PrimaryButton>
        <PrimaryButton iconComponent={<CheckCircle />}></PrimaryButton>
      </FlexBox>
      <FlexBox gap={'24px'}>
        <PrimaryButton label={'Label'} disabled={true}></PrimaryButton>
        <PrimaryButton
          label={'Label'}
          iconComponent={<CheckCircle />}
          disabled={true}
        ></PrimaryButton>
        <PrimaryButton iconComponent={<CheckCircle />} disabled={true}></PrimaryButton>
      </FlexBox>
    </FlexBox>
  );
};

export default DemoPanelButtons;
