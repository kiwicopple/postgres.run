"use client";

import { useState } from "react";
import { PGlite } from "@electric-sql/pglite";

const db = new PGlite();

export default function Counter() {
  const [count, setCount] = useState(0);

  async function runQuery(query: string) {
    const msg = await db.query(query);
    console.log("msg", msg);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <button onClick={() => runQuery(`select 'Hello world' as message;`)}>
        Click me
      </button>
    </div>
  );
}
