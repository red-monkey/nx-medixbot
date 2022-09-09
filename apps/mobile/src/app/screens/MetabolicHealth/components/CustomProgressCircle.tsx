import React from 'react';
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

type Props = {
  size: number;
  content?: any;
  backgroundColor: string;
  color: string;
  strokeWidth?: number;
  progress: number;
};

const CustomProgressCircle = ({
  size,
  content,
  backgroundColor,
  color,
  strokeWidth,
  progress,
}: Props) => {
  return (
    <View>
      <ProgressCircle
        strokeWidth={strokeWidth || 5}
        style={{ height: size, width: size }}
        progress={progress}
        progressColor={color}
        backgroundColor={backgroundColor}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          height: size,
        }}
      >
        {content}
      </View>
    </View>
  );
};

export default CustomProgressCircle;
