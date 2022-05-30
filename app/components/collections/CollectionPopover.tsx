/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ReactNode, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
// import 'tippy.js/animations/shift-away.css';

import Box from '~/components/base/Box';
import CollectionCard from '~/components/cards/collections/CollectionCard';

import useIsomorphicLayoutEffect from '~/hooks/use-isomorphic-layout-effect';

import { UserFragment } from '~/graphql/hasura/hasura-fragments.generated';
import { CollectionCardFragment } from '~/types/Collection';

import { CSS } from '~/stitches.config';
import { AlgoliaUserBasic } from '~/types/Algolia';

interface CollectionPopoverProps {
  // user: UserFragment | AlgoliaUserBasic;
  collection: CollectionCardFragment;
  children: ReactNode;
  css?: CSS;
}

export default function CollectionPopover(
  props: CollectionPopoverProps
): JSX.Element {
  const {
    //  user, 
    collection, children, css } = props;
  // const {collection} = props;
  // const { children, css } = props;

  const POPOVER_DELAY = 400;

  const [shouldRender, setShouldRender] = useState(false);

  const appendRef = useRef();

  // useIsomorphicLayoutEffect(() => {
  //   appendRef.current = document.getElementById('#portal');
  // }, []);
  return (
    <Box css={{ ...(css as any) }}>
      <Tippy
        content={
          shouldRender ? (
            <CollectionCard
              collection={collection}
              // creator={user}
              creator={"Family"}
              enableZoomOnHover={false}
              css={{ marginY: '$3', minWidth: 340 }}
            />
          ) : null
        }
        interactive={true}
        animation="shift-away"
        onTrigger={() => setShouldRender(true)}
        onUntrigger={() => setShouldRender(false)}
        onShow={() => setShouldRender(true)}
        onHidden={() => setShouldRender(false)}
        placement="bottom"
        touch={false}
        delay={[POPOVER_DELAY, 0]}
        // appendTo={appendRef.current}
      >
        <Box css={{ cursor: 'pointer', minWidth: 0 }}>{children}</Box>
      </Tippy>
    </Box>
  );
}
