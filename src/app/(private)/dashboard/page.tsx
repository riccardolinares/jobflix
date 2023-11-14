import Card from "@/components/ui/Card";

export default function Page() {
  const continueWatching = [
    {
      image: "/img/jobs/job-1.webp",
    },
    {
      image: "/img/jobs/job-2.webp",
    },
    {
      image: "/img/jobs/job-3.webp",
    },
  ];

  return (
    <>
      <h1 className="sr-only">Dashboard</h1>
      <h2>Continua a guardare</h2>
      <div className="flex flex-row gap-x-4 items-center justify-center ">
        {continueWatching.map((item, index) => (
          <div key={`watch-${index}`}>
            <Card key={index} image={item.image}></Card>
          </div>
        ))}
      </div>
    </>
  );
}
