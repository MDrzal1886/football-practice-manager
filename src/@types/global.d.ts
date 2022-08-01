declare module '*.scss';
declare module '*.jpg';
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}