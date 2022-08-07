import BeatLoader from "react-spinners/BeatLoader";

function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="space-y-4">
        <span className="text-2xl font-semibold">Loading, please wait...</span>
        <div className="flex justify-center w-full">
          <BeatLoader color="#F9A109" size={40} speedMultiplier={0.5} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
