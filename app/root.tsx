import type {LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import fontStyle from '~/styles/fonts.css';
import globalStyle from '~/styles/global.css';
import progressStyle from '~/styles/progress.css';
import tooltipStyle from '~/styles/tooltip.css';
import toggleStyle from '~/styles/toggle.css';
import minirest from '~/styles/minireset.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Foundation",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: minirest },
    { rel: "stylesheet", href: fontStyle },
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: progressStyle },
    { rel: "stylesheet", href: tooltipStyle },
    { rel: "stylesheet", href: toggleStyle },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
