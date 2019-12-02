'use babel';
export default {
  flag : true,
  init() {
    this.flag = true;
  },
  getFlag() {
    return this.flag;
  },
  setCursor(editor, position) {
    editor.setCursorBufferPosition(position);
    this.flag = false;
  },
  // Tab 문자 검사
  characterCheck1(editor, str, position) {
    if(str.match(/^\t/gi)) {
      alert('Tab 문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },

  characterCheck2(editor, str, position) {
    if(str.match(/^\!/)) {
      alert('문장 첫 글자에 !문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  characterCheck3(editor, str, position) {
    if(str.match(/^\@/)) {
      alert('문장 첫 글자에 @문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  characterCheck4(editor, str, position) {
    if(str.match(/^\%/)) {
      alert('문장 첫 글자에 %문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  characterCheck5(editor, str, position) {
    if(str.match(/^\*)) {
      alert('문장 첫 글자에 *문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  characterCheck6(editor, str, position) {
    if(str.match(/^\,/)) {
      alert('문장 첫 글자에 ,문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  characterCheck7(editor, str, position) {
    if(str.match(/^\?/)) {
      alert('문장 첫 글자에 ?문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */

  characterCheck8(editor, str, position) {
    if(str.match(/^\-\s/)) {
      alert('문장 첫 글자에 -(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  characterCheck9(editor, str, position) {
    if(str.match(/^\>\s/)) {
      alert('문장 첫 글자에 >(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  characterCheck10(editor, str, position) {
    if(str.match(/^\|\s/)) {
      alert('문장 첫 글자에 |(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  characterCheck11(editor, str, position) {
    if(str.match(/^\&\s/)) {
      alert('문장 첫 글자에 &(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  characterCheck12(editor, str, position) {
    if(str.match(/^\:\s/)) {
      alert('문장 첫 글자에 :(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  characterCheck13(editor, str, position, str0) {
    switch(str0.trim()){
      case "class":
        var check = (str.match(/\"/gi)||[]).length;
        if(check % 2 !=0) {
          alert('문장에 \"문자가 홀수 입니다...');
          this.setCursor(editor, position);
        }
        break;
    }
  },
  characterCheck14(editor, str, position) {
    if((!str.match(/^\'\'\'/)) && (!str.match(/$\'\'\'/))) {
      var check = (str.match(/\'/gi)||[]).length;
      if(check % 2 !=0) {
        alert('문장에 \'문자가 홀수 입니다.');
        this.setCursor(editor, position);
      }
    }
  },
  characterCheck15(editor, str, position, str0) {
    switch(str0.trim()){
      case "- contents_id":
        break;
      case "tagname":
        break;
      case "class":
        break;
      default:
        if(str.match(/\"/)) {
          alert(' "따음표를 변경해 주세요. ');
          this.setCursor(editor, position);
        }
        break;
    }
  },
  characterCheck16(editor, str, position, dataImg) {
    if(str.match(/([^\s]+(?=\.(jpg|gif|png))\.\2)/)) {
        var strArr = str.trim().split(".png>");
        var check = 0;
        for(var j = 0; j < strArr.length-1; j++ ) {
            var startCnt = strArr[j].trim().lastIndexOf("<") + 1;
            var fileName = strArr[j].trim().substring(startCnt, strArr[j].legnth) + ".png";
            alert(fileName)
            for(var i = 0; i < dataImg.length; i++) {
              var tempFileName = dataImg[i];
              alert(tempFileName);
              if(fileName == tempFileName) {
                  check = 0;
                  break;
              } else {
                check += 1;
              }
            }
        }
        if(check == dataImg.length) {
          alert("이미지 파일이 없습니다.");
          this.setCursor(editor, position);
        }
    }
  }

}
