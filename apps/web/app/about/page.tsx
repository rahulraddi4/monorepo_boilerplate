"use client";

import {
  isValidEmail,
  capitalize,
  slugify,
  pluralize,
  calculatePercentage,
  formatBytes,
  chunk,
} from "@monorepo/shared";
import Link from "next/link";
import Image from "next/image";
import placeholderImg from "@monorepo/shared/assets/images/placeholder.png";
import { useState } from "react";

export default function About() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Demo data
  const items = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const chunkedItems = chunk(items, 2);

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Placeholder Image */}
        <div style={styles.imageContainer}>
          <Image
            src={placeholderImg}
            alt="Placeholder"
            width={200}
            height={200}
            style={styles.image}
          />
        </div>

        <h1 style={styles.title}>About Page</h1>
        <p style={styles.subtitle}>Testing shared validators & utilities</p>

        <div style={styles.card}>
          <h2>Email Validator</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
            style={styles.input}
          />
          <p style={styles.result}>
            {email && (
              <span style={{ color: isValidEmail(email) ? "green" : "red" }}>
                {isValidEmail(email) ? "✓ Valid email" : "✗ Invalid email"}
              </span>
            )}
          </p>
        </div>

        <div style={styles.card}>
          <h2>String Utilities</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter text..."
            style={styles.input}
          />
          {name && (
            <>
              <p style={styles.result}>
                <strong>Capitalized:</strong> {capitalize(name)}
              </p>
              <p style={styles.result}>
                <strong>Slugified:</strong> {slugify(name)}
              </p>
            </>
          )}
        </div>

        <div style={styles.card}>
          <h2>Number & Data Utilities</h2>
          <p style={styles.result}>
            <strong>Pluralize (5 items):</strong>{" "}
            {pluralize(5, "item", "items")}
          </p>
          <p style={styles.result}>
            <strong>Pluralize (1 item):</strong> {pluralize(1, "item", "items")}
          </p>
          <p style={styles.result}>
            <strong>Percentage (75/100):</strong> {calculatePercentage(75, 100)}
            %
          </p>
          <p style={styles.result}>
            <strong>File Size (1048576 bytes):</strong> {formatBytes(1048576)}
          </p>
        </div>

        <div style={styles.card}>
          <h2>Array Chunk Utility</h2>
          <p style={styles.result}>
            <strong>Original:</strong> {items.join(", ")}
          </p>
          <p style={styles.result}>
            <strong>Chunked (2 per group):</strong>
          </p>
          {chunkedItems.map((chunk: string[], index: number) => (
            <p key={index} style={styles.chunkItem}>
              Group {index + 1}: {chunk.join(", ")}
            </p>
          ))}
        </div>

        <div style={styles.navigation}>
          <Link href="/" style={styles.link}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "6rem",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  container: {
    maxWidth: "600px",
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  image: {
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#666",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "2rem",
    marginBottom: "1.5rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginTop: "0.5rem",
  },
  result: {
    marginTop: "1rem",
    fontSize: "1.1rem",
  },
  chunkItem: {
    marginLeft: "1rem",
    fontSize: "1rem",
    color: "#555",
  },
  navigation: {
    textAlign: "center",
    marginTop: "2rem",
  },
  link: {
    color: "#0070f3",
    fontSize: "1.1rem",
    textDecoration: "underline",
  },
};
