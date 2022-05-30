/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Link } from '@remix-run/react';

import Logo from '~/components/Logo';

import { CSS } from '~/stitches.config';

interface LogoLinkProps {
  color: string;
  css?: CSS;
}

export default function LogoLink(props: LogoLinkProps): JSX.Element {
  const { color, css } = props;

  return (
    // <Link to="/" css={{ display: 'block', color }}>
    <Link to="/" style={{ display: 'block', color:color }}>
      <Logo
        css={{
          width: 82,
          '@bp0': {
            width: 98,
            // color:{color},
          },
          ...(css as any),
        }}
      />
    </Link>
  );
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function FooterLogoLink() {
  return (
    <LogoLink
      css={{
        width: 65,
        '@bp0': {
          width: 65,
        },
      }}
      // color="$black10"
      color="#000000"
    />
  );
}
