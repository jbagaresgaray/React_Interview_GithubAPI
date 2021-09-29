import { createAsyncThunk } from "@reduxjs/toolkit";
import GithubService from "../../api";

export const getUser = createAsyncThunk("github/getUser", async (username) => {
  const response = await GithubService.getUser(username);
  return response;
});

export const getUserRepository = createAsyncThunk(
  "github/getUserRepository",
  async (username) => {
    const response = await GithubService.getUserRepository(username);
    return response;
  }
);

export const getUserFollowers = createAsyncThunk(
  "github/getUserFollowers",
  async (username) => {
    const response = await GithubService.getUserFollowers(username);
    return response;
  }
);

export const getUserFollowing = createAsyncThunk(
  "github/getUserFollowing",
  async (username) => {
    const response = await GithubService.getUserFollowing(username);
    return response;
  }
);

export const getUserOrganizations = createAsyncThunk(
  "github/getUserOrganizations",
  async (username) => {
    const response = await GithubService.getUserOrganizations(username);
    return response;
  }
);

export const getUserProjects = createAsyncThunk(
  "github/getUserProjects",
  async (username) => {
    const response = await GithubService.getUserProjects(username);
    return response;
  }
);

export const getUserPackages = createAsyncThunk(
  "github/getUserPackages",
  async (username) => {
    const response = await GithubService.getUserPackages(username);
    return response;
  }
);
