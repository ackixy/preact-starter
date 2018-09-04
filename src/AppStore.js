import { observable, action } from 'mobx';

class AppStore {
  @observable count = 0; 
  
  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

export default AppStore;
