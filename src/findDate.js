class FindDate {
  constructor(){
    this.date = new Date()
  }

  format(){
    return `${this.#getDate()}/${this.#getMonth()}/${this.#getFullYear()}`
  } 

  #getDate(){
    return this.date.getDate()
  }

  #getMonth(){
    return this.date.getMonth() + 1
  }

  #getFullYear(){
    return this.date.getFullYear();
  }
}

module.exports = FindDate