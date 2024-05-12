import { Chart } from "@/components/stateless/BasicChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold">NDash</h2>
        <small>
          Made with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </small>
      </div>
      {/*  */}
      <Chart />
    </main>
  );
}
