import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './TertiaryButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const TertiaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled, small }) => {
  return (
    <Button
      className="tertiary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
      small={small}
    />
  );
};

export default TertiaryButton;
