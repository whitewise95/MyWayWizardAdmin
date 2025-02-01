'use client'

import "./globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={"w-full h-full"}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        </body>
        </html>
    );
}
