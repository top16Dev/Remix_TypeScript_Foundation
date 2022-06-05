import type {LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "@remix-run/react";

import { useContext, useEffect } from "react";

import ClientStyleContext from "~/styles/client.context";
import { styled } from "~/stitches.config";

import fontStyle from '~/styles/fonts.css';
import globalStyle from '~/styles/global.css';
import progressStyle from '~/styles/progress.css';
import tooltipStyle from '~/styles/tooltip.css';
import toggleStyle from '~/styles/toggle.css';
import minirest from '~/styles/minireset.css';

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

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Infyni X Marketplace",
  viewport: "width=device-width,initial-scale=1",
});

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = ({ children, title }: DocumentProps) => {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset();
  }, [clientStyleData]);
  
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Container>
        <p>
          [CatchBoundary]: {caught.status} {caught.statusText}
        </p>
      </Container>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <Container>
        <p>[ErrorBoundary]: There was an error: {error.message}</p>
      </Container>
    </Document>
  );
}
