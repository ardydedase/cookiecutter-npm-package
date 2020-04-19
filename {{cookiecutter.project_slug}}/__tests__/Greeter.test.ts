/* eslint-disable no-undef */
import 'jest';
import { GitHub } from '../src/index';

test('My GitHub repos', async () => {
  const myGitHub = new GitHub('ardydedase');
  const response = await myGitHub.getRepos();
  const repos = await response.json();
  expect(repos.length).toBeGreaterThan(0);
});