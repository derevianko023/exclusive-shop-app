declare module "*.svg?react" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module API_KEY {
  const API_KEY: string;
  export default API_KEY;
}
