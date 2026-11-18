function Footer() {
  return (
    <footer className="mt-16 border-t border-line/70 px-4 py-10 text-center">
      <p className="font-serif text-lg italic text-ink-soft">
        Forever in our hearts
      </p>
      <p className="mt-2 text-xs text-ink-muted">
        &copy; {new Date().getFullYear()} &middot; Designed by Eche Inc.
      </p>
    </footer>
  );
}

export default Footer;
