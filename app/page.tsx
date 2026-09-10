import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="flex flex-col items-center justify-center px-4 pt-6 sm:pt-8">
        <p className="flex max-w-[34rem] flex-col text-center text-sm leading-7 font-medium tracking-[-0.015em] text-[var(--muted)] sm:text-base sm:leading-8">
          <span>Learning and reflections</span>

          <span className="mt-4">from someone</span>
          <span>who wants to make the world better</span>

          <span className="mt-4">through computer technology</span>
        </p>
      </div>
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
