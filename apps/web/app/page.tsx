"use client";

import {
  useCounter,
  formatCurrency,
  formatDate,
  truncate,
  formatNumber,
  getInitials,
} from "@monorepo/shared";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@monorepo/shared/assets/images/logo.jpg";
import bannerImg from "@monorepo/shared/assets/images/banner.jpg";

export default function Home() {
  const { count, increment, decrement, reset }: any = useCounter(0);
  const currentDate = new Date();

  const sampleText =
    "This is a very long text that will be truncated to show the utility function in action.";
  const userName = "John Doe";
  const largeNumber = 1234567;

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <Image
            src={logoImg}
            alt="Logo"
            width={150}
            height={150}
            style={styles.logo}
          />
        </div>

        <h1 style={styles.title}>Welcome to Monorepo Web App</h1>
        <p style={styles.subtitle}>Next.js with Shared Code & Images</p>

        <div style={styles.card}>
          <h2>Counter Hook Demo</h2>
          <p style={styles.count}>{count}</p>
          <div style={styles.buttonGroup}>
            <button onClick={decrement} style={styles.button}>
              -
            </button>
            <button onClick={reset} style={styles.button}>
              Reset
            </button>
            <button onClick={increment} style={styles.button}>
              +
            </button>
          </div>
        </div>

        <div style={styles.card}>
          <h2>Shared Utilities Demo</h2>
          <p>
            <strong>Current Date:</strong> {formatDate(currentDate)}
          </p>
          <p>
            <strong>Price:</strong> {formatCurrency(99.99)}
          </p>
          <p>
            <strong>Large Number:</strong> {formatNumber(largeNumber)}
          </p>
          <p>
            <strong>Initials ({userName}):</strong> {getInitials(userName)}
          </p>
          <p>
            <strong>Truncated Text:</strong> {truncate(sampleText, 40)}
          </p>
        </div>

        {/* Banner Image */}
        <div style={styles.card}>
          <h2>Shared Image Example</h2>
          <Image
            src={bannerImg}
            alt="Banner"
            width={400}
            height={300}
            style={styles.banner}
          />
        </div>

        <div style={styles.navigation}>
          <Link href="/about" style={styles.link}>
            Go to About Page →
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
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  logo: {
    borderRadius: "50%",
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
  count: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "1rem 0",
    color: "#0070f3",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  banner: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "1rem",
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
