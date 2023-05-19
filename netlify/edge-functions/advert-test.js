import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { assert } from "https://deno.land/std@0.188.0/testing/asserts.ts";

const adWare = async (request, context) => {
  const response = await context.next();

  const page = await response.text();

  const document = new DOMParser().parseFromString(page, "text/html");

  assert(document);

  const ad = await fetch(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3939067658671141"
  );

  // eval(ad);

  const script = document.createElement("script");
  script.innerHTML = `async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3939067658671141" crossorigin="anonymous"`;
  document.head.appendChild(script);

  const elemDiv = document.createElement("div");
  elemDiv.innerHTML = "THIS FUCKING WORKS";
  document.body.appendChild(elemDiv);

  console.log(document);
  return new Response(
    "<html>" + document.documentElement.innerHTML + "</html>",
    response
  );
};

export const config = {
  path: "/",
};

export default adWare;
