// fetch("https://reqres.in/api/users/1", {
//   //it will show the data of one user of id=1 user data
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

fetch("https://reqres.in/api/users", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    handleDataRender(data);
  });

function handleDataRender(updateData) {
  let html = updateData.data
    .map((item) => {
      return `
      <div class="users">
       <img src="${item.avatar}">
      <button>${item.first_name + item.last_name} </button>
      </div>
      `;
    })
    .join("");

  console.log(html);

  let Container = document.getElementById("container");
  Container.innerHTML = html;
}

// let request = {
//   nmae : "Ronaldo",
//   job : "Player",
// };
// fetch("https://reqres.in/api/users",
// {
//   method: "Post",
//   body: JSON.stringify(request),
// })

// .then((res) => {
//   res.json;
// })
// .then((data) => console.log(data));
