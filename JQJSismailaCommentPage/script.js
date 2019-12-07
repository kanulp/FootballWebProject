 var abc = document.getElementById("comment");

  
  function myFunction() {
    $("#list_add").append("<li>"+abc.value+"</li>"); 
  
  }
    var comment = document.getElementById("comment");
    var goalTiming = ["Full-time", "Half-time"];
    var scorelist = document.getElementById("scorelist");
    document.getElementById("goalScorehalf").hidden = true;
    document.getElementById("goalScorefull").hidden = false;
    
    for (var i = 0; i < goalTiming.length; i++) {
      var goal_Timing = goalTiming[i];
      var el = document.createElement("option");
      el.textContent = goal_Timing;
      el.value = goal_Timing;
      scorelist.appendChild(el);
    }
    
   
    
  function changetime() {
    var scorelist = document.getElementById("scorelist").value;
    var goalScorehalf = document.getElementById("goalScorehalf")
    var goalScorefull = document.getElementById("goalScorefull");
  
  if(scorelist == "Full-time"){
    goalScorehalf.hidden = true;
    goalScorefull.hidden = false;
  
  }
  
  if(scorelist == "Half-time"){
    goalScorehalf.hidden = false;
    goalScorefull.hidden = true;
  
  }
  }