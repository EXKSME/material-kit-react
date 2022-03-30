// i18n
import { FormattedMessage } from 'react-intl';
import { I18nProvider, LOCALES } from './i18n';


// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

import translate from './i18n/translate';


// ----------------------------------------------------------------------

export default function App() {
  return (
    <I18nProvider locale={LOCALES.CHINESE}>
      <FormattedMessage id="testmessage"/>
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
    </I18nProvider>
  );
}
