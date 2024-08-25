import React from 'react';
import './SecondaryButton.scss';
import BorderedButton from '@/components/DesignSystem/Buttons/BorderedButton/BorderedButton';

interface ButtonProps {
  label?: string;
  iconComponent?: React.ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({ label, iconComponent, disabled, small }) => {
  return (
    <BorderedButton
      className="secondary-button"
      label={label}
      iconComponent={iconComponent}
      disabled={disabled}
      small={small}
    />
  );
};

export default SecondaryButton;
