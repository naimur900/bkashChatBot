const chatList = document.getElementById("chat-list");
function createDivWithContent(className, content) {
  const div = document.createElement("div");
  div.className = className;
  const textNode = document.createTextNode(content);
  div.appendChild(textNode);
  return div;
}

function createButtonWithClassAndText(className, buttonText) {
  const button = document.createElement("button");
  button.className = className;
  const textNode = document.createTextNode(buttonText);
  button.appendChild(textNode);
  return button;
}

chatList.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    const message = event.target.innerText;
    console.log(event.target.innerText);

    if (message === "Yes") {
      const mainDiv = createDivWithContent(
        "d-flex flex-column mx-auto gap-3 w-75",
        ""
      );
      const subDiv1 = createDivWithContent(
        "d-flex flex-column w-50 align-self-end",
        ""
      );
      const subDiv2 = createDivWithContent(
        "text-bg-primary p-3 rounded-4",
        "hello, I am your bkash assistant. Kindly choose the below options to know about"
      );
      const subDiv3 = createDivWithContent(
        "d-flex justify-content-center gap-3 mt-3",
        ""
      );
      const buttonOne = createButtonWithClassAndText(
        "btn btn-light",
        "Know about MIP"
      );
      const buttonTwo = createButtonWithClassAndText(
        "btn btn-light",
        "MIP integration guidelines"
      );
      const buttonThree = createButtonWithClassAndText(
        "btn btn-light",
        "MIP user manual"
      );
      subDiv3.appendChild(buttonOne);
      subDiv3.appendChild(buttonTwo);
      subDiv3.appendChild(buttonThree);
      subDiv2.appendChild(subDiv3);
      subDiv1.appendChild(subDiv2);
      mainDiv.appendChild(subDiv1);
      chatList.appendChild(mainDiv);
    } else if (message === "No") {
      const mainDiv = createDivWithContent(
        "d-flex flex-column mx-auto gap-3 w-75 mt-5",
        ""
      );
      const subDiv1 = createDivWithContent(
        "d-flex flex-column w-75 align-self-end",
        ""
      );
      const subDiv2 = createDivWithContent(
        "text-bg-primary p-3 rounded-4 text-center",
        "Thanks for bearing with me. Hope you have a great day"
      );
      subDiv1.appendChild(subDiv2);
      mainDiv.appendChild(subDiv1);
      chatList.appendChild(mainDiv);
    } else {
      fetch("http://localhost:7000/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          // const mainDiv = createDivWithContent(
          //   "d-flex flex-column mx-auto gap-3 w-75 my-5",
          //   ""
          // );
          // const leftDiv = createDivWithContent(
          //   "d-flex flex-column w-50 align-self-start",
          //   ""
          // );

          // const leftDivChild = createDivWithContent(
          //   "text-bg-primary p-3 rounded-4",
          //   data
          // );
          // leftDiv.appendChild(leftDivChild);
          const mainDiv = createDivWithContent(
            "d-flex flex-column mx-auto gap-3 w-75 my-5 gap-5",
            ""
          );
          const leftDiv = createDivWithContent(
            "d-flex flex-column w-50 align-self-start",
            ""
          );

          const leftSubDiv = createDivWithContent("text-light", "");
          const headerText = document.createElement("h6");
          headerText.innerText = message;
          const hrElement = document.createElement("hr");

          leftSubDiv.appendChild(headerText);
          leftSubDiv.appendChild(hrElement);

          const dataDiv = createDivWithContent(
            "text-bg-primary p-3 rounded-4",
            data
          );

          leftDiv.appendChild(leftSubDiv);
          leftDiv.appendChild(dataDiv);

          const rightDiv = createDivWithContent(
            "text-bg-primary p-3 rounded-4 align-self-end",
            "Do you want to know more?"
          );

          const rightDivChild = createDivWithContent(
            "d-flex justify-content-center gap-3 mt-3 align-self-end",
            ""
          );

          const yButton = createButtonWithClassAndText("btn btn-light", "Yes");
          const nButton = createButtonWithClassAndText("btn btn-light", "No");
          rightDivChild.appendChild(yButton);
          rightDivChild.appendChild(nButton);
          rightDiv.appendChild(rightDivChild);

          mainDiv.appendChild(leftDiv);
          mainDiv.appendChild(rightDiv);
          chatList.appendChild(mainDiv);
        });
    }
  }
});
