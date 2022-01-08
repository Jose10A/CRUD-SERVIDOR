var name1;
var names = [];
var usertr=document.getElementById("tabla");

document.getElementById("form").addEventListener("submit",(e)=>{
  e.preventDefault();
  Create();
  Read();
  document.getElementById("form").reset();
});

const crear=function(){
  let storage = JSON.parse(localStorage.getItem("names"));
  name1=document.getElementById("user").value;
  if(name1==""){
    alert("Escriba un nombre");

  }else{
    if(storage==null){
      names.push(name1);
      localStorage.setItem("names",JSON.stringify(names));
    }else{
      names=JSON.parse(localStorage.getItem("names"));
      names.push(name1);
      localStorage.setItem("names",JSON.stringify(names));
      document.getElementById("user").value="";
      Read();
    }
  }
}
function Read(){


  usertr.innerHTML='';
  names2= JSON.parse(localStorage.getItem("names"));
  if (names2==null){
    usertr.innerHTML+=`
    <tr>
        <th class="space">#</th>
        <th class="space">Jugadores</th>
        <th class="space">Operaciones</th>
    </tr>
    `
  }else {
    usertr.innerHTML+=`
    <tr>
        <th class="space">#</th>
        <th class="space">Jugadores</th>
        <th class="space">Operaciones</th>
    </tr>
    `
    for(var i=0;i<names2.length;i++){
      usertr.innerHTML+=`
      <tr>
          <td class="space">${i+1}</td>
          <td class="space">${names2[i]}</td>
          <td class="space">
               <button class="editar" Onclick="Update(${i})">Editar</button>
               <button class="borrar" Onclick="Delete(${i})">Eliminar</button>
          </td>
      </tr>
      `
    }
  }
}


function Update(i3){
  let names4=JSON.parse(localStorage.getItem("names"));
  usertr.innerHTML='';
  usertr.innerHTML+=`
  <tr>
      <th class="space">#</th>
      <th class="space">Jugadores</th>
      <th class="space">Operaciones</th>
  </tr>
  `
  for(var i=0;i<names4.length;i++){
    if(i==i3){
      usertr.innerHTML+=`
      <tr>
      <td class="space">${i+1}</td>
      <td class="space"><input id="newName"></input></td>
      <td class="space">
          <button class="editar" Onclick="Update2(${i})">Editar</button>
          <button class="borrar" Onclick="Read()">Cancelar</button>
      </td>
      </tr>
      `
    } else{
      usertr.innerHTML+=`
      <tr>
          <td class="space">${i+1}</td>
          <td class="space">${names2[i]}</td>
          <td class="space">
               <button Onclick="Update(${i})">Edit</button>
               <button Onclick="Delete(${i})">Delete</button>
          </td>
      </tr>
      `
    }
  }
}
function Update2(i){
  let names5=JSON.parse(localStorage.getItem("names"));
  names5[i]=document.getElementById("newName").value
  if(names5[i]==''){
    alert("Escriba un nombre");
  }else{
    localStorage.setItem("names", JSON.stringify(names5));
    Read();
  }
}

function Delete(i2){
  let names3=JSON.parse(localStorage.getItem("names"));
  names3.splice(i2,1);
  localStorage.setItem("names", JSON.stringify(names3));
  Read();
}