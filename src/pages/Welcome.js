import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome Component</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p> {/* Is active */}
      </Route>{" "}
      <Route path="/products/new-user">
        <p>Check out our new products</p> {/* Would never be active */}
      </Route>{" "}
    </section>
  );
}
