
export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4">
        <div className="slide-in-section bg-green-100 relative inline-block">
          <img alt='a photo'
            src='/images/home-background.png' />
          
          <div className="text-7xl min-w-96 text-right text-green-950  absolute inset-0 flex items-center justify-end p-6 sm:text-6xl">Study<br/> smarter,<br/> not harder.</div>
        </div>
      </main>

    </div>
  );
}
