"use client";
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  const generateText = () => {
    const part1 = Math.random() < 0.5 ? "は" : "ポ";
    const part2 = Math.random() < 0.5 ? "は" : "ポ";
    const part3 = Math.random() < 0.5 ? "はま寿司" : "ポポヤシ";
    setText(`${part1}！${part2}！${part3}‼️`);
  }
  return (
    <div>
      <h1>はま寿司 or ポポヤシ</h1>
      <button onClick={generateText}>ガチャ</button>
      <p>{text}</p>
    </div>
  );
}