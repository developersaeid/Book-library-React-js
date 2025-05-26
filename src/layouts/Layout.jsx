import Styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={Styles.header}>
        <h1>Book App</h1>
        <h3>Adding your favorite book</h3>
      </header>
      {children}
      <footer className={Styles.footer}><p>Developed By Saeid 🧑🏻‍💻</p></footer>
    </>
  );
}

export default Layout;
