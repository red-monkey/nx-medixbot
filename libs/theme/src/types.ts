export interface Theme {
  colors: Color;
  space: Size;
  borderWith: Size;
  borderRadius: Size;
  textVariants: TextVariant;
}

export interface Color {
  // base
  white: string;
  black: string;
  grey: string;

  // primary color
  primary: string;
  'on-primary': string;
  'primary-gradient': string;
  'primary-variant': string;

  // primary color
  secondary: string;
  'on-secondary': string;
  'secondary-gradient': string;
  'secondary-variant': string;

  // error color
  error: string;
  'on-error': string;
  'error-gradient': string;
  'error-variant': string;

  // success color
  success: string;
  'on-success': string;
  'success-gradient': string;
  'success-variant': string;

  background: string;
  'on-background': string;
}

export type ColorName = keyof Color;

export interface Size {
  '3xs': number;
  '2xs': number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  '2xl': number;
  '3xl': number;
}

export type SizeName = keyof Size;

export interface FontFamily {
  regular: string;
  medium: string;
  'semi-bold': string;
}

export type FontFamilyName = keyof FontFamily;

export interface FontSize {
  'page-heading': number;
  heading: number;
  subheading: number;
  button: number;
  body: number;
  caption: number;
}

type TextStyle = {
  fontSize: number;
  fontFamily: string;
};

export type TextType = keyof FontSize;
export type TextVariant = Record<TextType, TextStyle>;
