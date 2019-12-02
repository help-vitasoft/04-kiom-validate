'use babel';

import VitaValidateView from './vita-validate-view';
import { CompositeDisposable } from 'atom';
import vita from './vita-fnMatch'
export default {

  vitaValidateView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.vitaValidateView = new VitaValidateView(state.vitaValidateViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.vitaValidateView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'vita-validate:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.vitaValidateView.destroy();
  },

  serialize() {
    return {
      vitaValidateViewState: this.vitaValidateView.serialize()
    };
  },

  toggle() {
    const editor = atom.workspace.getActiveTextEditor();
    var filePath = editor.getPath();
    var filePathCnt = filePath.lastIndexOf("/");
    var filePathStr = filePath.substring(0, filePathCnt);
    if (editor) {
      try{
        client = new XMLHttpRequest();
        client.open("GET", "http://vitasoft.asuscomm.com:1267/kiom/atom/getImageCheck?atomImgPath="+filePathStr, false);
        client.send();
        var dataImg = JSON.parse(client.response);
      }catch(e){
        console.log(e);
        alert('이미지 경로 설정에 문제가 있습니다.');
      }
    } else {
        console.log("editor not found");
    }
    var fileText = editor.getText();
    var fileTextArray = fileText.split('\n');
    vita.init();

    for(var i=0; i<fileTextArray.length; i++) {
      if(fileTextArray[i].trim() != '') {
        var str0 = (fileTextArray[i].split(': '))[0];
        var str = (fileTextArray[i].split(': '))[1];
        if(str) {
          var position = [i, 0];
          if(vita.getFlag()) vita.characterCheck1(editor, str, position);
          if(vita.getFlag()) vita.characterCheck2(editor, str, position);
          //if(vita.getFlag()) vita.characterCheck3(editor, str, position);
          if(vita.getFlag()) vita.characterCheck4(editor, str, position);
          //if(vita.getFlag()) vita.characterCheck5(editor, str, position);
          if(vita.getFlag()) vita.characterCheck6(editor, str, position);
          //if(vita.getFlag()) vita.characterCheck7(editor, str, position);
          if(vita.getFlag()) vita.characterCheck8(editor, str, position);
          if(vita.getFlag()) vita.characterCheck9(editor, str, position);
          //if(vita.getFlag()) vita.characterCheck10(editor, str, position);
          if(vita.getFlag()) vita.characterCheck11(editor, str, position);
          if(vita.getFlag()) vita.characterCheck12(editor, str, position);
          if(vita.getFlag()) vita.characterCheck13(editor, str, position, str0);
          if(vita.getFlag()) vita.characterCheck14(editor, str, position);
          if(vita.getFlag()) vita.characterCheck15(editor, str, position, str0);
          if(vita.getFlag()) vita.characterCheck16(editor, str, position, dataImg);
        }
      }
    }
    if(vita.getFlag()) alert('체크가 완료되었습니다.');
    return ;
  }

};
