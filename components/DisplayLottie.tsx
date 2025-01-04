'use client';

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import type { Options } from "react-lottie";

const Lottie = dynamic(
  () => import('react-lottie').then((module: any) => module.default) as Promise<React.ComponentType<{options: Options}>>,
  { ssr: false }
);

type Props = {
  animationPath: string;
};

const DisplayLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, [animationPath]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (!animationData) {
    return null;
  }

  return (
    <div style={{ width: "80%" }} onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default DisplayLottie;
