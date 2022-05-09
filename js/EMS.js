//엑셀데이터 업로드
function upload(event){
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function(){ 
      const fdata = reader.result;
      const read_buffer = XLSX.read(fdata, {type : 'binary'});
    read_buffer.SheetNames.forEach(function(sheetName){ 
      const rowdata =XLSX.utils.sheet_to_json(read_buffer.Sheets[sheetName]);
      const dataUpload = JSON.stringify(rowdata);
      const dis_upload = document.getElementById("file_upload");
      dis_upload.innerHTML = dataUpload.replace(/\"|:|\[{|\}]/g, ' ');
     }
    )
  };
    reader.readAsBinaryString(input.files[0]); 
  } 

  //로그인
  const ID = document.getElementById("ID");
  const PW = document.getElementById("PW");
  function onLogin(){
    if(ID.value=="asd" && PW.value=="asd"){
      alert("로그인 성공");
      location.href ="/practice/practice_total.html";
    }else{
      alert("로그인 실패");
    }
    ID.value = "";
    PW.value = "";
  } 