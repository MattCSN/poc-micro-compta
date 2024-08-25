import React from 'react';
import Button from '@/components/DesignSystem/Buttons/Button/Button';
import './SecondaryButton.scss';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled }) => {
  return (
    <Button
      className="secondary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
    />
  );
};

export default SecondaryButton;
