declare module "wpsjs/vite_plugins" {
  import type { Plugin } from "vite";

  interface CopyFileOptions {
    src: string;
    dest: string;
  }

  interface FunctionsScannerOptions {
    inputJsPath: string;
    outputJsonPath: string;
    namespace: string;
  }

  export function copyFile(options: CopyFileOptions): Plugin;
  export function functionsScanner(options: FunctionsScannerOptions): Plugin;
}
