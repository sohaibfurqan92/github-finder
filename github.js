class Github{
  constructor(){
    this.client_id='0cd174a161d14e58d42c';
    this.client_secret = '27d71226b86ee3c7a5c2c0dbd2211a906b25b722';
  }

  async getUser(user){
    const profileData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const data = await profileData.json();

    return{
      profileData:data
    };
  }
}