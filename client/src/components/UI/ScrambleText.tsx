import { useEffect, useState } from "react";

interface ScrambleTextProps {
  texts: string[];
  className?: string;
  wrapper?: boolean;
  scrambleSpeed?: number;
  holdDuration?: number;
}

const CHARS = Array.from({ length: 95 }, (_, i) =>
  String.fromCharCode(i + 32)
).join("");

function getRandomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

const ScrambleText = ({
  texts,
  className = "",
  wrapper = true,
  scrambleSpeed = 30,
  holdDuration = 1500,
}: ScrambleTextProps) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const target = texts[displayIndex];

    const scramble = () => {
      let result = "";
      for (let i = 0; i < target.length; i++) {
        if (i < frame) {
          result += target[i];
        } else {
          result += getRandomChar();
        }
      }
      setDisplayedText(result);

      if (frame <= target.length) {
        setFrame((f) => f + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFrame(0);
          setDisplayIndex((prev) => (prev + 1) % texts.length);
        }, holdDuration + 1000);
      }
    };

    interval = setInterval(scramble, scrambleSpeed);
    return () => clearInterval(interval);
  }, [displayIndex, texts, scrambleSpeed, holdDuration, frame]);

  return (
    <div className={`text-xl font-bold text-gray-800 ${className}`}>
      {wrapper ? `<${displayedText}/>` : displayedText}
    </div>
  );
};

export default ScrambleText;
