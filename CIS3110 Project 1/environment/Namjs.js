const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menulength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}