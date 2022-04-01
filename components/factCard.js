export default function FactCard({ fact, description, children }) {
  return (
    <div className="text-center rounded bg-gray-100 p-4 max-w-xs h-full dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <div className="flex justify-center mx-auto aspect-[3/2] max-h-24">
        {children}
      </div>
      <div className="text-2xl font-bold">{fact}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}
