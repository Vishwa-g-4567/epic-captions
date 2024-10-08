"use client";
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionsHelpers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilePage({ params }) {
  const filename = params.filename;
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);
  const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);
  useEffect(() => {
    getTranscription();
  }, [filename]);
  function getTranscription() {
    setIsFetchingInfo(true);
    axios.get("/api/transcribe?filename=" + filename).then((response) => {
      setIsFetchingInfo(false);
      const status = response.data?.status;
      const transcription = response.data?.transcription;
      if (status == "IN_PROGRESS") {
        setIsTranscribing(true);
        setTimeout(getTranscription, 3000);
      } else {
        setIsTranscribing(false);
        setAwsTranscriptionItems(
          clearTranscriptionItems(transcription.results.items)
        );
      }
    });
  }
  if (isTranscribing) {
    return <div className="mt-8">Transcribing your video...</div>;
  }
  if (isFetchingInfo) {
    return <div className="mt-8">Fetching Information...</div>;
  }
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
        <div>
          <h2 className="text-2xl mt-8 mb-4 text-white/80">Transcription</h2>
          <TranscriptionEditor
            awsTranscriptionItems={awsTranscriptionItems}
            setAwsTranscriptionItems={setAwsTranscriptionItems}
          />
        </div>
        <div>
          <h2 className="text-2xl mt-8 mb-4 text-white/80">Result</h2>
          <ResultVideo
            filename={filename}
            transcriptionItem={awsTranscriptionItems}
          />
        </div>
      </div>
    </div>
  );
}
