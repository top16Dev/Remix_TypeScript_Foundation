import { Link } from '@remix-run/serve'

import { CSS } from '~/stitches.config';
import { ReactNode } from 'react';

import Text from '~/components/base/Text';

interface InternalLinkProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  css?: CSS;
  target?: string;
}

export default function InternalLink(props: InternalLinkProps): JSX.Element {
  const { href, children, css, onClick } = props;

  if (onClick) {
    return (
      <Text
        weight={600}
        css={{
          color: '$black60',
          transition: 'color $1 $ease',
          cursor: 'pointer',
          '@hover': {
            '&:hover': {
              color: '$black100',
            },
          },
          ...(css as any),
        }}
        onClick={onClick}
      >
        {children}
      </Text>
    );
  }

  return (
    <Link to={href} css={{ textDecoration: 'none' }}>
      <Text
        weight={600}
        css={{
          color: '$black60',
          transition: 'color $1 $ease',
          cursor: 'pointer',
          '@hover': {
            '&:hover': {
              color: '$black100',
            },
          },
          ...(css as any),
        }}
      >
        {children}
      </Text>
    </Link>
  );
}
