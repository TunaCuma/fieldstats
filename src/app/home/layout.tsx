import React from "react";

export const metadata = {
  title: "My Next.js App",
  description: "A description of my Next.js app",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>{/* You can add additional head tags here */}</head>
      <body>
        <header>
          <nav>
            <ul></ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
