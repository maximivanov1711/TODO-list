function updateInfo() {
  let activeTasks = 0;
  let completedTasks = 0;

  $(".list-item", "#list").each(function(i) {
    console.log($(this).attr("class"));

    if ($(this).attr("class").includes("completed")) {
      completedTasks += 1;
    } else {
      activeTasks += 1;
    }
  });
  
  $("#completedTasks").text(completedTasks);
  $("#activeTasks").text(activeTasks);
}

function addItem(desc) {
  const item = `
  <div class="list-item">
    <div class="desc-holder">
      <span class="desc">${desc}</span>
      <div class="editButton">
        <img src="img/edit-icon.png" alt="icon">
      </div>
    </div>
    <div class="deleteButton">
      <img src="img/delete-icon.png" alt="icon"/>
    </div>
  </div>
  `;

  $("#list").prepend(item);
}

function removeItem(item) {
  item.remove();
}

$(document).ready(function(){
  $("#addButton").on("click", function(e){
    e.preventDefault();

    const desc = $("#textField").val();

    if (desc) {
      addItem(desc);
      $("#textField").val("");
      updateInfo();
    }
  });

  $("#list").on("mouseenter", ".list-item", function(){
    $(this).addClass("active");
  })

  $("#list").on("mouseleave", ".list-item", function(){
    $(this).removeClass("active");
  })

  $("#list").on("click", ".deleteButton", function(){
    removeItem($(this).parent());
    updateInfo();
  });
});