let url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
fetch(url).then((res) => {
  return (res.json());
}).then((data) => {

  const tabledata = data;



  function createDomElement(e, eClass = "", eId = "") {
    const element = document.createElement(e);
    eClass !== "" ? element.setAttribute("class", eClass) : "";
    eId !== "" ? element.setAttribute("id", eId) : "";
    return element;
  }

  function pagedata(stval, endval, arrval) {
    let resu = [];
   
    for (var i = stval; i < arrval.length - endval; i++) {

      resu.push(tabledata[i]);
    }
    return resu;
  }

  const page1 = pagedata(0, 90, tabledata);
  const page2 = pagedata(10, 80, tabledata);
  const page3 = pagedata(20, 70, tabledata);
  const page4 = pagedata(30, 60, tabledata);
  const page5 = pagedata(40, 50, tabledata);
  const page6 = pagedata(50, 40, tabledata);
  const page7 = pagedata(60, 30, tabledata);
  const page8 = pagedata(70, 20, tabledata);
  const page9 = pagedata(80, 10, tabledata);
  const page10 = pagedata(90, 00, tabledata);


  const maindiv = createDomElement("div", "inner");
  document.body.append(maindiv);

  const tableContainer = createDomElement("div", "tableContainer");
  maindiv.appendChild(tableContainer);

  function mainhtml(page, i) {


    tableContainer.innerHTML = " ";

    const table = createDomElement("table", "tbody", i);
    tableContainer.append(table);

    const tr = createDomElement("tr");
    table.append(tr);



    const th0 = createDomElement("th");
    tr.append(th0);
    th0.innerHTML = "Id";
    const th1 = createDomElement("th");
    tr.append(th1);
    th1.innerHTML = "Name";
    const th2 = createDomElement("th");
    tr.append(th2);
    th2.innerHTML = "Email";

    //for(let item of page)  {
    page.forEach((item) => {

      const tr1 = createDomElement("tr");
      table.append(tr1);

      const th4 = createDomElement("td");
      tr1.append(th4);

      const th5 = createDomElement("td");
      tr1.append(th5);

      const th6 = createDomElement("td");
      tr1.append(th6);

      const td = createDomElement("tr");
      th4.append(td);
      td.innerHTML = item.id;
      const td1 = createDomElement("tr");
      th5.append(td1);
      td1.innerHTML = item.name;
      const td2 = createDomElement("tr");
      th6.append(td2);
      td2.innerHTML = item.email;

    })

  }



  mainhtml(page1, 1);

  const paginationdiv = createDomElement("div");
  maindiv.append(paginationdiv);
  const newdiv = createDomElement("div", "pagination_section");
  maindiv.append(newdiv);
  const anchor = createDomElement("button", "prev", "a-item0");

  anchor.innerHTML = ">> previous";
  anchor.setAttribute("href", "#");
  anchor.setAttribute("value", "0");

  anchor.addEventListener('click', function () {

    if (anchor0.className === "active") {
      mainhtml(page1, 1);
      anchor0.setAttribute('class', "a-item")


    }
    else if (anchor1.className === "active") {
      mainhtml(page1, 1);
      anchor0.setAttribute("class", "active");
      anchor1.setAttribute("class", "a-item");


    }
    else if (anchor2.className === "active") {
      mainhtml(page2, 2);
      anchor1.setAttribute("class", "active");
      anchor2.setAttribute("class", "a-item");
    }
    else if (anchor3.className === "active") {

      mainhtml(page3, 3);
      anchor2.setAttribute("class", "active");
      anchor3.setAttribute("class", "a-item");


    }
    else if (anchor4.className === "active") {
      mainhtml(page4, 4);
      anchor3.setAttribute("class", "active");
      anchor4.setAttribute("class", "a-item");
    }
    else if (anchor5.className === "active") {
      mainhtml(page5, 5);
      anchor4.setAttribute("class", "active");
      anchor5.setAttribute("class", "a-item");
    }
    else if (anchor6.className === "active") {
      mainhtml(page6, 6);
      anchor5.setAttribute("class", "active");
      anchor6.setAttribute("class", "a-item");
    }
    else if (anchor7.className === "active") {
      mainhtml(page7, 7);
      anchor6.setAttribute("class", "active");
      anchor7.setAttribute("class", "a-item");
    }
    else if (anchor8.className === "active") {
      mainhtml(page8, 8);
      anchor7.setAttribute("class", "active");
      anchor8.setAttribute("class", "a-item");
    }
    else if (anchor9.className === "active") {
      mainhtml(page9, 9);
      anchor8.setAttribute("class", "active");
      anchor9.setAttribute("class", "a-item");
    }
    else if (anchor9.className === "active") {
      mainhtml(page10, 10);
      anchor9.setAttribute("class", "active");
      

    }
    else {
      mainhtml(page1);

    }
    
  })

  const anchor0 = createDomElement("a", "a-item", "a-item1");
  anchor0.innerHTML = "0-10";
  anchor0.setAttribute("href", "#");

  anchor0.addEventListener("click", function () {
    mainhtml(page1, 1)
  });



  const anchor1 = createDomElement("a", "a-item", "a-item2");
  anchor1.innerHTML = "11-20";
  anchor1.setAttribute("href", "#");
  anchor1.addEventListener("click", function () {
    mainhtml(page2, 2)
  });


  const anchor2 = createDomElement("a", "a-item", "a-item3");
  anchor2.innerHTML = "21-30";
  anchor2.setAttribute("href", "#");
  anchor2.addEventListener("click", function () {
    mainhtml(page3, 3)
    })
  const anchor3 = createDomElement("a", "a-item", "a-item5");
  anchor3.innerHTML = "31-40";
  anchor3.setAttribute("href", "#");
  anchor3.addEventListener("click", function () {
       mainhtml(page4, 4)
})
  const anchor4 = createDomElement("a", "a-item", "a-item6");
  anchor4.innerHTML = "41-50";
  anchor4.setAttribute("href", "#");
  anchor4.addEventListener("click", function () {
    mainhtml(page5, 5)
  })
  const anchor5 = createDomElement("a", "a-item", "a-item7");
  anchor5.innerHTML = "51-60";
  anchor5.setAttribute("href", "#");
  anchor5.addEventListener("click", function () {
    mainhtml(page6, 6)

  })
  const anchor6 = createDomElement("a", "a-item", "a-item8");
  anchor6.innerHTML = "61-70";
  anchor6.setAttribute("href", "#");
  anchor6.addEventListener("click", function () {
    mainhtml(page7, 7)
  })
  const anchor7 = createDomElement("a", "a-item", "a-item9");
  anchor7.innerHTML = "71-80";
  anchor7.setAttribute("href", "#");
  anchor7.addEventListener("click", function () {
    mainhtml(page8, 8)
   })
  const anchor8 = createDomElement("a", "a-item", "a-item10");
  anchor8.innerHTML = "81-90";
  anchor8.setAttribute("href", "#");
  anchor8.addEventListener("click", function () {
    mainhtml(page9, 9)
   })
  const anchor9 = createDomElement("a", "a-item", "a-item11");
  anchor9.innerHTML = "91-100";
  anchor9.setAttribute("href", "#");
  anchor9.addEventListener("click", function () {
    mainhtml(page10, 10)
  });


  const anchor12 = createDomElement("button", "next", "a-item12");
  anchor12.innerHTML = "Next<<";
  anchor12.setAttribute("href", "#");

  anchor12.addEventListener("click", function () {

    if (anchor0.className == "a-item" && anchor1.className === "a-item"
      && anchor2.className === "a-item" && anchor3.className === "a-item"
      && anchor4.className === "a-item" && anchor5.className === "a-item"
      && anchor6.className === "a-item" && anchor7.className === "a-item"
      && anchor8.className === "a-item" && anchor9.className === "a-item")
       {
         anchor0.setAttribute("class", "active");
         mainhtml(page1, 1)

        }
    else if (anchor0.className === "active") {
      mainhtml(page2, 2);
      anchor1.setAttribute("class", "active");
      anchor0.setAttribute("class", "a-item");
    }
    else if (anchor1.className === "active") {
      mainhtml(page3, 2);
      anchor1.setAttribute("class", "a-item");
      anchor2.setAttribute("class", "active");

    }
    else if (anchor2.className === "active") {
      mainhtml(page4, 3);
      anchor2.setAttribute("class", "a-item");
      anchor3.setAttribute("class", "active");
    }
    else if (anchor3.className === "active") {
      mainhtml(page5, 4);
      anchor3.setAttribute("class", "a-item");
      anchor4.setAttribute("class", "active");
    }
    else if (anchor4.className === "active") {
      mainhtml(page6, 5);
      anchor4.setAttribute("class", "a-item");
      anchor5.setAttribute("class", "active");
    }
    else if (anchor5.className === "active") {
      mainhtml(page7, 6);
      anchor5.setAttribute("class", "a-item");
      anchor6.setAttribute("class", "active");
    }
    else if (anchor6.className === "active") {
      mainhtml(page8, 7);
      anchor6.setAttribute("class", "a-item");
      anchor7.setAttribute("class", "active");
    }
    else if (anchor7.className === "active") {
      mainhtml(page9, 8);
      anchor7.setAttribute("class", "a-item");
      anchor8.setAttribute("class", "active");
    }
    else if (anchor8.className === "active") {
      mainhtml(page10, 9);
      anchor8.setAttribute("class", "a-item");
      anchor9.setAttribute("class", "active");
    }
    else if (anchor9.className === "active") {
      mainhtml(page10, 9);

    }
  })
  newdiv.append(anchor, anchor0, anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7, anchor8, anchor9, anchor12);

  const section = document.querySelectorAll(".a-item")
  section.forEach((e) => {
    e.addEventListener("click", function () {

      section.forEach(el => {
        el.classList.remove("active");
        this.setAttribute("class", "active");
      })
    })
  })

}).catch((err) => {
  console.log(err);
})