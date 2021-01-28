const github = new Github();
const ui = new UI();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
  const input = e.target.value;
  if(input!=''){
    //Make HTTP call to github API
    github.getUser(input).then(data=>{
      if(data.profileData.message=='Not Found'){
        //show alert
      } else{
        //show profile
        ui.showProfile(data.profileData);
      }
    });
  } else{
    //clear the DOM
  }
});