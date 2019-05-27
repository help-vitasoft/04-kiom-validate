'use babel';

import VitaValidateView from './vita-validate-view';
import { CompositeDisposable } from 'atom';

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
    console.log('VitaValidate was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
