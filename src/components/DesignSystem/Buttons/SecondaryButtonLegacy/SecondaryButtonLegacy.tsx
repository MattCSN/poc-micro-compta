import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './SecondaryButtonLegacy.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
}

const SecondaryButtonLegacy: React.FC<ButtonProps> = ({ label, iconComponent, disabled }) => {
  return (
    <Button
      className="secondary-button-legacy"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
    />
  );
};

export default SecondaryButtonLegacy;
