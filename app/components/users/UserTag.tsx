/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { VariantProps } from '@stitches/react';
import { styled, CSS } from '~/stitches.config';
import {Link as RemixLink} from '@remix-run/react'

import { SquareAvatar } from '~/components/base/Avatar';
import Box from '~/components/base/Box';
import Flex from '~/components/base/Flex';
import Mono from '~/components/base/Mono';
import Text from '~/components/base/Text';
import MaybeRenderPopover from '~/components/follows/MaybeRenderPopover';
import CircleAvatar from '~/components/avatars/CircleAvatar';
import Link from '~/components/base/Link';

import { UserFragment } from '~/graphql/hasura/hasura-fragments.generated';

import { buildAvatarUrl } from '~/utils/assets';
// import { getUsernameOrAddressInfo } from '~/utils/helpers';

// import { PartialPick } from '~/types/utils';@types/lodash@4.14.50

const UserTagContainer = styled(Flex, {
  alignItems: 'center',
  borderRadius: '$round',

  paddingY: '$2',
  paddingRight: '$6',
  paddingLeft: '$2',

  willChange: 'transform',
  transition: 'transform $1 $ease, box-shadow $1 $ease',

  variants: {
    hoverable: {
      true: {
        '@hover': {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '$1',
            color: '$black100',
            background: '$white100',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '$0',
            color: '$black100',
            background: '$white100',
          },
        },
      },
    },
    appearance: {
      normal: {
        color: '$black100',
        background: '$white100',
        boxShadow: '$0',
      },
      frosted: {
        color: '$white100',
        background: '$whiteT20',
        backdropFilter: 'blur(10px)',
        transition:
          'transform $1 $ease, color $1 $ease, background $1 $ease, box-shadow $1 $ease',
      },
      plain: {
        background: 'none',
        padding: 'unset',

        '@hover': {
          '&:hover': {
            transform: 'unset',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

// we only require a subset of fields for this component
// export type TagUser = PartialPick<
//   UserFragment,
//   'profileImageUrl' | 'userIndex' | 'username'
// > &
//   Pick<UserFragment, 'publicKey'>;

interface UserTagProps extends VariantProps<typeof UserTagContainer> {
  // user: TagUser;
  disablePopover?: boolean;
  css?: CSS;
  disableAvatar?: boolean;
  avatarSize?: number;
}

export default function UserTag(props: UserTagProps) {
  const {
    // user,
    appearance = 'normal',
    hoverable = true,
    disablePopover = false,
    disableAvatar = false,
    avatarSize = 32,
    css,
  } = props;

  // TODO: return skeleton state when loading/not present
//   if (!user) {
//     return <UserTagContainer appearance={appearance}></UserTagContainer>;
//   }
  const user = {
    publicKey : "11231",
  }
//   const avatarImageUrl = buildAvatarUrl(avatarSize, user.profileImageUrl);
  const avatarImageUrl = "/images/svg-text/Blog1.png"
//   const { usernameOrAddress, hasUsername, userPath } =
//     getUsernameOrAddressInfo(user);
  const usernameOrAddress = "@absd";
  const hasUsername = true;
  return (
    <>
    <MaybeRenderPopover
      disablePopover={disablePopover}
      publicKey={user.publicKey}
    >
      {/* <NextLink href={`/${userPath}`} passHref prefetch={false}> */}
      <RemixLink to={'/rodellwarner'} style={{textDecoration:'none', color:"black"}}>
        <Link
          css={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'block',
            ...css,
          }}
        >
          <UserTagContainer appearance={appearance} hoverable={hoverable}>
            <Box css={{ marginRight: '$1' }}>
              {!disableAvatar &&
                (avatarImageUrl ? (
                  <SquareAvatar
                    imageUrl={avatarImageUrl}
                    alt={usernameOrAddress}
                    shape="round"
                    size={avatarSize}
                  />
                ) : (
                  <CircleAvatar
                  publicKey={user.publicKey}
                  maxSize={avatarSize}
                  css={{ width: avatarSize, height: avatarSize }}
                  imageUrl={'/images/svg-text/Blog1.png'}
                  />
                ))}
            </Box>
            {hasUsername ? (
              <Text
                size={1}
                weight="semibold"
                css={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {usernameOrAddress}
              </Text>
            ) : (
              <Mono
                size={1}
                tight
                css={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {usernameOrAddress}
              </Mono>
            )}
          </UserTagContainer>
        </Link>
      </RemixLink>
    </MaybeRenderPopover>
    
    </>
  );
}
