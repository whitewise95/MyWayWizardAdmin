import "./globals.css";
import React from "react";

export default function RootLayout({children}) {
  return (
      <html lang="en">
      <body className={"w-full h-[1000px]"}>
      {children}
      </body>
      </html>
  );
}
