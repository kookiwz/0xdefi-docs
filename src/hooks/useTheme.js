import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const setDarkTheme = () => {
    document?.firstElementChild?.setAttribute('data-theme', 'dark');
    localStorage?.setItem('theme', 'dark');

  };
  const setLightTheme = () => {
    document?.firstElementChild?.setAttribute('data-theme', 'light');
    localStorage?.setItem('theme', 'light');

  };
  useEffect(() => {
    console.log({ document: document?.firstElementChild?.getAttribute('data-theme') });
    if (localStorage && localStorage?.getItem('theme')) {
      const currentTheme = localStorage?.getItem('theme') || 'light';
      document?.firstElementChild?.setAttribute('data-theme', currentTheme);

      setIsDark(currentTheme === 'dark');
    } else {
      const currentTheme = localStorage?.getItem('theme') || 'light';
      document?.firstElementChild?.setAttribute('data-theme', 'light');

      setIsDark(false);

      localStorage?.setItem('theme', 'light');
    }
  }, []);

  return { isDark,setIsDark, setDarkTheme,setLightTheme };
};
export { useTheme };
