document.addEventListener("DOMContentLoaded", function() {
  const db = firebase.firestore();
  console.log("ss");
  db.collection("bio")
    .doc("LEi8ac5CMJulvZMnWp67")
    .get()
    .then(querySnapshot => {
      const bio = querySnapshot.data();
      // set profile picture
      elem("kaustubh").src = bio.picture_url;
      // set name
      elem("full-name").innerHTML = "&lt;!--" + bio.name + "--&gt;";
      // render bio
      renderBioLine(3, bio.desc, bio.location);
    });
});

function elem(id) {
  return document.getElementById(id);
}

function renderBioLine(startNumber, text, location) {
  // remove the last preiod
  if (text.charAt(text.length - 1) == ".")
    text = text.substring(0, text.length - 1);

  let chuncks = text.split(". ");
  let render = "";
  chuncks.forEach(c => {
    render +=
      '<div class="line"> <span>' +
      startNumber +
      "</span>" +
      '<p class="bio" >' +
      c +
      ".</p>" +
      "</div>";
    startNumber += 1;
  });

  render +=
    '<div class="line"> <span>' +
    startNumber +
    "</span>" +
    '<p class="bio location"><img style="height: 16px;" src="./imgs/marker.svg" /> ' +
    location +
    "</p>" +
    "</div>";
  elem("full-bio").innerHTML = render;
}

function openPage(pageName, elmnt, file) {
  var i, tabcontent, tablinks;
  document.getElementById("log-file").innerText = file;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "transparent";
    tablinks[i].style.color = "rgba(103, 136, 158, 0.5)";
    tablinks[i].style.borderLeft = "1px solid transparent";
    tablinks[i].style.borderRight = "1px solid transparent";
    tablinks[i].style.background = "transparent";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.borderColor = "#00aced";
  elmnt.style.color = "white";
  elmnt.style.background = "rgba(0, 0, 0, 0.08)";
  elmnt.style.borderLeft = "1px solid rgba(0,0,0,.1)";
  elmnt.style.borderRight = "1px solid rgba(0,0,0,.1)";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var textContent = [
  {
    title: "ACS College, Rahu",
    description:
      "Website developed using WordPress",
    links: [
      {
        link:
          "https://www.acscollegerahu.in/",
        linkTitle: "Visit"
      }
    ]
  },
  {
    title: "SB Kul College, Kedgaon",
    description:
      "Website developed using WordPress",
    links: [
      {
        link:
          "https://sbkulcollege.in/",
        linkTitle: "Visit"
      }
    ]
  },
  {
    title: "Alpha Local",
    description:
      "Developed using PHP,HTML,CSS,JS",
    links: [
      {
        link:"https://www.alphalocal.in/",
                linkTitle: "Visit"
      }
    ]
  },
  {
    title: "CircuitHub",
    description:
      "E-commerce site developed using WordPress & Woo-commerce",
    links: [
      {
        link: "http://circuithub.in/",
        linkTitle: "Visit"
      }
    ]
  },
  {
    title: "JustInClicks.com",
    description: "WordPress",
    links: [
      {
        link: "http://justinclicks.com/",
        linkTitle: "Visit"
      }
    ]
  },
  {
    title: "Library Management System",
    description:
      "The software was developed using Visual Basic",
      links: [
      {
        link: "https://www.youtube.com/watch?v=uUTSlR4_u68",
        linkTitle: "View YouTube Video"
      }
    ]
  },
  {
    title: "Skelset.in",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "https://skelset.in/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "Beat The Trade",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "https://www.beatthetrade.in/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "Tusome.Africe",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "https://tusome.africa/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "Consult.do",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "http://consult.do/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "Punavastu.com",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "https://punavastu.com/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "https://www.nguyen-kai.com/",
    description:
"WordPress",
    links: [
      {
        linkTitle:
          "https://www.nguyen-kai.com/",
        link:
          "Visit"
      }
    ]
  },
  {
    title: "Blog",
    description:
      "WordPress CMS",
    links: [
      {
        linkTitle: "Read Blog",
        link:
          "http://swayalgo.com/"
      }
    ]
  },
  {
    title: "Google Play Developer A/c",
    description:
      "See my Google play developer account",
    links: [
      {
        link: "https://play.google.com/store/apps/developer?id=JustInClicks.com&hl=en_IN&gl=US",
        linkTitle: "See on Play Store"
      }
    ],
  },
  {
    title: "Denomination",
    description:
      "Android Denomination - cash counter App",
    links: [
      {
        link: "https://play.google.com/store/apps/details?id=com.justinclicks.denomination&hl=en_IN&gl=US",
        linkTitle: "Get it on Play Store"
      }
    ],
  },
  {
    title: "Grocery Shop Management System",
    description: "Software developed using Visual Basic.",
    links: [
      {
        link: "https://www.youtube.com/watch?v=Y5iD7DEz9GE",
        linkTitle: "View YouTube Video"
      }
    ],
  },
  {
    title: "Dairy Management System",
    description:
      "Developed with Visual Basic",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=Q77TwteCeLA",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "Hospital Management System",
    description:
      "Developed with Visual Basic",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=xCcWizlaAk4",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "Java Compile & Run",
    description:
      "Developed with Visual Basic",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=kO0_j7VGLs8",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "Book Store System ",
    description:
      "Developed with Visual Basic",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=9gBfm6FtnMI",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "JioFi Helper",
    description:
      "Developed with Visual Basic",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=Ay0XiWDIT_s",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "Tic Tac Toe [VB.NET]",
    description:
      "Developed with Visual Basic.NET",
    links: [
      {
        link:
          "https://www.youtube.com/watch?v=HuHevUAhmQM",
        linkTitle: "Watch YouTube Video"
      }
    ],
  },
  {
    title: "JeeAB360",
    description:
      "Android",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.adarshbarnwal.notesapp&hl=en_IN&gl=US",
        linkTitle: "Get it on Google Play Store"
      }
    ],
  }
  ,
  {
    title: "Periodic Table",
    description:
      "Android",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.justinclicks.tictactoe&hl=en_IN&gl=US",
          linkTitle: "Get it on Google Play Store"
      }
    ],
  },
  {
    title: "Tic Tac Toe",
    description:
      "Android",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.justinclicks.tictactoe&hl=en_IN&gl=US",
          linkTitle: "Get it on Google Play Store"
      }
    ],
  },
  {
    title: "QR Code Reader and Generator",
    description:
      "Android",
    links: [
      {
        link:
          "https://play.google.com/store/apps/details?id=com.justinclicks.qrcodereader&hl=en_IN&gl=US",
          linkTitle: "Get it on Google Play Store"
      }
    ],
  }
];
function renderEditorText(content) {
  content = content.reverse();
  var render = "";
  var numLine = 0;
  for (var i = 0; i < content.length; i++) {
    var project = textContent[i];
    numLine += 1;
    var line =
      '<div class="line"><span>' +
      numLine +
      "</span><h3>-> " +
      project.title +
      "</h3></div>";
    var descs = project.description.split("/n");
    for (var j = 0; j < descs.length; j++) {
      numLine += 1;
      line +=
        '<div class="line"><span>' +
        numLine +
        "</span><p>" +
        descs[j] +
        "</p></div>";
    }
    if (typeof project.links !== "undefined") {
      for (var k = 0; k < project.links.length; k++) {
        numLine += 1;
        line +=
          '<div class="line"><span>' +
          numLine +
          '</span><p><a target=_blank href="' +
          project.links[k].link +
          '">' +
          project.links[k].linkTitle +
          "</a></p></div>";
      }
    }
    if (typeof project.videoLink !== "undefined") {
      numLine += 1;
      line +=
        '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
      numLine += 1;
      line +=
        '<div class="line"><span>' +
        numLine +
        '</span><iframe width="560" height="315" src="' +
        project.videoLink +
        '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
    }
    numLine += 1;
    line += '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
    numLine += 1;
    line += '<div class="line"><span>' + numLine + "</span><p>&nbsp;</p></div>";
    render += line;
  }
  document.getElementById("News").innerHTML = render;
}

renderEditorText(textContent);
