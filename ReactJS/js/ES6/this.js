class Bar {
  constructor(test01) {
    this.name = test01
  }
  pay() {
    console.log('pay wel');
  }
}

class Milk extends Bar {
  constructor(nameMilk) {
    super(nameMilk)
  }
  payMilk() {
    super.pay()
    console.log('by milk');
  }
  change = () => {
    let { drink } = this.state
  }


  pay() {
    console.log('pay con');
  }
}

const barLog = new Milk("milk")
barLog.pay()
console.log('cons your sel: ', barLog.name)
