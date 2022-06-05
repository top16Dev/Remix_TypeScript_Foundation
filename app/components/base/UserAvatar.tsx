import { avatarScale, CSS } from '~/stitches.config';

import { AvatarImage, AvatarV2Variants } from '~/components/base/AvatarV2';

import { buildImgixUrlNew } from '~/utils/assets';
import { getAvatarByPublicKey } from '~/utils/users';

interface UserAvatarProps {
  css?: CSS;
  imageSize?: number;
  imageUrl?: string;
  publicKey?: string;
  size: AvatarV2Variants['size'];
  statusColor?: string;
}

export default function UserAvatar(props: UserAvatarProps): JSX.Element {
  const { publicKey, imageUrl, css, size, imageSize = avatarScale[2] } = props;
  return (
    <AvatarImage
      aria-label={publicKey}
      css={{
        background: getAvatarByPublicKey(publicKey),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...css,
      }}
      role="image"
      round
      size={size}
      style={getBackgroundStyle({ imageUrl, size: imageSize })}
    />
  );
}

const getBackgroundStyle = ({ imageUrl, size }) => {
  if (imageUrl) {
    const buildAvatarUrl = buildImgixUrlNew({
      q: 45,
      w: size,
      h: size,
      fit: 'crop',
      auto: 'format,compress',
      dpr: 2,
    });
    return {
      backgroundImage: `url(${buildAvatarUrl(imageUrl)})`,
    };
  }
  return null;
};
