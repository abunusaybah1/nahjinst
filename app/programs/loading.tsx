export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#144727]"></span>
      <span className="ml-4 text-[#144727] text-lg font-semibold">Loading...</span>
    </div>
  );
}
