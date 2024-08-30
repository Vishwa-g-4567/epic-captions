export function clearTranscriptionItems(items) {
  items.forEach((item, key) => {
    if (!item.start_time) {
      const prev = items[key - 1];
      prev.alternatives[0].content += item.alternatives[0].content;
      delete items[key];
    }
  });
  return items.map((item) => {
    const { start_time, end_time } = item;
    const content = item.alternatives[0].content;
    return { start_time, end_time, content };
  });
}

function secondsToHHMMSSMS(timeString) {
  const d = new Date(parseFloat(timeString) * 1000);
  return d.toISOString().slice(11, 23).replace(".", ",");
}

export function transcriptionItemsToSrt(items) {
  let srt = "";
  let i = 1;
  let sentence = "";
  let sentenceStartTime = items[0]?.start_time || 0;

  items.forEach((item, index) => {
    if (!item) return;

    const { start_time, end_time, content } = item;

    // Concatenate words into a sentence
    sentence += (sentence ? " " : "") + content;

    // Check if the content ends with a punctuation mark or if 1 second has passed
    if (
      /[.!?]/.test(content) ||
      parseFloat(end_time) - parseFloat(sentenceStartTime) >= 1 ||
      index === items.length - 1 // Ensure the last item is added
    ) {
      // sequence
      srt += i + "\n";

      // timestamp
      srt +=
        secondsToHHMMSSMS(sentenceStartTime) +
        " --> " +
        secondsToHHMMSSMS(end_time) +
        "\n";

      // content
      srt += sentence + "\n\n";

      // Reset for the next sentence
      i++;
      sentence = "";
      sentenceStartTime = end_time;
    }
  });

  return srt;
}
