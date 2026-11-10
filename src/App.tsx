import { DuotoneProvider, type Theme } from './DuotoneProvider';
import FullScreenMobileProvider from './FullScreenMobileProvider';
import { Home } from './Home';

const customTheme: Theme = {
  bg: '#fbf9f9',
  text: '#720d23',
  // duoDark: [82, 24, 21],
  // duoLight: [241, 238, 239],
  duoDark: [56, 0, 12],
  duoLight: [239, 235, 236],
};


export default function App() {
  return (
    <DuotoneProvider theme={customTheme}>
      <FullScreenMobileProvider>
        <Home />
      </FullScreenMobileProvider>
    </DuotoneProvider>
  );
}
