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

function handleGenreChange(event){
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
      //st= st.concat( document.getElementById("typeother").value, "; ");
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


function SaveData(event){
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


function deleteData(id) {

    var r = confirm("Are you sure you want to delete the item with the following ID? " + id);
    if (r == true) {
      
    } else {
      return;
    }

    var tmp = {
        "id": id
    }

    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-syuzi.herokuapp.com/data/delete",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.getElementById("div" + id).style.display = "none";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });
}

function loadExistingData() {
  myDanceData = [];
  otherData = [];
    $.ajax({
        type : "GET",
        url : "https://cse-120-2021-api-syuzi.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
          loadedData = data.data;
        	console.log("success", data);
            data.data.forEach(elem => {
          if (elem["owner"] == "Syuzanna") {
            if (elem["project"] == "Dance") {
              myBookData.push(elem);
            } else {
              myDanceData.push(elem);
            }
          } 
        })
        displayData(myDanceData, "danceDataContainer");
      },
        error : function(data) {
            console.log("Error");
        }
    });
}

function displayData(data, containerDivName) {
    document.getElementById(containerDivName).innerHTML = "";
    data.forEach(elem => {
        var item = document.createElement("div");
        item.id = "div" + elem["_id"];
        item.className = "item";
        if (Object.keys(elem).length == 1) {
            var span = document.createElement("span");
            span.innerHTML = "<i>Empty Element with autogenerated ID: </i>" + elem["_id"];
            item.appendChild(span);
        }
        Object.keys(elem).forEach(key => {
            if (key != "_id") {
                var span = document.createElement("span");

                var b = document.createElement("b");
                b.innerHTML = key + ": ";
                span.appendChild(b);
                
                span.className = "item";
                if (elem[key]) {
                    span.innerHTML += elem[key];
                } else {
                    var span1 = document.createElement("span");
                    span1.className = "undefined";
                    span1.innerHTML = "N/A";
                    span.appendChild(span1)
                }
                item.appendChild(span);

                var br = document.createElement("br");
                item.appendChild(br);
            }
        })

        if (elem["owner"] == "Syuzanna") {
          var button2 = document.createElement("button");
          button2.innerHTML = "Edit";
          button2.className = "editButton";
          button2.id = "edit_"+ elem["_id"];
          button2.addEventListener("click", function(e){
          editData(e.target.id);
          }, false);
          item.appendChild(button2);
        }

        if (elem["owner"] == "Syuzanna" || (elem["fullname"] && elem["fullname"].indexOf("Syuzanna") > -1)) {
          var button = document.createElement("button");
          button.innerHTML = "Delete";
          button.id = elem["_id"];
          button.addEventListener("click", function(e){
          deleteData(e.target.id);
          }, false);
          item.appendChild(button);
         }
         document.getElementById(containerDivName).appendChild(item);
     
    })
    

}


var loadedData = [];

function editData(id){
 var tmp = id.split("edit_");
 var item_id = tmp[1];
 console.log(item_id);

loadedData.forEach(item => {
    if (item._id == item_id && item["owner"] == "Syuzanna") {
        console.log(item); 
        localStorage = window.localStorage;
        localStorage.setItem('editItem', JSON.stringify(item));
        if (item["project"] == "Dance") {
          document.location  = "edit_dance.html"; 
        }
    }
  })
}

function loadEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_id").value = editItem["_id"];
  document.getElementById("firstNameForm").value = editItem["firstName"];
  document.getElementById("LastNameForm").value =editItem["Lastname"];
  document.getElementById("genderForm").value = editItem["gender"];  
  document.getElementById("birthDateForm").value = editItem["birthDate"]; 
  document.getElementById("addressForm").value = editItem["address"]; 
  document.getElementById("emailForm").value = editItem["email"]; 
  document.getElementById("phoneForm").value = editItem["phone"]; 
  document.getElementById("facebookForm").value = editItem["facebook"]; 
  document.getElementById("certificate1Form").value = editItem["certificate1"]; 
  document.getElementById("certificate2Form").value = editItem["certificate2"]; 
  document.getElementById("genreForm").value = editItem["genre"];
  document.getElementById("competitionsForm").value = editItem["competitionInfo"];
  document.getElementById("educationForm").value = editItem["education"];
  document.getElementById("experiencesForm").value = editItem["experienceAndSkills"]; 
  document.getElementById("itemsForm").value = editItem["items"];
  document.getElementById("storyForm").value = editItem["storyBehind"];
  document.getElementById("benefitsForm").value = editItem["benefits"]; 
  document.getElementById("practicingDateForm").value = editItem["startDate"];
  document.getElementById("frequencyForm").value = editItem["frequency"];
  document.getElementById("durationForm").value = editItem["duration"];
  document.getElementById("preferredWayForm").value = editItem["wayToPractice"];
}

  
