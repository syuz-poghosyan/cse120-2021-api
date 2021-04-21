function handleTitleEditChange(){
 Myformdata.title=document.getElementById("titleForm").value;
}

function handleFullNameEditChange(){
 Myformdata.fullname=document.getElementById("fullNameForm").value;
}

function handleAuthorEditChange(){
 Myformdata.author=document.getElementById("authorForm").value; 
}

function handleColourEditChange(){
  Myformdata.colour=document.getElementById("colourForm").value; 
}

function handleCoverEditChange(){
 Myformdata.covertype=document.getElementById("coverTypeForm").value;
}

function handleOtherCoverEditChange(){
 Myformdata.othercovertype=document.getElementById("otherCoverForm").value;
}

function handlePagesEditChange(){
 Myformdata.numberofpages=document.getElementById("pagesForm").value;
}

function handlePriceEditChange(){
  Myformdata.price=document.getElementById("priceForm").value;
}

function handleCurrencyEditChange(){
  Myformdata.currency=document.getElementById("currencyForm").value;
}

function handleLanguageEditChange(){
 Myformdata.language=document.getElementById("langForm").value; 
}

function handleOtherLangEditChange(){
 Myformdata.otherlanguage=document.getElementById("otherLangForm").value;
}

function handleOrigLangEditChange(){
 Myformdata.originallanguage=document.getElementById("origLangForm").value;
}

function handleOtherOrigLangEditChange(){
 Myformdata.otheroriginallanguage=document.getElementById("otherOrigLangForm").value;
}

function handleEditionEditChange(){
 Myformdata.edition=document.getElementById("editionForm").value; 
}

function handleDimensionsEditChange(){
 Myformdata.dimensions=document.getElementById("dimensionsForm").value;
}

function handlePublisherEditChange(){
 Myformdata.publisher=document.getElementById("publisherForm").value;
}

function handlePublMonthEditChange(){
 Myformdata.publishingmonth=document.getElementById("pubMonthForm").value;
}

function handlePublDayEditChange(){
 Myformdata.publishingday=document.getElementById("pubDayForm").value;
}

function handlePublYearEditChange(){
  Myformdata.publishingyear=document.getElementById("pubYearForm").value;
}

function handleOrigPubMonthEditChange(){
 Myformdata.originalpublishingmonth=document.getElementById("origPubMonthForm").value;
}

function handleOrigPubDayEditChange(){
 Myformdata.originalpublishingday=document.getElementById("origPubDayForm").value;
}

function handleOrigPubYearEditChange(){
 Myformdata.originalpublishingyear=document.getElementById("origPubYearForm").value;
}

function handleGenreEditChange(){
  Myformdata.genre=document.getElementById("genreForm").value;
}

function handleAgeRestEditChange(){
  Myformdata.agerestriction=document.getElementById("agerestrictForm").value;
}



function loadDanceEditItem(){
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_id").value = editItem["_id"];
  document.getElementById("firstNameEdit").value = editItem["firstName"];
  document.getElementById("LastNameEdit").value =editItem["Lastname"];
  document.getElementById("genderEdit").value = editItem["gender"];  
  document.getElementById("birthDateEdit").value = editItem["birthDate"]; 
  document.getElementById("addressEdit").value = editItem["address"]; 
  document.getElementById("emailEdit").value = editItem["email"]; 
  document.getElementById("phoneEdit").value = editItem["phone"]; 
  document.getElementById("facebookEdit").value = editItem["facebook"]; 
  document.getElementById("certificate1Edit").value = editItem["certificate1"]; 
  document.getElementById("certificate2Edit").value = editItem["certificate2"]; 
  document.getElementById("genreEdit").value = editItem["genre"];
  document.getElementById("competitionsEdit").value = editItem["competitionInfo"];
  document.getElementById("educationEdit").value = editItem["education"];
  document.getElementById("experiencesEdit").value = editItem["experienceAndSkills"]; 
  document.getElementById("itemsEdit").value = editItem["items"];
  document.getElementById("storyEdit").value = editItem["storyBehind"];
  document.getElementById("benefitsEdit").value = editItem["benefits"]; 
  document.getElementById("practicingDateEdit").value = editItem["startDate"];
  document.getElementById("frequencyEdit").value = editItem["frequency"];
  document.getElementById("durationEdit").value = editItem["duration"];
  document.getElementById("preferredWayEdit").value = editItem["wayToPractice"];
}

function EditData(e){
  console.log(UpdatedDanceData);
  var UpdatedDanceData= {};
  UpdatedDanceData.id=document.getElementById("_id").value;
  UpdatedDanceData.firstName=document.getElementById("firstNameEdit").value;
  UpdatedDanceData.Lastname=document.getElementById("LastNameEdit").value;
  UpdatedDanceData.gender=document.getElementById("genderEdit").value;
  UpdatedDanceData.birthDate=document.getElementById("birthDateEdit").value;
  UpdatedDanceData.address=document.getElementById("addressEdit").value;
  UpdatedDanceData.email=document.getElementById("emailEdit").value;
  UpdatedDanceData.phone=document.getElementById("phoneEdit").value;
  UpdatedDanceData.facebook=document.getElementById("facebookEdit").value;
  UpdatedDanceData.certificate1=document.getElementById("certificate1Edit").value;
  UpdatedDanceData.certificate2=document.getElementById("certificate2Edit").value;
  UpdatedDanceData.genre=document.getElementById("genreEdit").value;
  UpdatedDanceData.competitionInfo=document.getElementById("competitionsEdit").value;
  UpdatedDanceData.education=document.getElementById("educationEdit").value;
  UpdatedDanceData.experienceAndSkills=document.getElementById("experiencesEdit").value;
  UpdatedDanceData.items=document.getElementById("itemsEdit").value;
  UpdatedDanceData.storyBehind=document.getElementById("storyEdit").value;
  UpdatedDanceData.benefits=document.getElementById("benefitsEdit").value;
  UpdatedDanceData.startDate=document.getElementById("practicingDateEdit").value;
  UpdatedDanceData.frequency=document.getElementById("frequencyEdit").value;
  UpdatedDanceData.duration=document.getElementById("durationEdit").value;
  UpdatedDanceData.wayToPractice=document.getElementById("preferredWayEdit").value;
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data/update",
    data: UpdatedDanceData,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("successfully editted");
    },
    error: function (xhr) {
      console.error("Error in editting", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });  
}



var requiredFields = [
 "firstName", "frequency", "Lastname", "gender", "wayToPractice", "birthDate", "duration", "startDate", "education", "items", "genre"
]


var MyFormData={
  "owner": "Syuzanna",
  "project": "Dance",
  "firstName": "",
  "Lastname": "",
  "gender": "",
  "birthDate": "",
  "address": "",
  "email": "",
  "phone": "",
  "facebook": "", 
  "certificate1": "",
  "certificate2": "",
  "competitionInfo": "",
  "experienceAndSkills": "",
  "storyBehind": "",
  "benefits": "", 
  "genre": "",
  "education": "", 
  "items": "",
  "startDate": "", 
  "frequency": "",
  "duration": "",
  "wayToPractice": "",
}

function CheckData(){
  var keys = Object.keys(MyFormData);
  var some= 1;
  keys.forEach(key => {
  if (requiredFields.indexOf(key) > -1 && MyFormData[key] == "") {
   console.log(key, " is a required field, please add a value");
   if (key=="wayToPractice"){
    document.getElementById(key).style.color = "red";
   } 
   else if(key=="items"){
     document.getElementById(key).style.color="red";
   } 
   
   else if(key=="genre"){
     document.getElementById(key).style.color="red";
   }
   else if(key=="gender"){
     document.getElementById("genderlabel").style.color= "red";
   }
     else{
     if (document.getElementById(key)) {
      document.getElementById(key).style.backgroundColor = "red";
     }
   }
  some=0;

  
   }
 })

 console.log(MyFormData);
  return some;
}

function handleFirstNameChange(){
  MyFormData.firstName=document.getElementById("firstName").value;
  if(MyFormData.firstName!=""){
    document.getElementById("firstName").style.backgroundColor="white";
  }
}

function handleLastNameChange(){
  MyFormData.Lastname=document.getElementById("Lastname").value;
  if(MyFormData.Lastname!=""){
    document.getElementById("Lastname").style.backgroundColor="white";
  }
}

function handleGenderChange(event){
  MyFormData.gender= event.target.value;
  if (MyFormData.gender!=""){
    document.getElementById("genderlabel").style.color= "black";
  }
}

function handleBirthDateChange(){
  MyFormData.birthDate=document.getElementById("birthDate").value;
  if(MyFormData.birthDate!=""){
    document.getElementById("birthDate").style.backgroundColor="white";
  }
}

function handleAddressChange(){
  MyFormData.address=document.getElementById("address").value;
}

function handleEmailChange(){
  MyFormData.email=document.getElementById("email").value;
}

function handlePhoneChange(){
  MyFormData.phone=document.getElementById("phone").value;
}

function handleFacebookChange(){
  MyFormData.facebook=document.getElementById("facebook").value;
}

function handleCertificate1Change(){
  MyFormData.certificate1=document.getElementById("cert1").value;
}

function handleCertificate2Change(){
  MyFormData.certificate2=document.getElementById("cert2").value;
}

function handleDanceGenreChange(event){
  var st="";
  if (document.getElementById("type1").checked) {
      st= st.concat( document.getElementById("type1").value, "; ");
  }
  if (document.getElementById("type2").checked) {
   st= st.concat( document.getElementById("type2").value, "; ");
  }
  if (document.getElementById("type3").checked) {
      st= st.concat( document.getElementById("type3").value, "; ");
  }
  if (document.getElementById("type4").checked) {
      st= st.concat( document.getElementById("type4").value, "; ");
  }
  if (document.getElementById("type5").checked) {
      st= st.concat( document.getElementById("type5").value, "; ");
  }
  if (document.getElementById("type6").checked) {
      st= st.concat( document.getElementById("type6").value, "; ");
  }
  if (document.getElementById("typeother").checked) {
      st= st.concat( document.getElementById("othertext1").value, "; ");
  }
  if (st.length !=0){
    st=st.substr(0, st.length-2);
  }
  MyFormData.genre=st;
  if(MyFormData.genre!= ""){
    document.getElementById("genre").style.color="black";
  }
  
  if (document.getElementById("typeother").checked){
   document.getElementById("othertext1").style.display="block";
 } else{
   document.getElementById("othertext1").style.display="none";
 }
}

function handleCompetitionChange(){
  MyFormData.competitionInfo=document.getElementById("competitions").value;
}

function handleEducationChange(event){
  MyFormData.education=document.getElementById("education").value;
  if(MyFormData.education!=""){
    document.getElementById("education").style.backgroundColor="white";
  }
}

function handleExperienceChange(){
  MyFormData.experienceAndSkills= document.getElementById("skills").value;
}

function handleItemsChange(event){
 var st2="";
  if (document.getElementById("access1").checked) {
      st2= st2.concat( document.getElementById("access1").value, "; ");
  }
  if (document.getElementById("access2").checked) {
     st2= st2.concat( document.getElementById("access2").value, "; ");
  }
  if (document.getElementById("access3").checked) {
      st2= st2.concat( document.getElementById("access3").value, "; ");
  }
  if (document.getElementById("access4").checked) {
      st2= st2.concat( document.getElementById("access4").value, "; ");
  }
  if (document.getElementById("access5").checked) {
      st2= st2.concat( document.getElementById("access5").value, "; ");
  }
  if (document.getElementById("access6").checked) {
      st2= st2.concat( document.getElementById("access6").value, "; ");
  }
  if (document.getElementById("accessother").checked) {
      //st2= st2.concat( document.getElementById("itemother").value, "; ");
      st2= st2.concat( document.getElementById("itemother").value, "; ");
  }
  if (st2.length !=0){
    st2=st2.substr(0, st2.length-2);
  }
  MyFormData.items=st2;
   if (MyFormData.items!=""){
    document.getElementById("items").style.color="black";
  }
  
  if (document.getElementById("accessother").checked){
   document.getElementById("itemother").style.display="block";
 } else{
   document.getElementById("itemother").style.display="none";
 }
}


function handleStartDateChange(){
  MyFormData.startDate=document.getElementById("startDate").value;
  if(MyFormData.startDate!=""){
    document.getElementById("startDate").style.backgroundColor="white";
  }
}

function handleStoryChange(){
  MyFormData.storyBehind=document.getElementById("TextArea2").value;
}

function handleFrequencyChange(){
  MyFormData.frequency=document.getElementById("frequency").value;
  if(MyFormData.frequency!=""){
    document.getElementById("frequency").style.backgroundColor="white";
  }
}

function handleDurationChange(){
  MyFormData.duration=document.getElementById("duration").value;
  if(MyFormData.duration!=""){
    document.getElementById("duration").style.backgroundColor="white";
  }
}

function handleBenefitsChange(){
  MyFormData.benefits=document.getElementById("TextArea1").value;
}

function handlePracticeWayChange(e){
 var st3="";
  if (document.getElementById("approach1").checked) {
      st3= st3.concat( document.getElementById("approach1").value, "; ");
  }
  if (document.getElementById("approach2").checked) {
     st3= st3.concat( document.getElementById("approach2").value, "; ");
  }
  if (document.getElementById("approach3").checked) {
      st3= st3.concat( document.getElementById("approach3").value, "; ");
  }
  if (document.getElementById("approach4").checked) {
      //st3= st3.concat( document.getElementById("otherapproach").value, "; ");
      st3= st3.concat( document.getElementById("otherapproach").value, "; ");
  }
  if (st3.length !=0){
    st3=st3.substr(0, st3.length-2);
  }
  MyFormData.wayToPractice=st3;
  if (MyFormData.wayToPractice!=""){
    document.getElementById("wayToPractice").style.color="black";
  }
  
  if (document.getElementById("approach4").checked){
   document.getElementById("otherapproach").style.display="block";
 } else{
   document.getElementById("otherapproach").style.display="none";
 }
}

function SaveDanceData(event){
  var check=CheckData();
  if (check==1){
console.log(MyFormData);

  event.preventDefault();
   $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data",
    data: MyFormData,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });  
 
  }
  else{
    console.log("Data not saved");
  };
  
}


