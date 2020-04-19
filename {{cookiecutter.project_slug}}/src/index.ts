import fetch from 'node-fetch';

export class GitHub {
  username: string;
  constructor(username: string) {
    this.username = username;
  }

  async getRepos() {
    const response = await fetch(
        `https://api.github.com/users/${this.username}/repos`
    );

    return response;
  }
}
