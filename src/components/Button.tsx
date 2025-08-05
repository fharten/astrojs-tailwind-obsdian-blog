export default function Button({ text, search }: { text: string; search?: boolean }) {
  return (
    <button
      type="submit"
      className={`p-small mytext-base bg-dark md:hover:bg-base focus:border-highlight border-muted rounded-lg text-center transition-all focus:ring-4 focus:outline-none sm:w-fit md:hover:scale-105 ${search ? 'absolute end-2.5 bottom-2.5 px-4 py-2' : 'px-5 py-3'}`}
    >
      {text}
    </button>
  );
}
