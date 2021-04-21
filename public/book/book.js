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

