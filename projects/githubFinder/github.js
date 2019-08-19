class Github {
  constructor() {
    this.client_id = '7953fc7dfd4f90129d37';
    this.client_secret = '7d55a838f8bc0eda81673c75fe865ac458bd91e9';
  }

  async getUser(username) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
