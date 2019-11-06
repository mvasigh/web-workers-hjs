// Helper functions for setting the CSS variables that control our theme

export function getTheme() {
  const style = getComputedStyle(document.documentElement);
  return {
    hue: style.getPropertyValue('--app-hue'),
    saturation: style.getPropertyValue('--app-saturation'),
    luminosity: style.getPropertyValue('--app-luminosity')
  };
}

export function setTheme({ hue, saturation, luminosity }) {
  const style = document.documentElement.style;
  hue && style.setProperty('--app-hue', `${hue}`);
  saturation && style.setProperty('--app-saturation', `${saturation}%`);
  luminosity && style.setProperty('--app-luminosity', `${luminosity}%`);
}
