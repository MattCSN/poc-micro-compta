import React from 'react';
import { FlexBox } from '@/components/styled';
import PrimaryButton from '@/components/DesignSystem/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButtonLegacy from '@/components/DesignSystem/Buttons/SecondaryButtonLegacy/SecondaryButtonLegacy';
import DangerButton from '@/components/DesignSystem/Buttons/DangerButton/DangerButton';
import TertiaryButton from '@/components/DesignSystem/Buttons/TertiaryButton/TertiaryButton';
import CheckCircle from '@/assets/icons/heroicons-solid/check-circle.svg';
import PencilSquare from '@/assets/icons/heroicons-solid/pencil-square.svg';
import Trash from '@/assets/icons/heroicons-solid/trash.svg';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import BorderedButton from '@/components/DesignSystem/Buttons/BorderedButton/BorderedButton';
import SecondaryButton from '@/components/DesignSystem/Buttons/SecondaryButton/SecondaryButton';

const DemoPanelButtons: React.FC = () => {
  return (
    <FlexBox flexDirection={'column'} gap={'24px'}>
      <h2>Buttons</h2>
      <FlexBox gap={'24px'}>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>generic</h3>
          <FlexBox gap={'24px'}>
            <Button label={'Label'} />
            <Button label={'Label'} iconComponent={<CheckCircle />} />
            <Button iconComponent={<CheckCircle />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <Button label={'Label'} disabled={true} />
            <Button label={'Label'} iconComponent={<CheckCircle />} disabled={true} />
            <Button iconComponent={<CheckCircle />} disabled={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <Button label={'Label'} small={true} />
            <Button label={'Label'} iconComponent={<CheckCircle />} small={true} />
            <Button iconComponent={<CheckCircle />} small={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <Button label={'Label'} disabled={true} small={true} />
            <Button label={'Label'} iconComponent={<CheckCircle />} disabled={true} small={true} />
            <Button iconComponent={<CheckCircle />} disabled={true} small={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>generic bordered</h3>
          <FlexBox gap={'24px'}>
            <BorderedButton label={'Label'} />
            <BorderedButton label={'Label'} iconComponent={<CheckCircle />} />
            <BorderedButton iconComponent={<CheckCircle />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <BorderedButton label={'Label'} disabled={true} />
            <BorderedButton label={'Label'} iconComponent={<CheckCircle />} disabled={true} />
            <BorderedButton iconComponent={<CheckCircle />} disabled={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <BorderedButton label={'Label'} small={true} />
            <BorderedButton label={'Label'} iconComponent={<CheckCircle />} small={true} />
            <BorderedButton iconComponent={<CheckCircle />} small={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <BorderedButton label={'Label'} disabled={true} small={true} />
            <BorderedButton
              label={'Label'}
              iconComponent={<CheckCircle />}
              disabled={true}
              small={true}
            />
            <BorderedButton iconComponent={<CheckCircle />} disabled={true} small={true} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
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
          <FlexBox gap={'24px'}>
            <PrimaryButton label={'Label'} small={true} />
            <PrimaryButton label={'Label'} iconComponent={<CheckCircle />} small={true} />
            <PrimaryButton iconComponent={<CheckCircle />} small={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <PrimaryButton label={'Label'} disabled={true} small={true} />
            <PrimaryButton
              label={'Label'}
              iconComponent={<CheckCircle />}
              disabled={true}
              small={true}
            />
            <PrimaryButton iconComponent={<CheckCircle />} disabled={true} small={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Secondary</h3>
          <FlexBox gap={'24px'}>
            <SecondaryButton label={'Label'} />
            <SecondaryButton label={'Label'} iconComponent={<PencilSquare />} />
            <SecondaryButton iconComponent={<PencilSquare />} />
          </FlexBox>
          <FlexBox gap={'24px'} boxSizing={'content-box'}>
            <SecondaryButton label={'Label'} disabled={true} />
            <SecondaryButton label={'Label'} iconComponent={<PencilSquare />} disabled={true} />
            <SecondaryButton iconComponent={<PencilSquare />} disabled={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Secondary LEGACY</h3>
          <FlexBox gap={'24px'}>
            <SecondaryButtonLegacy label={'Label'} />
            <SecondaryButtonLegacy label={'Label'} iconComponent={<PencilSquare />} />
            <SecondaryButtonLegacy iconComponent={<PencilSquare />} />
          </FlexBox>
          <FlexBox gap={'24px'} boxSizing={'content-box'}>
            <SecondaryButtonLegacy label={'Label'} disabled={true} />
            <SecondaryButtonLegacy
              label={'Label'}
              iconComponent={<PencilSquare />}
              disabled={true}
            />
            <SecondaryButtonLegacy iconComponent={<PencilSquare />} disabled={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Danger</h3>
          <FlexBox gap={'24px'}>
            <DangerButton label={'Label'} />
            <DangerButton label={'Label'} iconComponent={<Trash />} />
            <DangerButton iconComponent={<Trash />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <DangerButton label={'Label'} disabled={true} />
            <DangerButton label={'Label'} iconComponent={<Trash />} disabled={true} />
            <DangerButton iconComponent={<Trash />} disabled={true} />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection={'column'} gap={'24px'}>
          <h3>Tertiary</h3>
          <FlexBox gap={'24px'}>
            <TertiaryButton label={'Label'} />
            <TertiaryButton label={'Label'} iconComponent={<PencilSquare />} />
            <TertiaryButton iconComponent={<PencilSquare />} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <TertiaryButton label={'Label'} disabled={true} />
            <TertiaryButton label={'Label'} iconComponent={<PencilSquare />} disabled={true} />
            <TertiaryButton iconComponent={<PencilSquare />} disabled={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <TertiaryButton label={'Label'} small={true} />
            <TertiaryButton label={'Label'} iconComponent={<CheckCircle />} small={true} />
            <TertiaryButton iconComponent={<CheckCircle />} small={true} />
          </FlexBox>
          <FlexBox gap={'24px'}>
            <TertiaryButton label={'Label'} disabled={true} small={true} />
            <TertiaryButton
              label={'Label'}
              iconComponent={<CheckCircle />}
              disabled={true}
              small={true}
            />
            <TertiaryButton iconComponent={<CheckCircle />} disabled={true} small={true} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <h2>The end</h2>
    </FlexBox>
  );
};

export default DemoPanelButtons;
