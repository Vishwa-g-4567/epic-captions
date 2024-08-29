import TranscriptionItem from "@/components/TranscriptionItem";

export default function TranscriptionEditor({
  awsTranscriptionItems,
  setAwsTranscriptionItems,
}) {
  function updateTranscriptionItem(index, prop, ev) {
    const newAWSItems = [...awsTranscriptionItems];
    const newItem = { ...newAWSItems[index] };
    newItem[prop] = ev.target.value;
    newAWSItems[index] = newItem;
    setAwsTranscriptionItems(newAWSItems);
  }
  return (
    <>
      <div className="grid grid-cols-3 sticky top-0 bg-violet-800/30 rounded-md p-2">
        <div className="text-center">From</div>
        <div className="text-center">End</div>
        <div className="text-center">Content</div>
      </div>
      {awsTranscriptionItems.length > 0 && (
        <div className="h-48 sm:h-[700px] overflow-y-scroll sm:overflow-auto">
          {awsTranscriptionItems.map((item, key) => (
            <div key={key}>
              <TranscriptionItem
                item={item}
                handleStartTimeChange={(ev) =>
                  updateTranscriptionItem(key, "start_time", ev)
                }
                handleEndTimeChange={(ev) =>
                  updateTranscriptionItem(key, "end_time", ev)
                }
                handleContentChange={(ev) =>
                  updateTranscriptionItem(key, "content", ev)
                }
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
