function Validatecurrentvalue(){
  var currentvalue=document.getElementById("fname").value;
  console.log("Eventcall;", currentvalue.length)
  if (currentvalue.length > 10){
   document.getElementById("fullnameerror").innerHTML="Bad";
  } else{
    document.getElementById("fullnameerror").innerHTML="Good";
  }
}

function handleFullNameChange(){
 Myformdata.fullname=document.getElementById("fname").value;

}

function handleTitleChange(){
 Myformdata.title=document.getElementById("title").value;
}

function handleAuthorChange(){
  Myformdata.author=document.getElementById("authorname").value;
}

function handleColorChange(){
  Myformdata.colour=document.getElementById("colour").value;
}

function handleCoverTypeChange(e){
 Myformdata.covertype= e.target.value; 
 if (Myformdata.covertype !="other"){
   Myformdata.othercovertype="";
   document.getElementById("othertext").style.display="none";
 } else{
   document.getElementById("othertext").style.display="block";
 }
}

function handleCustomTypeChange(){
if(Myformdata.covertype=="other"){
  Myformdata.othercovertype=document.getElementById("othertext").value;
}
}

function handlePageChange(){
  Myformdata.numberofpages=document.getElementById("numberofpages").value;
}

function handlePriceChange(){
 Myformdata.price=document.getElementById("price").value;
}

function handleCurrencyChange(){
 Myformdata.currency=document.getElementById("currency").value;
}

function handleLanguageChange(event){
  Myformdata.language= event.target.value;
  if (Myformdata.language != "other"){
    Myformdata.otherlanguage="";
    document.getElementById("otherlangtext").style.display="none";
  } else{
    document.getElementById("otherlangtext").style.display="block";
  }
}
function handleCustomLangChange(){
  if (Myformdata.language=="other") {
    document.getElementById("otherlangtext").value;
  }
}

function handleoriginallangchange(event){
 Myformdata.originallanguage=event.target.value;
 if (Myformdata.originallanguage != "other"){
   Myformdata.otheroriginallanguage="";
   document.getElementById("otherlangtext2").style.display="none";
 } else{
   document.getElementById("otherlangtext2").style.display="block";
 }
}

function handleotherlang2change(){
 if (Myformdata.originallanguage=="other"){
   document.getElementById("otherlangtext2").value;
 }
}

function handleEditionChange(){
  Myformdata.edition=document.getElementById("edition").value;
}
function handleDimensionsChange(){
  Myformdata.dimensions=document.getElementById("dimensions").value;
}
function handlePublisherChange(){
  Myformdata.publisher=document.getElementById("publisher").value;
}


function handlePubMonthChange(){
 Myformdata.publishingmonth=document.getElementById("publishingmonth").value;
}

function handlePubDayChange(){
  Myformdata.publishingday=document.getElementById("publishingday").value;
}

function handlePubYearChange(){
  Myformdata.publishingyear=document.getElementById("publishingyear").value;
}

function handleOriginalPubMonthChange(){
  Myformdata.originalpublishingmonth=document.getElementById("originalpubmonth").value;
}
function handleOriginalPubDayChange(){
  Myformdata.originalpublishingday=document.getElementById("originalpubday").value;
}

function handleOriginalPubYearChange(){
  Myformdata.originalpublishingyear=document.getElementById("originalpubyear").value;
}

function handleGenreChange(){
  Myformdata.genre=document.getElementById("genre").value;
}
function handleAgeChange(){
 Myformdata.agerestriction=document.getElementById("agerestriction").value;
}

function SaveData(e){
  console.log(Myformdata)
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data",
    data: Myformdata,
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

function UpdateData(e){
  console.log(UpdatedBookData);
  var UpdatedBookData= {};
  UpdatedBookData.id=document.getElementById("_id").value;
  UpdatedBookData.fullname=document.getElementById("fullNameForm").value;
  UpdatedBookData.title=document.getElementById("titleForm").value;
  UpdatedBookData.author=document.getElementById("authorForm").value;
  UpdatedBookData.colour=document.getElementById("colourForm").value;
  UpdatedBookData.covertype=document.getElementById("coverTypeForm").value;
  UpdatedBookData.othercovertype=document.getElementById("otherCoverForm").value;
  UpdatedBookData.numberofpages=document.getElementById("pagesForm").value;
  UpdatedBookData.price=document.getElementById("priceForm").value;
  UpdatedBookData.currency=document.getElementById("currencyForm").value;
  UpdatedBookData.language=document.getElementById("langForm").value;
  UpdatedBookData.otherlanguage=document.getElementById("otherLangForm").value;
  UpdatedBookData.originallanguage=document.getElementById("origLangForm").value;
  UpdatedBookData.otheroriginallanguage=document.getElementById("otherOrigLangForm").value;
  UpdatedBookData.edition=document.getElementById("editionForm").value;
  UpdatedBookData.dimensions=document.getElementById("dimensionsForm").value;
  UpdatedBookData.publisher=document.getElementById("publisherForm").value;
  UpdatedBookData.publishingmonth=document.getElementById("pubMonthForm").value;
  UpdatedBookData.publishingday=document.getElementById("pubDayForm").value;
  UpdatedBookData.publishingyear=document.getElementById("pubYearForm").value;
  UpdatedBookData.originalpublishingmonth=document.getElementById("origPubMonthForm").value;
  UpdatedBookData.originalpublishingday=document.getElementById("origPubDayForm").value;
  UpdatedBookData.originalpublishingyear=document.getElementById("origPubYearForm").value;
  UpdatedBookData.genre=document.getElementById("genreForm").value;
  UpdatedBookData.agerestriction=document.getElementById("agerestrictForm").value;
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data/update",
    data: UpdatedBookData,
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

var Myformdata={
  "project": "Book",
  "owner": "Syuzanna",
  "fullname": "",
  "title": "",
  "author": "",
  "colour": "",
  "covertype" : "", 
  "othercovertype": "",
  "numberofpages": "",
  "price": "",
  "currency": "",
  "language" : "",
  "otherlanguage": "",
  "originallanguage": "",
  "otheroriginallanguage": "",
  "edition": "",
  "dimensions": "",
  "publisher": "",
  "publishingmonth": "",
  "publishingday": "",
  "publishingyear":"", 
  "originalpublishingmonth": "",
  "originalpublishingday": "",
  "originalpublishingyear": "",
  "genre": "",
  "agerestriction": "",
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
  myBookData = [];
  myDanceData = [];
    $.ajax({
        type : "GET",
        url : "https://cse-120-2021-api-syuzi.herokuapp.com/data",
        dataType : "json",
        success : function(data) {
          loadedData = data.data;
        	console.log("success", data);
            data.data.forEach(elem => {
            if (elem["project"] == "Book") {
              myBookData.push(elem);
            } else {
              myDanceData.push(elem);
            }    
        })
        displayData(myBookData, "bookDataContainer");
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
        if (item["project"] == "Book" ) {
          document.location  = "edit_book.html"; 
        } else {
          document.location  = "edit_dance.html"; 
        }
    }
  })
}

function loadBookEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem);
  document.getElementById("_id").value = editItem["_id"];
  document.getElementById("titleForm").value = editItem["title"];
  document.getElementById("fullNameForm").value =editItem["fullname"];
  document.getElementById("authorForm").value = editItem["author"];  
  document.getElementById("colourForm").value = editItem["colour"]; 
  document.getElementById("coverTypeForm").value = editItem["covertype"]; 
  document.getElementById("otherCoverForm").value = editItem["othercovertype"]; 
  document.getElementById("pagesForm").value = editItem["numberofpages"]; 
  document.getElementById("priceForm").value = editItem["price"]; 
  document.getElementById("currencyForm").value = editItem["currency"]; 
  document.getElementById("langForm").value = editItem["language"]; 
  document.getElementById("otherLangForm").value = editItem["otherlanguage"];
  document.getElementById("origLangForm").value = editItem["originallanguage"];
  document.getElementById("otherOrigLangForm").value = editItem["otheroriginallanguage"];
  document.getElementById("editionForm").value = editItem["edition"]; 
  document.getElementById("dimensionsForm").value = editItem["dimensions"];
  document.getElementById("publisherForm").value = editItem["publisher"];
  document.getElementById("pubMonthForm").value = editItem["publishingmonth"]; 
  document.getElementById("pubDayForm").value = editItem["publishingday"];
  document.getElementById("pubYearForm").value = editItem["publishingyear"];
  document.getElementById("origPubMonthForm").value = editItem["originalpublishingmonth"];
  document.getElementById("origPubDayForm").value = editItem["originalpublishingday"];
  document.getElementById("origPubYearForm").value = editItem["originalpublishingyear"];
  document.getElementById("genreForm").value = editItem["genre"];
  document.getElementById("agerestrictForm").value = editItem["agerestriction"];
  
}

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


