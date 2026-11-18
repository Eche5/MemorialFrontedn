import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className="flex items-center justify-center py-16" role="status">
      <div className={styles.spinner}></div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export default Loader;
