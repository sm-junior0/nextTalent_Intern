import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Challenge {
  id: string;
  title: string;
  company: string;
  skills: string[];
  seniority: string;
  timeline: string;
  status: 'open' | 'completed' | 'ongoing';
}

interface ChallengesState {
  items: Challenge[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ChallengesState = {
  items: [],
  status: 'idle',
  error: null,
};

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    setChallenges: (state, action: PayloadAction<Challenge[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setChallenges } = challengesSlice.actions;
export default challengesSlice.reducer;