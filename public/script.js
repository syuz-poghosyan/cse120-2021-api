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
  console.log(Myformdata)
  Myformdata.id=document.getElementById("_id").value;
  Myformdata.id=document.getElementById("_id").value;
  Myformdata.fullname=document.getElementById("fullNameForm").value;
  Myformdata.title=document.getElementById("titleForm").value;
  Myformdata.author=document.getElementById("authorForm").value;
  Myformdata.colour=document.getElementById("colourForm").value;
  Myformdata.covertype=document.getElementById("coverTypeForm").value;
  Myformdata.othercovertype=document.getElementById("otherCoverForm").value;
  Myformdata.numberofpages=document.getElementById("pagesForm").value;
  Myformdata.price=document.getElementById("priceForm").value;
  Myformdata.currency=document.getElementById("currencyForm").value;
  Myformdata.language=document.getElementById("langForm").value;
  Myformdata.otherlanguage=document.getElementById("otherLangForm").value;
  Myformdata.originallanguage=document.getElementById("origLangForm").value;
  Myformdata.otheroriginallanguage=document.getElementById("otherOrigLangForm").value;
  Myformdata.edition=document.getElementById("editionForm").value;
  Myformdata.dimensions=document.getElementById("dimensionsForm").value;
  Myformdata.publisher=document.getElementById("publisherForm").value;
  Myformdata.publishingmonth=document.getElementById("pubMonthForm").value;
  Myformdata.publishingday=document.getElementById("pubDayForm").value;
  Myformdata.publishingyear=document.getElementById("pubYearForm").value;
  Myformdata.originalpublishingmonth=document.getElementById("origPubMonthForm").value;
  Myformdata.originalpublishingday=document.getElementById("origPubDayForm").value;
  Myformdata.originalpublishingyear=document.getElementById("origPubYearForm").value;
  Myformdata.genre=document.getElementById("genreForm").value;
  Myformdata.agerestriction=document.getElementById("agerestrictForm").value;
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-syuzi.herokuapp.com/data/update",
    data: Myformdata,
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

function goBack() {
  window.location.assign("https://cse-120-2021-api-syuzi.herokuapp.com");
}
