import { NewsPosts } from "app/components/posts";

export const metadata = {
  title: "News",
  description: "Read my news.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">AI News</h1>
      <NewsPosts />
    </section>
  );
}
