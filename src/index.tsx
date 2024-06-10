import { createRoot } from 'react-dom/client';

import App from 'src/app/App.tsx';
import ThemeProvider from 'src/app/provider/ThemeProvider/ui/ThemeProvider.tsx';
import 'src/app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
