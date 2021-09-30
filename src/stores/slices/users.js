import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  getUserFollowers,
  getUserFollowing,
  getUserOrganizations,
  getUserPackages,
  getUserProjects,
  getUserRepository,
} from "../middleware/users";

const initialState = {
  isLoadingUser: false,
  isLoadingRepos: false,
  isLoadingFollowers: false,
  isLoadingFollowing: false,
  isLoadingOrganization: false,
  isLoadingProjects: false,
  isLoadingPackages: false,
  user: null,
  repos: [],
  followings: [],
  followers: [],
  organizations: [],
  projects: [],
  packages: [],
  errorUser: null,
  errorRepos: null,
  errorFollowings: null,
  errorFollowers: null,
  errorOrganizations: null,
  errorProjects: null,
  errorPackages: null,
};

const { reducer } = createSlice({
  name: "github",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUser.pending, (state) => {
      state.isLoadingUser = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.errorUser = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserRepository.pending, (state) => {
      state.isLoadingRepos = true;
    });
    builder.addCase(getUserRepository.fulfilled, (state, { payload }) => {
      state.isLoadingRepos = false;
      state.repos = payload;
    });
    builder.addCase(getUserRepository.rejected, (state, action) => {
      state.isLoadingRepos = false;
      state.errorRepos = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserFollowers.pending, (state) => {
      state.isLoadingFollowers = true;
    });
    builder.addCase(getUserFollowers.fulfilled, (state, { payload }) => {
      state.isLoadingFollowers = false;
      state.followers = payload;
    });
    builder.addCase(getUserFollowers.rejected, (state, action) => {
      state.isLoadingFollowers = false;
      state.errorFollowers = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserFollowing.pending, (state) => {
      state.isLoadingFollowing = true;
    });
    builder.addCase(getUserFollowing.fulfilled, (state, { payload }) => {
      state.isLoadingFollowing = false;
      state.followings = payload;
    });
    builder.addCase(getUserFollowing.rejected, (state, action) => {
      state.isLoadingFollowing = false;
      state.errorFollowings = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserOrganizations.pending, (state) => {
      state.isLoadingOrganization = true;
    });
    builder.addCase(getUserOrganizations.fulfilled, (state, { payload }) => {
      state.isLoadingOrganization = false;
      state.organizations = payload;
    });
    builder.addCase(getUserOrganizations.rejected, (state, action) => {
      state.isLoadingOrganization = false;
      state.errorOrganizations = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserProjects.pending, (state) => {
      state.isLoadingProjects = true;
    });
    builder.addCase(getUserProjects.fulfilled, (state, { payload }) => {
      state.isLoadingProjects = false;
      state.projects = payload;
    });
    builder.addCase(getUserProjects.rejected, (state, action) => {
      state.isLoadingProjects = false;
      state.errorProjects = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
    builder.addCase(getUserPackages.pending, (state) => {
      state.isLoadingPackages = true;
    });
    builder.addCase(getUserPackages.fulfilled, (state, { payload }) => {
      state.isLoadingPackages = false;
      state.packages = payload;
    });
    builder.addCase(getUserPackages.rejected, (state, action) => {
      state.isLoadingPackages = false;
      state.errorPackages = action.error;
    });
    // ======================================================
    // ======================================================
    // ======================================================
  },
});

const selectRoot = (state) => state.github;
export const githubSelectors = {
  user: createSelector(selectRoot, (state) => state.user),
  repos: createSelector(selectRoot, (state) => state.repos),
  followings: createSelector(selectRoot, (state) => state.followings),
  followers: createSelector(selectRoot, (state) => state.followers),
  organizations: createSelector(selectRoot, (state) => state.organizations),
  projects: createSelector(selectRoot, (state) => state.projects),
  packages: createSelector(selectRoot, (state) => state.packages),

  isLoadingUser: createSelector(selectRoot, (state) => state.isLoadingUser),
  isLoadingRepos: createSelector(selectRoot, (state) => state.isLoadingRepos),
  isLoadingFollowers: createSelector(
    selectRoot,
    (state) => state.isLoadingFollowers
  ),
  isLoadingFollowing: createSelector(
    selectRoot,
    (state) => state.isLoadingFollowing
  ),
  isLoadingOrganization: createSelector(selectRoot, (state) => state.isLoadingOrganization),
  isLoadingProjects: createSelector(selectRoot, (state) => state.isLoadingProjects),
  isLoadingPackagesP: createSelector(selectRoot, (state) => state.isLoadingPackagesP),
  
  
};

export default reducer;
