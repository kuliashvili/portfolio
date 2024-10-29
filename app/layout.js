import "./styles/globals.css";

export const metadata = {
  title: "Kulo Portfolio",
  description: "Giorgi Kuliashvili Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
