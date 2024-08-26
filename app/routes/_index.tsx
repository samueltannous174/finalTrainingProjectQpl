import type { MetaFunction } from "@remix-run/node";
import '../index.css'
import Header from "~/components/landingPage/Header/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <>
        <div className="w-full fixed boxShadowHeader top-0 bg-gray-900 z-10">
          <Header/>
        </div>
      </>
  );
}
