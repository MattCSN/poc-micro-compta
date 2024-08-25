import React from 'react';
import { FlexBox } from '@/components/styled';
import PrimaryButton from '@/components/DesignSystem/Buttons/PrimaryButton/PrimaryButton';
import CheckCircle from '@/assets/icons/heroicons-outline/check-circle.svg';
import PencilSquare from '@/assets/icons/heroicons-solid/pencil-square.svg';
import SecondaryButton from '@/components/DesignSystem/Buttons/SecondaryButton/SecondaryButton';

const DemoPanelButtons: React.FC = () => {
  return (
    <FlexBox flexDirection={'column'} gap={'24px'}>
      <h2>Buttons</h2>
      <FlexBox gap={'24px'}>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Primary</h3>
          <FlexBox gap={'24px'}>
            <PrimaryButton label={'Label'} />
            <PrimaryButton label={'Label'} iconComponent={<CheckCircle />} />
            <PrimaryButton iconComponent={<CheckCircle />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <PrimaryButton label={'Label'} disabled={true} />
            <PrimaryButton label={'Label'} iconComponent={<CheckCircle />} disabled={true} />
            <PrimaryButton iconComponent={<CheckCircle />} disabled={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Secondary</h3>
          <FlexBox gap={'24px'}>
            <SecondaryButton label={'Label'} />
            <SecondaryButton label={'Label'} iconComponent={<PencilSquare />} />
            <SecondaryButton iconComponent={<PencilSquare />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <SecondaryButton label={'Label'} disabled={true} />
            <SecondaryButton label={'Label'} iconComponent={<PencilSquare />} disabled={true} />
            <SecondaryButton iconComponent={<PencilSquare />} disabled={true} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default DemoPanelButtons;
