import { create } from "zustand";
import {immer} from "zustand/middleware/immer";

const useInspectionStore = create(
    immer((set) => ({
      messageId: null,
      setMessageId: (selectMessageId) =>
          set((state) => {
            state.messageId = selectMessageId;
          }),
    }))
);


export default useInspectionStore;