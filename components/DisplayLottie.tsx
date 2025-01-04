'use client';

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie').then((mod) => mod.default), { ssr: false });

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
