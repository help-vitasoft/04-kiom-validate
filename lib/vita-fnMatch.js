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
  test1(editor, str, position) {
    if(str.match(/^\t/gi)) {
      alert('Tab 문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },

  test2(editor, str, position) {
    if(str.match(/^\!/)) {
      alert('문장 첫 글자에 !문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  test3(editor, str, position) {
    if(str.match(/^\@/)) {
      alert('문장 첫 글자에 @문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  test4(editor, str, position) {
    if(str.match(/^\%/)) {
      alert('문장 첫 글자에 %문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  test5(editor, str, position) {
    if(str.match(/^\*)) {
      alert('문장 첫 글자에 *문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  test6(editor, str, position) {
    if(str.match(/^\,/)) {
      alert('문장 첫 글자에 ,문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  test7(editor, str, position) {
    if(str.match(/^\?/)) {
      alert('문장 첫 글자에 ?문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */

  test8(editor, str, position) {
    if(str.match(/^\-\s/)) {
      alert('문장 첫 글자에 -(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test9(editor, str, position) {
    if(str.match(/^\>\s/)) {
      alert('문장 첫 글자에 >(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  /*
  test10(editor, str, position) {
    if(str.match(/^\|\s/)) {
      alert('문장 첫 글자에 |(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  */
  test11(editor, str, position) {
    if(str.match(/^\&\s/)) {
      alert('문장 첫 글자에 &(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test12(editor, str, position) {
    if(str.match(/^\:\s/)) {
      alert('문장 첫 글자에 :(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test13(editor, str, position, str0) {
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
  test14(editor, str, position) {
    if((!str.match(/^\'\'\'/)) && (!str.match(/$\'\'\'/))) {
      var check = (str.match(/\'/gi)||[]).length;
      if(check % 2 !=0) {
        alert('문장에 \'문자가 홀수 입니다.');
        this.setCursor(editor, position);
      }
    }
  },
  test15(editor, str, position, str0) {
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
  test16(editor, str, position) {
    if(str.match(/([^\s]+(?=\.(jpg|gif|png))\.\2)/)) {
      alert(str.trim())
      var strArr = str.split(".png>");
      alert(strArr)
      alert(strArr.length)
      //for(var j = 0; strArr.length; j++) {
        //alert(strArr[j].trim())
        //var startCnt = strArr[j].lastindexof("<")+1;
        //var strTemp = strArr[j].substring(startCnt, strArr[j].legnth);
        //alert(strTemp)
      //}
      /*
      for(var j = 0; strArr.length; j++) {
        var lastCnt = strArr[j].lastindexof(">")
        var strTmpe = strArr[j].substring(0, lastCnt);
        alert(strTmpe)
      }
      */
      //this.setCursor(editor, position);
    }
  }

}
