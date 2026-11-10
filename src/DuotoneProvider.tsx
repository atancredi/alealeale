import React, { createContext, useContext, type ReactNode } from 'react';

export type Theme = {
  bg: string;
  text: string;
  duoDark: [number, number, number];
  duoLight: [number, number, number];
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a DuotoneProvider');
  return context;
};

interface DuotoneProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const DuotoneProvider = ({ theme, children }: DuotoneProviderProps) => {
  const rTable = `${theme.duoDark[0] / 255} ${theme.duoLight[0] / 255}`;
  const gTable = `${theme.duoDark[1] / 255} ${theme.duoLight[1] / 255}`;
  const bTable = `${theme.duoDark[2] / 255} ${theme.duoLight[2] / 255}`;

  return (
    <ThemeContext.Provider value={theme}>
      <div 
        className="relative min-h-[100dvh] w-full overflow-x-hidden antialiased transition-colors duration-500 ease-out selection:bg-[var(--theme-text)] selection:text-[var(--theme-bg)]"
        style={{ 
          '--theme-bg': theme.bg, 
          '--theme-text': theme.text,
          backgroundColor: 'var(--theme-bg)',
          color: 'var(--theme-text)',
        } as React.CSSProperties}
      >
        <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
          <filter id="global-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues={rTable} />
              <feFuncG type="table" tableValues={gTable} />
              <feFuncB type="table" tableValues={bTable} />
            </feComponentTransfer>
          </filter>
        </svg>
        
        {/* Child content sits on top of the background */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};