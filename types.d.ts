declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

// For SCSS
declare module '*.module.scss' {
  const classes: {[key: string]: string};
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    'lottie-player': any;
  }
}
