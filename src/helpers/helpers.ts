import { IWord } from "../interface/interface";

export const getAudioUrl = (data:IWord) => {
    const audio = data.phonetics.find(
      (p) => p.audio != null && p.audio.trim().length > 0
    );

    if (audio == null) {
      return null;
    }

    return audio.audio!;
  };

  export const getPhonetic = (data:IWord) => {
    const text = data.phonetics.find(
      (p) => p.text != null && p.text.trim().length > 0
    );

    if (text == null) {
      return null;
    }

    return text.text!;
  };