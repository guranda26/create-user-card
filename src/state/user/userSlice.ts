// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  name: string;
  surname: string;
  role?: string;
  picture: string;
  socialNetworks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

interface UserState {
  userInfo: UserInfo;
}

const initialState: UserState = {
  userInfo: {
    name: "",
    surname: "",
    role: "",
    picture: "",
    socialNetworks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.userInfo.name = action.payload;
    },
    updateSurname(state, action: PayloadAction<string>) {
      state.userInfo.surname = action.payload;
    },
    updateRole(state, action: PayloadAction<string>) {
      state.userInfo.role = action.payload;
    },
    updateSocialNetwork(
      state,
      action: PayloadAction<{
        network: keyof UserInfo["socialNetworks"];
        link: string;
      }>
    ) {
      const { network, link } = action.payload;
      state.userInfo.socialNetworks[network] = link;
    },
    updatePicture(state, action: PayloadAction<string>) {
      state.userInfo.picture = action.payload;
    },
  },
});

export const {
  updateName,
  updateSurname,
  updateSocialNetwork,
  updatePicture,
  updateRole,
} = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.userInfo;
export default userSlice.reducer;
