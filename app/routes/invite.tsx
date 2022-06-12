import Page, { PageProps } from '~/components/Page';
import MaximalCallToAction from '~/components/MaximalCallToAction';
import { WithLayout } from '~/components/layouts/Layout';
import Flex from '~/components/base/Flex';

export default function Invite(): JSX.Element {
  const pageProps: PageProps = {
    title: 'Join the community',
  };

  return (
    <Page {...pageProps}>
      <Flex center expandVertical>
        <MaximalCallToAction
          heading="Join the community"
          subheading="Foundation is no longer invite-only and is now open to all!"
          action={{
            content: 'Start creating',
            href: '/create',
          }}
        />
      </Flex>
    </Page>
  );
}

Invite.getLayout = WithLayout({ backgroundColor: '$black5' });
