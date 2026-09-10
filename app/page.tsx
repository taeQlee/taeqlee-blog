import { PageIntro } from "@/components/PageIntro";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home-page">
      <PageIntro>백엔드 개발자의 학습 기록과 회고</PageIntro>
      <div className="home-image">
        <Image
          src="/images/mainImage.png"
          alt="블로그 대표 이미지"
          fill
          loading="eager"
          sizes="(max-width: 832px) calc(100vw - 2rem), 832px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
