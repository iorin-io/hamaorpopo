"use client";
import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { css } from "../../styled-system/css";
import { Mochiy_Pop_One } from "next/font/google";

const Mochiy = Mochiy_Pop_One({
	weight: "400",
	subsets: ["latin"],
});

const body = css({
	height: "100vh",
	backgroundColor: "#f9f9f9",
	padding: "20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
});

const flex = css({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	flexDirection: "column",
});

const flexBox = css({
	height: "10dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	margin: "20px",
});

const heading = css({
	fontSize: "2rem",
	marginBottom: "20px",
	color: "#333",
});

const animation = keyframes`
  100% { background-position-x: 200%; }
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 1.2rem;
	color: #fff;
	background: linear-gradient(to right, Magenta, yellow, Cyan, Magenta) 0%
		center/200%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s ease;
	text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.9);
	animation: ${animation} 2s linear infinite;
`;

const textStyle = css({
	margin: "20px",
	fontSize: "clamp(1rem, 10vw, 3rem)",
	color: "#333",
	whiteSpace: "nowrap",
});

const tweetButton = css({
	padding: "10px 20px",
	color: "#fff",
	background: "#1da1f2",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	transition: "background 0.3s ease",
	textDecoration: "none",
	display: "inline-block",
	"&:hover": {
		background: "#0d95e8",
	},
});

export default function Home() {
	const [pushed, setPushed] = useState(false);
	const [text, setText] = useState("");

	const generateText = () => {
		const part1 = Math.random() < 0.5 ? "は" : "ポ";
		const part2 = Math.random() < 0.5 ? "は" : "ポ";
		const part3 = Math.random() < 0.5 ? "はま" : "ポポ";
		const part4 = Math.random() < 0.5 ? "寿司" : "ヤシ";
		setText(`${part1}！${part2}！${part3}${part4}‼️`);
		setPushed(true);
	};
	return (
		<div className={body}>
			<div className={flex}>
				<div className={flexBox}>
					<h1 className={`${heading} ${Mochiy.className}`}>
						はま寿司 or ポポヤシ
					</h1>
					<Button onClick={generateText} className={Mochiy.className}>
						ガチャ
					</Button>
				</div>
				<div className={flexBox}>
					<p className={`${textStyle} ${Mochiy.className}`}>{text}</p>
					{pushed && (
						<div>
							<a
								href={`https://x.com/intent/post?text=${text}&url=${encodeURI("https://hamaorpopo.iorin.io")}`}
								className={`${tweetButton} ${Mochiy.className}`}
							>
								ツイートする
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
