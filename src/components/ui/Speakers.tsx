import { Speaker } from "@prisma/client";

export default function Speakers({ speakers }: { speakers: Speaker[] }) {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {speakers.map((speaker: Speaker, index: number) => (
          <li
            key={`speaker-${index}`}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={speaker.avatar || "/img/placeholder.png"}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {speaker.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {speaker.jobTitle}
                </p>
              </div>
            </div>
            <a
              href={speaker.website || "#"}
              className="rounded-full bg-transparent px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
