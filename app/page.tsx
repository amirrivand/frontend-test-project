import SearchModule from "@/modules/Search/Search";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <header></header>
        <main className="border bg-white w-[60vw] min-h-[30%] p-4">
          <SearchModule />
        </main>
      </div>
    </>
  );
}
