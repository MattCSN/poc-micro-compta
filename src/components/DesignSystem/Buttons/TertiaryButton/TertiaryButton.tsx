import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './TertiaryButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
}

const TertiaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled }) => {
  return (
    <Button
      className="tertiary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
    />
  );
};

export default TertiaryButton;
