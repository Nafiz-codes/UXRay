const healBtn = document.getElementById("healBtn");

healBtn.addEventListener("click", async () => {

  const html = document.getElementById("htmlInput").value;

  const instruction =
    document.getElementById("instructionInput").value;

  document.getElementById("status").innerText =
    "Repairing...";

  document.getElementById("originalFrame").srcdoc =
    html;

  try {

    const response = await fetch("/api/heal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        html,
        instruction
      })
    });

    const data = await response.json();

    document.getElementById("output").value =
      data.healedHtml;

    document.getElementById("previewFrame").srcdoc =
      data.healedHtml;

    document.getElementById("status").innerText =
      "Repair complete.";

  } catch (error) {

    console.error(error);

    document.getElementById("status").innerText =
      "Error occurred. Check console.";
  }

});