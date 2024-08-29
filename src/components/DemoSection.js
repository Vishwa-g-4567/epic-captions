import SparklesIcon from "@/components/SparklesIcon";
export default function DemoSection() {
  return (
    <section className="flex sm:flex-row flex-col justify-around mt-12 items-center">
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://vishwa-epic-captions.s3.ap-south-1.amazonaws.com/without-captions.mp4"
          preload="true"
          muted
          autoPlay
          loop
        ></video>
      </div>
      <div className="my-4">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://vishwa-epic-captions.s3.ap-south-1.amazonaws.com/with-captions.mp4"
          preload="true"
          muted
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
}
