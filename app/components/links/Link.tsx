import React from 'react';
// import NextLink, { LinkProps } from '@remix-run/serve';
import Link1 from '~/components/brand/about/Link';
// TODO: eventually deprecate this
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// export default function Link(props: React.PropsWithChildren<LinkProps>) {
export default function Link(props: any) {
  return <Link1 {...props} passHref={true} />;
}
