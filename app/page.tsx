import { PageIntro } from "@/components/PageIntro";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <PageIntro>백엔드 개발자의 학습 기록과 회고</PageIntro>
      <Image
        src="/images/mainImage.png"
        alt="블로그 대표 이미지"
        width={1200}
        height={630}
        loading="eager"
        className="mx-auto mt-5 h-auto max-h-[calc(100dvh-23rem)] w-auto max-w-full rounded-[10px] object-contain"
      />
    </>
  );
}
