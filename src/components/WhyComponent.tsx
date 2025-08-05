import type { Why } from '../types/Why';

export default function WhyComponent({ whyContent }: { whyContent: Why }) {
  return (
    <div className="pt-28">
      <div className="h-72 w-full overflow-hidden md:h-96">
        <img
          src={whyContent.data.image.url}
          alt={whyContent.data.image.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col space-y-5 px-5 pt-5 md:px-0">
        <div className="flex justify-end">
          <p className="mytext-muted p-small">{whyContent.data.createdAt}</p>
        </div>
        <div className="flex">
          <h1 className="mytext-muted h1">{whyContent.data.title.toUpperCase()}</h1>
          {whyContent.data.titleAppend && (
            <h1 className="mytext-muted h1 px-2">{whyContent.data.titleAppend.toUpperCase()}</h1>
          )}
        </div>
      </div>
    </div>
  );
}
