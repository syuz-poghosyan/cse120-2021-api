

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
      window.location.href="https://cse-120-2021-api-syuzi.herokuapp.com/admin/admin.html" 
    }
  });  
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
      window.location.href="https://cse-120-2021-api-syuzi.herokuapp.com/admin/admin.html";
    }
  });  
}

