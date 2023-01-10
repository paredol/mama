export function useTheme() {
    // check if the theme is dark
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // get the theme from the localStorage
    const theme = localStorage.getItem('theme') || (isDark ? 'dark' : 'light')
    // set the theme
      document.documentElement.classList.add(theme);
}