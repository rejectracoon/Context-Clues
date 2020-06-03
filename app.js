$(document).ready(function () {
    
    var friends = ["Jake", "John", "James", "Jimmy", "Jonathan"];
    
    var locations = ["Birmingham", "Montgomery", "Arab", "Gadsden", "Opp", "Mobile", "Florence", "Bessemer", "Tuscaloosa", "Moundville"];
    
    var weapons = ["stick", "axe", "bow", "tiger", "dragon", "sword", "anvil", "pipe", "bomb", "gun", "crossbow", "handgun", "explosive", "mace", "flail", "tranq dart", "warhammer", "broadsword", "dart", "laser"];

    for (var i = 1; i <= 100; i++) {
        
        var $h3 = $("<h3>Accusation " + i + "</h3>");
       
        $($h3).appendTo("main");
        
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        
        var friend = friends[i % 5];
        
        var location = locations[i % 10];
        
        var weapon = weapons[i % 20];
        
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuAlert;
    }
});
