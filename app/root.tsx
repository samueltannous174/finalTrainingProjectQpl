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



import {LinksFunction, MetaFunction} from "@remix-run/node";
import Header from "~/components/Header/Header";
import {getUserFromSession} from "~/server/authData";
import {getUserById} from "~/server/dataBaseData";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: "/app/index.css" }];
};
export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};



export function Layout({ children }: { children: React.ReactNode }) {
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
      <div className="w-full fixed boxShadowHeader top-0 bg-gray-900 box-shadow-header z-10">
          <Header/>
      </div>
      <div className="mt-[40px]">
          {children}
      </div>
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
    const userId= await getUserFromSession(request);
    return getUserById(userId)
}

