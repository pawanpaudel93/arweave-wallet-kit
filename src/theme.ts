import { createTheming, ThemingType } from "@callstack/react-theme-provider";

const lightTheme: DisplayTheme = {
  primaryText: "0, 0, 0",
  background: "255, 255, 255",
  secondaryText: "146, 146, 147",
  light: "242, 242, 247"
};

const darkTheme: DisplayTheme = {
  primaryText: "240, 240, 240",
  background: "26, 27, 31",
  secondaryText: "161, 161, 161",
  light: "44, 45, 49"
};

const defaultThemeConfig: ThemeConfig = {
  displayTheme: "light",
  accent: {
    r: 0,
    g: 0,
    b: 0
  },
  titleHighlight: {
    r: 0,
    g: 122,
    b: 255
  },
  radius: "default"
};

export interface DisplayTheme {
  background: string;
  primaryText: string;
  secondaryText: string;
  light: string;
}

export interface ThemeConfig {
  displayTheme: "dark" | "light";
  accent: RGBObject;
  titleHighlight: RGBObject;
  radius: Radius;
}

export interface DefaultTheme extends DisplayTheme {
  displayTheme: "dark" | "light";
  theme: string;
  themeConfig: ThemeConfig;
}

export interface RGBObject {
  r: number;
  g: number;
  b: number;
}

export type Radius = "default" | "minimal" | "none";

export const { ThemeProvider, withTheme, useTheme }: ThemingType<DefaultTheme> & { ThemeProvider: React.ComponentType<React.PropsWithChildren<{ theme?: DefaultTheme }>> } = createTheming<DefaultTheme>({
  displayTheme: "light",
  theme: "0, 0, 0",
  themeConfig: defaultThemeConfig,
  ...lightTheme
});