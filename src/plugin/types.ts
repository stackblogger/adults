export type PackageJsonContent = {
  name: string;
  version: string;
  description?: string;
  scripts?: {
    [key: string]: string;
  };
  author?: {
    [key: string]: string;
  };
  repository?: {
    [key: string]: string;
  };
  license?: string;
  homepage?: string;
  dependencies?: {
    [key: string]: string;
  };
  devDependencies?: {
    [key: string]: string;
  };
  engines?: {
    [key: string]: string;
  };
  keywords?: string[];
};
