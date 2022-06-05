import { CSS } from '~/stitches.config';
export type SiteLink = 
{
    children: string;
    href: string;
    external ?: boolean;
    css ?: CSS;
}
export default SiteLink;