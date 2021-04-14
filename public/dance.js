


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

