// layout for adding scripts
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script src="https://d3js.org/d3.v5.js" />
      <Script src="https://mpld3.github.io/js/mpld3.v0.5.8.js" />
      {children}
    </>
  );
}
