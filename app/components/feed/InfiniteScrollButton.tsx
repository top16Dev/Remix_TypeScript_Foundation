import { useRef, useEffect, MutableRefObject } from 'react';

import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import SpinnerStroked from '~/components/SpinnerStroked';
import { AnimatePresence, motion } from 'framer-motion';

interface IntersectionObserverProps {
  target: MutableRefObject<HTMLDivElement>;
  onIntersect: () => void;
  enabled: boolean;
  rootMargin?: string;
  root?: MutableRefObject<HTMLDivElement>;
  threshold?: number;
}

function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: IntersectionObserverProps): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        }),
      {
        root: root?.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}

interface InfiniteScrollButtonProps {
  // handleNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
  // enabled?: boolean;
  // animationDuration?: number;
}

export default function InfiniteScrollButton(
  props: InfiniteScrollButtonProps
): JSX.Element {
  // const {
  //   handleNextPage,
  //   isFetching,
  //   enabled = true,
  //   hasNextPage,
  //   animationDuration = 0.1,
  // } = props;

  // const loadMoreButtonRef = useRef();

  // useIntersectionObserver({
  //   target: loadMoreButtonRef,
  //   onIntersect: handleNextPage,
  //   enabled: hasNextPage && enabled,
  // });

  return (
    <>
      {/* <Box ref={loadMoreButtonRef} css={{ height: 1 }} /> */}
      <Box css={{ height: 1 }} />
      {/* <ActivityIndicator
        isActive={isFetching && hasNextPage}
        animationDuration={animationDuration}
      /> */}
    </>
  );
}

// interface ActivityIndicatorProps
//   extends Pick<InfiniteScrollButtonProps, 'animationDuration'> {
//   isActive: boolean;
// }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// export function ActivityIndicator(props: ActivityIndicatorProps) {
export function ActivityIndicator(props: { isActive: any; animationDuration?: 0.1 | undefined; }) {
  const { isActive, animationDuration = 0.1 } = props;
  return (
    <AnimatePresence exitBeforeEnter>
      {isActive && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          style={{ position: 'fixed', right: 24, bottom: 32 }}
          transition={{ ease: 'easeInOut', duration: animationDuration }}
        >
          <Flex
            css={{
              padding: 10,
              backgroundColor: '$white100',
              boxShadow: '$1',
              borderRadius: '$round',
            }}
          >
            <SpinnerStroked size={32} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
