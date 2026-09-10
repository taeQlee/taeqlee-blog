import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  return (
    <>
      <PageIntro title="안녕하세요. taeQ 입니다.">
        백엔드 개발자의 학습 기록과 회고
      </PageIntro>
      <section aria-labelledby="recent-posts" className="mt-14 sm:mt-16">
        <h2 id="recent-posts" className="section-label">
          Recent writing
        </h2>
        <PostList posts={getAllPosts()} />
      </section>
    </>
  );
}
