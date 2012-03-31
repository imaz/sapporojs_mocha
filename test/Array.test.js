var expect = require('expect.js');
describe('Array',function(){
  describe('#concat()',function(){
    it('引数に配列を渡した際に、その配列を展開して結合した新しい配列を返すこと',function(){
      var a = ['a','b','c'];
      var b = ['x','y','z'];
      var actual = a.concat(b,true);
      expect(actual).to.eql(['a','b','c','x','y','z',true]);
    });
  });
  describe('#join()',function(){
    it('引数を省略すると、","で連結されること',function(){
      var a = ['a','b'];
      var actual = a.join();
      expect(actual).to.be('a,b');
    });
    it('引数に"\\n"を与えると"\\n"で連結されること',function(){
      var a = ['a','b'];
      var actual = a.join('\n');
      expect(actual).to.be('a\nb');
    });
  })
});  