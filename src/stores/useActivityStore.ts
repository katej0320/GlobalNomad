import { create } from "zustand";

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface ActivityData {
  title: string;
  category: string;
  description: string;
  address: string;
  price: number;
  schedules: Schedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

interface ActivityStore {
  activity: ActivityData;
  setActivity: (data: Partial<ActivityData>) => void;
  addSchedule: () => void;
  removeSchedule: (index: number) => void;
  updateSchedule: (index: number, field: keyof Schedule, value: string) => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activity: {
    title: "",
    category: "",
    description: "",
    address: "",
    price: 0,
    schedules: [],
    bannerImageUrl: "",
    subImageUrls: [],
  },
  setActivity: (data) => set((state) => ({ activity: { ...state.activity, ...data } })),
  addSchedule: () =>
    set((state) => ({
      activity: {
        ...state.activity,
        schedules: [...state.activity.schedules, { date: "", startTime: "", endTime: "" }],
      },
    })),
  removeSchedule: (index) =>
    set((state) => ({
      activity: {
        ...state.activity,
        schedules: state.activity.schedules.filter((_, i) => i !== index),
      },
    })),
  updateSchedule: (index, field, value) =>
    set((state) => {
      const updatedSchedules = [...state.activity.schedules];
      updatedSchedules[index] = { ...updatedSchedules[index], [field]: value };
      return { activity: { ...state.activity, schedules: updatedSchedules } };
    }),
}));
