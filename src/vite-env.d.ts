/// <reference types="vite/client" />
/// <reference types="et-jsapi-declare" />

declare namespace Et {
  interface Workbooks {
    OpenFromUrl(url: string): Workbook;
  }
}

interface Window {
  STATE_FROM_SERVER?: import("./reducers").RootState;
  ribbon: import("./components/ribbon").RibbonCallbacks;
  openOfficeFileFromSystemDemo: typeof import("./js/systemdemo").openOfficeFileFromSystemDemo;
  InvokeFromSystemDemo: typeof import("./js/systemdemo").InvokeFromSystemDemo;
}
