const resumeBtn = document.getElementById("resume-btn");

const downloadFile = () => {
    const url = "files/AaronMcCollum_Resume.pdf";

    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function() {
        let blob = new Blob([req.response], { type: "application/octetstream" });
        let url = window.URL ||window.webkitURL;
        link = url.createObjectURL(blob);
        let a = document.createElement("a");
        a.setAttribute("download", "AaronMcCollum_Resume.pdf");
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    req.send();
    console.log("Hello!");
}

resumeBtn.addEventListener('click', downloadFile);
