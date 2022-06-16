import React, { useState, useEffect } from "react";

export async function CardApi() {
  let url =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
