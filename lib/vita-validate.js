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
    var test = editor.getText();
    var testArray = test.split('\n');
    vita.init();

    for(var i=0; i<testArray.length; i++) {
      if(testArray[i].trim() != '') {
        var str = (testArray[i].split(': '))[1];
        if(str) {
          var position = [i, 0];
          if(vita.getFlag()) vita.test1(editor, str, position);
          if(vita.getFlag()) vita.test2(editor, str, position);
          //if(vita.getFlag()) vita.test3(editor, str, position);
          if(vita.getFlag()) vita.test4(editor, str, position);
          //if(vita.getFlag()) vita.test5(editor, str, position);
          if(vita.getFlag()) vita.test6(editor, str, position);
          if(vita.getFlag()) vita.test7(editor, str, position);
          if(vita.getFlag()) vita.test8(editor, str, position);
          if(vita.getFlag()) vita.test9(editor, str, position);
          if(vita.getFlag()) vita.test10(editor, str, position);
          if(vita.getFlag()) vita.test11(editor, str, position);
          if(vita.getFlag()) vita.test12(editor, str, position);
          // if(vita.getFlag()) vita.test13(editor, str, position);
          if(vita.getFlag()) vita.test14(editor, str, position);
        }
      }
    }
    if(vita.getFlag()) alert('체크가 완료되었습니다.');
    return ;
  }

};
