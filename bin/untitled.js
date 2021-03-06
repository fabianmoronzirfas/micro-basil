var obj = {
  foo: function() {
    console.log('foo');
  },
  bah: function() {
    console.log('bah');
  },
  foobah: function(arg) {
    return arg * 2;
  }
};

function fn1() {
  foo();
  var res = foobah(2);
  console.log(res);
  console.log('this is in fn1');
}

function fn2() {
  foo();
  bah();
  console.log('fn2');
}

function main() {
  var myFunc = function(fn) {
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
    fn.apply(this);
  }
  myFunc(fn1); //foo, fn1
  myFunc(fn2); //bah, fn2
}
main();
