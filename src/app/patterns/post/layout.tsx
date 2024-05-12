import Navbar from "@/components/statefull/Navbar";

export default function PatternPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Navbar />
      <div className="h-screen w-full overflow-scroll px-4 py-2">
        {children}
      </div>
    </section>
  );
}
