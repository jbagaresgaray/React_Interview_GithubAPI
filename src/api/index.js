import { API_URL } from "../constants";

const GithubService = {
  getUser(username) {
    return fetch(`${API_URL}/users/${username}`).then((response) =>
      response.json()
    );
  },
  getUserRepository(username) {
    return fetch(`${API_URL}/users/${username}/repos`).then((response) =>
      response.json()
    );
  },
  getUserFollowers(username) {
    return fetch(`${API_URL}/users/${username}/followers`).then((response) =>
      response.json()
    );
  },
  getUserFollowing(username) {
    return fetch(`${API_URL}/users/${username}/following`).then((response) =>
      response.json()
    );
  },
  getUserOrganizations(username) {
    return fetch(`${API_URL}/users/${username}/orgs`).then((response) =>
      response.json()
    );
  },
  getUserProjects(username) {
    return fetch(`${API_URL}/users/${username}/projects`).then((response) =>
      response.json()
    );
  },
  getUserPackages(username) {
    return fetch(`${API_URL}/users/${username}/projects`).then((response) =>
      response.json()
    );
  },
};

export default GithubService;
