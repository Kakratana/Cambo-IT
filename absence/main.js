const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

// canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");


const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){
	  ctx.font = "14px Krasar";
      var x = document.getElementById("form");
      x.style.display = "none";

      var xz = document.getElementById("show");
      xz.style.display = "block";


      let inName = document.getElementById("inName").value;
      let inSex = document.getElementById("inSex").value;
      let inPosition = document.getElementById("inPosition").value;
      let inTime = document.getElementById("inTime").value;
      let inCourse = document.getElementById("inCourse").value;
      let inDays = document.getElementById("inDays").value;
      let inDateF = document.getElementById("inDateF").value;
      let inMonthF = document.getElementById("inMonthF").value;
      let inYearF = document.getElementById("inYearF").value;
      let inDateT = document.getElementById("inDateT").value;
      let inMonthT = document.getElementById("inMonthT").value;
      let inYearT = document.getElementById("inYearT").value;
      let inDateI = document.getElementById("inDateI").value;
      let inMonthI = document.getElementById("inMonthI").value;
      let inYearI = document.getElementById("inYearI").value;
      let inReason = document.getElementById("inReason").value;

      const name = document.getElementById("name");
      const sex = document.getElementById("sex");
      const position = document.getElementById("position");
      const time = document.getElementById("time");
      const course = document.getElementById("course");
      const days = document.getElementById("days");
      const datef = document.getElementById("datef");
      const datet = document.getElementById("datet");
      const datei = document.getElementById("datei");
      const reason = document.getElementById("reason");

      name.innerHTML = inName;
      sex.innerHTML = inSex;
      position.innerHTML = inPosition;
      time.innerHTML = inTime;
      course.innerHTML = inCourse;
      days.innerHTML =  inDays + " ថ្ងៃ";
      datef.innerHTML = inDateF + "." + inMonthF + "." + inYearF;
      datet.innerHTML = inDateT + "." + inMonthT + "." + inYearT;
      datei.innerHTML = inDateI + "." + inMonthI + "." + inYearI;
      reason.innerHTML = inReason;
      
      
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 800, 900);
      ctx.fillStyle = "#1876f2";
      ctx.fillRect(0, 0, 800, 130);
      // ctx.fillStyle = "#f1f3f4";
      // ctx.fillRect(0, 750, 800, 50);
      ctx.fillStyle = "#1876f2";
      ctx.fillRect(200, 670, 300, 2);
    ctx.drawImage(logo, 25, 15, 145, 100);

      ctx.fillStyle = "#000";
      ctx.font = '22pt Krasar'; //Arial
      ctx.fillStyle = "#ffffff";
    ctx.fillText("ពាក្យស្នើសុំអនុញ្ញាតឈប់សម្រាក", 200, 68);

    ctx.fillStyle = "#000";
    ctx.font = '18pt Krasar'; //Arial
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Leave of Absence Letter", 230, 110);


    ctx.font = '20pt Krasar'; //Arial
      ctx.fillStyle = "#000";
      ctx.fillText("ខ្ញុំបាទ/នាងខ្ញុំ", 50, 180);
    ctx.fillStyle = "#1876f2";
       ctx.textAlign = "center";
    ctx.fillText(name.innerHTML, 280, 180);



    ctx.fillStyle = "#000";
    ctx.textAlign = "start";
    ctx.fillText("​វេនសិក្សា", 410, 180);
      ctx.fillStyle = "#1876f2";
    ctx.fillText(position.innerHTML, 530, 180);

    ctx.fillStyle = "#000";
    ctx.fillText("វគ្គសិក្សា​", 50, 240);
    ctx.fillStyle = "#1876f2";
    ctx.fillText(course.innerHTML, 150, 240);

    ctx.fillStyle = "#000";
    ctx.textAlign = "start";
    ctx.fillText("ម៉ោងសិក្សា", 410, 240);
    ctx.fillStyle = "#1876f2";
    ctx.fillText(time.innerHTML, 530, 240);



      ctx.fillStyle = "#000";
    ctx.fillText("សូមគោរពជូនលោកនាយកមជ្ឈមណ្ឌលខេមបូ-អាយធី", 100, 310);
      ctx.fillText("កម្មវត្ថុ", 50, 370);
      ctx.fillText("សុំច្បាប់ឈប់សម្រាកចំនួន", 200, 370);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(days.innerHTML, 470, 370);
      ctx.fillStyle = "#000";
      ctx.fillText("ចាប់ពីថ្ងៃទី", 50, 440);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datef.innerHTML, 250, 440);
      ctx.fillStyle = "#000";
      ctx.fillText("ដល់ថ្ងៃទី", 50, 510);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datet.innerHTML, 250, 510);
      ctx.fillStyle = "#000";
    ctx.fillText("ចូលរៀនវិញថ្ងៃទី", 50, 580);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(datei.innerHTML, 250, 580);
      ctx.fillStyle = "#000";
      ctx.fillText("មូលហេតុ", 50, 650);
      ctx.fillStyle = "#1876f2";
      ctx.fillText(reason.innerHTML, 250, 650);
      ctx.fillStyle = "#000";
      ctx.fillText("សេចក្តីដូចបានជម្រាបខាងលើ", 200, 720);
    ctx.fillText("សូមលោកនាយកមេត្តាអនុញ្ញាតដោយក្តីអនុគ្រោះ", 100, 770);
    ctx.fillText("សូមលោកនាយកទទួលការគោរពដ៏ខ្ពង់ខ្ពស់អំពីខ្ញុំបាទ/នាងខ្ញុំ។", 50, 820); 
      
      var conSex = document.getElementById("inSex").value;
      

      if (conSex < 3) {      
        ctx.fillRect(122, 172, 60, 2);
        ctx.fillRect(582, 812, 60, 2);
      } else {       
        ctx.fillRect(50, 172, 60, 2);
        ctx.fillRect(512, 812, 60, 2);
      }


}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});



async function onShares() {

        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob(); 
        const filesArray = [
            new File(
                [blob],
                'Card.png',
                {
                    type: blob.type,
                    lastModified: new Date().getTime()
                }
            )
        ]; 
    const shareData = {
        text: 'សូមគោរព  ជំរាបសួរលោកប្រធាន និងថ្នាក់ដឹកនាំ។ ខ្ញុំបាទ/នាងខ្ញុំ  សុំអនុញ្ញាតច្បាប់សម្រាកដូចទម្រង់ខាងលើ ដោយក្តីអនុគ្រោះ។' ,
            files: filesArray
        }; 
        navigator.share(shareData);
    }



