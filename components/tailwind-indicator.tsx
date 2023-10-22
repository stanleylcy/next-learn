export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-6 bg-gray-12 p-3 font-mono text-1 text-gray-1">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="2xl:hidden hidden xl:block">xl</div>
      <div className="2xl:block hidden">2xl</div>
    </div>
  )
}
