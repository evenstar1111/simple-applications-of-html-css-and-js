const inputFld = document.getElementById('search_box');

inputFld.onkeyup = function() {
      var inputVal, searchItem, itemVal;

      inputVal = inputFld.value.toUpperCase();
      searchItem = document.getElementsByClassName('search_items');

      for (let i = 0; i < searchItem.length; i++) {
            itemVal = searchItem[i].innerText.toUpperCase();
            if(itemVal.indexOf(inputVal) < 0) {
                  $(searchItem[i]).css('display', 'none');
            } else {
                  $(searchItem[i]).css('display', 'flex');
            }
      }
}







const sortButton = document.getElementById('sort_btn');

sortButton.onclick = function() {

      const list = document.getElementsByClassName('search_items_container')[0];
      const listItem = list.getElementsByClassName('search_items');
      var switching, shouldswitch;

      switching = true;

      while(switching) {


            for (var i = 0; i < (listItem.length - 1); i++) {

                  if (listItem[i].innerHTML.toUpperCase() < listItem[i + 1].innerHTML.toUpperCase()) {
                        shouldswitch = true;
                        break;
                  } else {
                        shouldswitch = false;
                  }
                  
            }

            if (shouldswitch) {
                  listItem[i].parentNode.insertBefore(listItem[i + 1], listItem[i]);
                  switching = true;
            } else {
                  switching = false;
            }

      }

}