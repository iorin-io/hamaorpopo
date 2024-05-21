import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://hamaorpopo.iorin.io"),
	title: "はま寿司 or ポポヤシ",
	description: "はま寿司なのか、ポポヤシなのか",
	openGraph: {
		title: "はま寿司 or ポポヤシ",
		description: "はま寿司なのか、ポポヤシなのか",
	},
	twitter: {
		card: "summary_large_image",
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
