import styles from "./styles.css"

export default function ConferenceLayout({ children }) {
  return (
      <>
          <header style={styles.header}>
            <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
          </header>
          <section>{ children}</section>
      </>
  );
}
