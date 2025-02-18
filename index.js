function displaydata(response) {
  console.log(response);
  let s1 =
    "<table border='1'><tr><td>userId</td> <td>username</td> <td>useremail</td> <td>userpassword</td> <td>userrole</td></tr>";

  for (let i of response) {
    s1 += "<tr><td>" + i.userid + "</td>";
    s1 += "<td>" + i.username + "</td>";
    s1 += "<td>" + i.useremail + "</td>";
    s1 += "<td>" + i.userpassword + "</td>";
    s1 += "<td>" + i.userrole + "</td></tr>";
  }
  s1 += "</table>";
  document.getElementById("div2").innerHTML = s1;
}

function restcall() {
  let url = "http://localhost:3001/user";
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (this.readyState == 4 && (this.status = 200)) {
      displaydata(JSON.parse(this.responseText));
    } else if (this.readyState == 4 && (this.status = 404)) {
      document.getElementById("div2").innerHTML = "Page not found";
    }
  };
  request.send();
}

function restcall1() {
  let id = document.getElementById("userid").value;

  let url = "http://localhost:3001/user/" + id;
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (this.readyState == 4 && (this.status = 200)) {
      displaydata(JSON.parse(this.responseText));
    } else if (this.readyState == 4 && (this.status = 404)) {
      document.getElementById("div2").innerHTML = "Page not found";
    }
  };
  request.send();
}

const submitdata = () => {
  //   console.log(document.getElementById("userid1").value);
  let id = document.getElementById("userid1").value;
  //   alert("in the function");
  console.log(id);
  let userName = document.getElementById("username").value;
  let userEmail = document.getElementById("useremail").value;
  let userPassword = document.getElementById("userpassword").value;
  let userRole = document.getElementById("userrole").value;
  let userobj = {
    userid: id,
    username: userName,
    userpassword: userPassword,
    useremail: userEmail,
    userrole: userRole,
  };
  console.log(id);
  let url = "http://localhost:3001/user/";

  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function () {
    if (this.readyState == 4 && (this.status = 200)) {
      //  displaydata(JSON.parse(this.responseText))
      document.getElementById("div2").innerHTML = "data added";
    } else if (this.readyState == 4 && (this.status = 404)) {
      document.getElementById("div2").innerHTML = "Page not found";
    }
  };
  request.send(JSON.stringify(userobj));
};
