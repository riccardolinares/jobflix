import Container from "@/components/template/Container";
import VideoCard from "../../../components/ui/VideoCard";
import BackgroundSection from "@/components/template/BackgroundSection";

export default function Page() {
  const continueWatching = [
    {
      image: "/img/jobs/job-5.webp",
    },
  ];

  const other = [
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
    <BackgroundSection bg="/img/backgrounds/bg-2.svg">
      <Container>
        <div className="flex flex-col gap-y-16">
          <div>
            <h1 className="sr-only">Dashboard</h1>
            <h2 className="text-3xl text-blue font-bold">
              Continua a guardare
            </h2>
            <div className="flex flex-row gap-x-4 items-center justify-start mt-5">
              {continueWatching.map((item, index) => (
                <div key={`watch-${index}`}>
                  <VideoCard
                    key={index}
                    image={item.image}
                    bgColor="bg-blue/50"
                    withPlay
                  ></VideoCard>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-blue font-bold">Novità</h2>
            <div className="flex flex-row gap-x-4 items-center justify-start mt-5">
              {other.map((item, index) => (
                <div key={`watch-${index}`}>
                  <VideoCard key={index} image={item.image}></VideoCard>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-blue font-bold">Più visti</h2>
            <div className="flex flex-row gap-x-4 items-center justify-start mt-5">
              {other.map((item, index) => (
                <div key={`watch-${index}`}>
                  <VideoCard key={index} image={item.image}></VideoCard>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-blue font-bold">Lavori creativi</h2>
            <div className="flex flex-row gap-x-4 items-center justify-start mt-5">
              {other.map((item, index) => (
                <div key={`watch-${index}`}>
                  <VideoCard key={index} image={item.image}></VideoCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </BackgroundSection>
  );
}
