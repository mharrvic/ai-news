import { NewsPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">AI News</h1>
      <p className="mb-4">
        <div className="mb-4">
          <p>
            The <strong>AI News Curator</strong> brings you the latest in AI
            from latent.space, focusing on:
          </p>
          <ul className="list-disc pl-5">
            <li>RAG systems</li>
            <li>Finetuning</li>
            <li>GenAI/LLM news</li>
            <li>Document processing</li>
            <li>MLOps</li>
            <li>LLMOps</li>
            <li>Software Engineering techniques</li>
            <li>Data ingestion</li>
            <li>AI ethics</li>
            <li>AI in healthcare</li>
            <li>AI in finance</li>
            <li>AI in education</li>
            <li>Autonomous systems</li>
            <li>Natural language processing (NLP)</li>
            <li>Computer vision</li>
            <li>Robotics</li>
            <li>AI hardware advancements</li>
            <li>AI policy and regulations</li>
            <li>AI startups and investments</li>
            <li>Security in AI</li>
            <li>Cloud service providers</li>
            <li>Security compliance</li>
            <li>On-premise deployment</li>
            <li>Cloud computing</li>
          </ul>

          <p className="mt-4">
            Each topic is accompanied by engaging descriptions and relevant
            links for in-depth information. Designed for busy readers seeking
            concise and informative summaries.
          </p>
        </div>
      </p>
      <hr />
      <div className="my-8">
        <NewsPosts />
      </div>
    </section>
  );
}
