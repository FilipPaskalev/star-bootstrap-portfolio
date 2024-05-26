// src/react-i18next.d.ts

import "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        welcome: string;
        description: string;
      };
    };
  }
}
