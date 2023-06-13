import { parseHTML } from "https://esm.sh/linkedom";

import { assert } from "https://deno.land/std@0.188.0/testing/asserts.ts";

const adWare = async (request, context) => {
  const response = await context.next();

  const page = await response.text();

  const { document } = parseHTML(page);

  assert(document);

  //Change the script tag of the rendered page to fit with the Ad provider

  // const script = document.createElement("script");
  // script.innerHTML = `async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3939067658671141" crossorigin="anonymous"`;
  // document.head.appendChild(script);

  //Fetch the script evaluate it and run it against the dom document (doesn't work due to ready state)

  // const fetchScript = await fetch(
  //   "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3939067658671141"
  // );
  // const script = await eval(await fetchScript.text());

  // script();

  //Example of html rewriting using an edge function
  const elemDiv = document.createElement("div");
  elemDiv.innerHTML = "THIS WORKS";
  document.body.appendChild(elemDiv);

  return new Response(
    "<html>" + document.documentElement.innerHTML + "</html>",
    response
  );
};

export const config = {
  path: "/*",
};

export default adWare;
