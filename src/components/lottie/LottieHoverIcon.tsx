import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

type Props = {
  animationData: object;
  size?: number;
};

export default function LottieHoverIcon({ animationData, size = 28 }: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const play = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (
    <div
      onMouseEnter={play}
      onFocus={play}
      tabIndex={0}
      style={{ width: size, height: size }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
      />
    </div>
  );
}