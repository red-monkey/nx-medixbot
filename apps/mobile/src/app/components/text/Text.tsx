import styled from '@emotion/native';
import { ColorName, TextType, theme } from '@medixbot/theme';
import { TextProps as TextPropsBase } from 'react-native';

interface TextProps extends TextPropsBase {
  variant: TextType;
  color: ColorName;
}

export const Text = styled.Text((props: TextProps) => ({
  fontSize: theme.textVariants[props.variant].fontSize,
  color: theme.colors[props.color],
}));
