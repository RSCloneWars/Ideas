/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export = content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}
