class Github{
  constructor(){
    this.client_id='0cd174a161d14e58d42c';
    this.client_secret = '7bafab8370c6f529f64d89e40b427c8c262da6dd';
  }

  async getUser(user){
    const profileData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const data = await profileData.json();

    return{
      profileData:data
    };
  }
}