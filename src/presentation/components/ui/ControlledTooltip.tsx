import { TooltipProps, Tooltip } from '@rneui/base';
import React from 'react';
import { Pressable } from 'react-native';

interface ControlledTooltipProps extends TooltipProps {
  children: React.ReactNode;
}

export const ControlledTooltip: React.FC<ControlledTooltipProps> = (props) => {
  const { children, ...tooltipProps } = props;
  const [open, setOpen] = React.useState(false);

  const handlePress = () => {
    setOpen(!open);
  };

  return (
    <Tooltip
    containerStyle={{width:'auto'}}
      visible={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      overlayColor={'transparent'}
      {...tooltipProps}

    >
      <Pressable onPress={handlePress}>
        {children}
      </Pressable>
    </Tooltip>
  );
};
