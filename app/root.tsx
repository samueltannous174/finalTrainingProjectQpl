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
import {supabase} from "~/components/supabaseClient";
import {User} from "~/types";
import {useMatches} from "react-router";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: "/app/index.css" }];
};


export function Layout({ children }: { children: React.ReactNode }) {
    const matches = useMatches();
    console.log(matches)
    const disableJS = matches.some(match => match.handle?.disableJS);

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
      {!disableJS && <Scripts />}
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
        )
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
    const userIdInt = parseInt(userId, 10)

    const user = await getUserById(userIdInt) as User
    console.log(user)
    if (user){
        const fileName = `${user.name}-image`;

        const { data, error } = supabase.storage
            .from('UsersImages')
            .getPublicUrl(fileName);

        if (error) {
            console.error(`Error fetching public URL: ${error.message}`);
        } else {
            const imageUrl = data.publicUrl;
            console.log(`Public Image URL: ${imageUrl}`);
        }
        user.image= data.publicUrl
    }

    return json(user)
}

