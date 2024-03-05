import { moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule],
    }),
  ],
};

export default preview;
