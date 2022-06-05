/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DESCRIPTION, TITLE, OG_IMAGE } from '~/utils/constants/meta';
// import { getOgImage } from '~/utils/urls';
// import { isEmptyOrNil } from '~/utils/helpers';
import {
  modelAssetsHost,
  videoAssetsHost,
  appAssetsHost,
  imageAssetsHost,
  modelImageAssetsHost,
} from '~/lib/assets';


import Header from '~/components/headers/Header';
import Footer from '~/components/footers/Footer';

import { PageColorMode, PageType } from '~/types/page';
import { CSS } from '~/stitches.config';

export interface PageProps {
  children?: JSX.Element | JSX.Element[];
  mode?: PageColorMode;
  headerMode?: PageColorMode;
  footerStyle?: CSS;
  url?: string;
  description?: string;
  // title?: boolean | string;
  title?: string;
  absolute?: boolean;
  isLight?: boolean;
  image?: string;
  type: PageType;
}

export default function Page(props: PageProps): JSX.Element {
  const {
    mode = PageColorMode.light,
    headerMode = PageColorMode.light,
    children,
    absolute,
    footerStyle,
    description = DESCRIPTION,
    title = TITLE,
    image = OG_IMAGE,
    type,
  } = props;
  return (
    <>
      <Header
        mode={mode}
        headerMode={headerMode}
        absolute={absolute}
        type={type}
        title={title}
      />
      {children}
      <Footer css={footerStyle} type={type} />
    </>
  );
}
