import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "はま寿司 or ポポヤシ",
	description: "はま寿司なのか、ポポヤシなのか",
	openGraph: {
		title: "はま寿司 or ポポヤシ",
		description: "はま寿司なのか、ポポヤシなのか",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
