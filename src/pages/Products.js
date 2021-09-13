import React from "react";
import styles from "./Products.module.css";
export default function Welcome() {
  return (
    <section className={styles.cubano}>
      <h1>Products.js component</h1>
      <ul>
        <li>Book</li>
        <li>Carpet</li>
        <li>Online Course</li>
      </ul>
    </section>
  );
}
