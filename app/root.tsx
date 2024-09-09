import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import "./tailwind.css";

import { ThemeProvider } from '~/components/ThemeContext/ThemeContext';
import {json, LinksFunction} from "@remix-run/node";
import Header from "~/components/Header/Header";
import {getUserIdFromSession} from "~/server/authData";
import {getUserById} from "~/server/dataBaseData";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: "/app/index.css" }];
};


export function Layout({ children }: { children: React.ReactNode }) {
    // const matches = useMatches();
    // console.log(matches)
    // const disableJS = matches.some(match => match.handle?.disableJS);

  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
          <title> remix</title>
      </head>
      <body>
      <ThemeProvider>
          <Header/>
      <div>
          {children}
      </div>
      </ThemeProvider>
      <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );

}

export function ErrorBoundary() {
        const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="bg-blue-200 p-8 rounded-lg shadow-lg   text-center">
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div className="bg-blue-200 p-8 rounded-lg shadow-lg   text-center">
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

export default function App() {
  return <Outlet />;
}

export async function  loader({ request }) {
    const userId= await getUserIdFromSession(request);
    const userIdInt = parseInt(userId, 10);  

    const user = await getUserById(userIdInt)
    return json(user)
}

