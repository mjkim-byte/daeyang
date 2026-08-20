const DATA = {
  first: {
    semester: "1학기",
    months: [
      {
        month: "3월",
        weeks: [
          {week:"1", date:"2~6", mon:"대체공휴일", tue:"개학식/입학식", wed:"", thu:"신입생 OT", fri:""},
          {week:"2", date:"9~13", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"3", date:"16~20", mon:"슬기로운고교생활", tue:"", wed:"", thu:"신입생환영미사", fri:""},
          {week:"4", date:"23~27", mon:"", tue:"학부모 학교설명회", wed:"", thu:"", fri:"재단교리교사연수(~28)"}
        ]
      },
      {
        month: "4월",
        weeks: [
          {week:"5", date:"3/30~4/3", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"6", date:"6~10", mon:"", tue:"영어듣기(1)", wed:"영어듣기(2)", thu:"영어듣기(3)", fri:""},
          {week:"7", date:"13~17", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"8", date:"20~24", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"9", date:"27~5/1", mon:"중간고사", tue:"중간고사", wed:"중간고사", thu:"현장체험학습", fri:"근로자의 날"}
        ]
      },
      {
        month: "5월",
        weeks: [
          {week:"10", date:"4~8", mon:"개교기념일", tue:"어린이날", wed:"", thu:"", fri:""},
          {week:"11", date:"11~15", mon:"", tue:"", wed:"사랑감사의밤", thu:"", fri:"법인어울림마당"},
          {week:"12", date:"18~22", mon:"", tue:"", wed:"", thu:"금요대체수업일", fri:"스포츠한마당"},
          {week:"13", date:"25~29", mon:"대체공휴일", tue:"", wed:"수학여행(2)", thu:"야영훈련(1)<br>수학여행(2)", fri:"야영훈련(1)<br>수학여행(2)"}
        ]
      },
      {
        month: "6월",
        weeks: [
          {week:"14", date:"1~5", mon:"", tue:"", wed:"지방선거일", thu:"", fri:""},
          {week:"15", date:"8~12", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"16", date:"15~19", mon:"직업기초능력평가(1)", tue:"", wed:"직업기초능력평가(2)", thu:"", fri:""},
          {week:"17", date:"22~26", mon:"", tue:"", wed:"", thu:"", fri:""}
        ]
      },
      {
        month: "7월",
        weeks: [
          {week:"18", date:"6/29~7/3", mon:"", tue:"", wed:"", thu:"기말고사", fri:"기말고사"},
          {week:"19", date:"6~10", mon:"기말고사", tue:"기말고사", wed:"직업기초능력평가(3)", thu:"", fri:""},
          {week:"20", date:"13~17", mon:"", tue:"", wed:"", thu:"", fri:"제헌절"},
          {week:"21", date:"20~24", mon:"", tue:"여름 방학식<br>교직원 워크숍", wed:"", thu:"", fri:""}
        ]
      }
    ]
  },

  second: {
    semester: "2학기",
    months: [
      {
        month: "8월",
        weeks: [
          {week:"1", date:"17~21", mon:"대체공휴일", tue:"2학기 개학식", wed:"", thu:"", fri:""},
          {week:"2", date:"24~28", mon:"상담주간", tue:"", wed:"", thu:"", fri:""}
        ]
      },
      {
        month: "9월",
        weeks: [
          {week:"3", date:"31~4", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"4", date:"7~11", mon:"", tue:"영어듣기평가(1)", wed:"영어듣기평가(2)", thu:"영어듣기평가(3)", fri:"재단합동견진성사"},
          {week:"5", date:"14~18", mon:"", tue:"", wed:"금요대체수업일", thu:"", fri:""},
          {week:"6", date:"21~25", mon:"", tue:"", wed:"가을음악회", thu:"추석 연휴", fri:"추석"}
        ]
      },
      {
        month: "10월",
        weeks: [
          {week:"7", date:"28~2", mon:"동료장학(~2)", tue:"", wed:"", thu:"학부모공개수업", fri:""},
          {week:"8", date:"5~9", mon:"대체공휴일", tue:"", wed:"", thu:"인성자존감증진대회(-9)", fri:"한글날"},
          {week:"9", date:"12~16", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"10", date:"19~23", mon:"", tue:"중간고사", wed:"중간고사", thu:"중간고사", fri:"현장체험학습"},
          {week:"11", date:"26~30", mon:"", tue:"", wed:"", thu:"", fri:""}
        ]
      },
      {
        month: "11월",
        weeks: [
          {week:"12", date:"2~6", mon:"", tue:"", wed:"", thu:"", fri:"세례식"},
          {week:"13", date:"9~13", mon:"", tue:"", wed:"", thu:"", fri:""},
          {week:"14", date:"16~20", mon:"", tue:"목요대체수업일", wed:"수능예비소집일", thu:"대학수능시험", fri:""},
          {week:"15", date:"23~27", mon:"특별전형원서접수(~24)", tue:"", wed:"", thu:"특별전형면접일", fri:"특별전형합격발표"}
        ]
      },
      {
        month: "12월",
        weeks: [
          {week:"16", date:"30~4", mon:"일반전형원서접수(~1)", tue:"", wed:"", thu:"일반전형면접일", fri:"일반전형합격발표"},
          {week:"17", date:"7~11", mon:"", tue:"", wed:"", thu:"기말고사", fri:"기말고사"},
          {week:"18", date:"14~18", mon:"기말고사", tue:"기말고사", wed:"", thu:"", fri:""},
          {week:"19", date:"21~25", mon:"", tue:"", wed:"", thu:"금요대체수업일", fri:"성탄절"},
          {week:"20", date:"28~1", mon:"", tue:"공개한마당축제", wed:"겨울 방학식", thu:"", fri:"신정"}
        ]
      },
      {
        month: "2월",
        weeks: [
          {week:"21", date:"1~5", mon:"개학식", tue:"", wed:"", thu:"73회 졸업식", fri:"졸업식"},
          {week:"22", date:"8~12", mon:"설날", tue:"대체공휴일", wed:"", thu:"", fri:""},
          {week:"23", date:"15~19", mon:"신학기 준비", tue:"신학기 준비", wed:"신학기 준비", thu:"신학기 준비", fri:""}
        ]
      }
    ]
  }
};

function className(text){
  if(!text) return "";
  if(/공휴일|어린이날|근로자의 날|한글날|추석|대학수능시험|성탄절|신정|제헌절|선거일|재량휴업일|설날/.test(text)) return "holiday";
  if(/입학식|개학식|방학식|졸업식|합격발표|원서접수|면접일/.test(text)) return "special";
  return "";
}

function buildTable(which){
  const data = DATA[which];
  let totalRows = data.months.reduce((sum,m)=>sum+m.weeks.length,0);
  let semesterPrinted = false;

  let html = `
  <table class="schedule-table">
    <colgroup>
      <col class="semester-col">
      <col class="month-col">
      <col class="week-col">
      <col class="date-col">
      <col class="day-col"><col class="day-col"><col class="day-col"><col class="day-col"><col class="day-col">
    </colgroup>
    <thead>
      <tr>
        <th>학기</th>
        <th>월</th>
        <th>주</th>
        <th>날짜</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
      </tr>
    </thead>
    <tbody>`;

  data.months.forEach(month=>{
    month.weeks.forEach((w,idx)=>{
      html += "<tr>";
      if(!semesterPrinted){
        html += `<td class="semester-cell" rowspan="${totalRows}">${data.semester}</td>`;
        semesterPrinted = true;
      }
      if(idx===0){
        html += `<td class="month-cell" rowspan="${month.weeks.length}">${month.month}</td>`;
      }
      html += `
        <td class="week-cell">${w.week}</td>
        <td class="date-cell">${w.date}</td>
        <td class="${className(w.mon)}">${w.mon}</td>
        <td class="${className(w.tue)}">${w.tue}</td>
        <td class="${className(w.wed)}">${w.wed}</td>
        <td class="${className(w.thu)}">${w.thu}</td>
        <td class="${className(w.fri)}">${w.fri}</td>
      </tr>`;
    });
  });

  html += "</tbody></table>";
  document.getElementById("scheduleTable").innerHTML = html;
}

document.querySelectorAll(".semester-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".semester-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    buildTable(btn.dataset.semester);
  });
});

buildTable("first");