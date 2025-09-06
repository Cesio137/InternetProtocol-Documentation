import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/ip.svg" width={42} height={42} alt="Logo" />
          Internet Protocol
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
