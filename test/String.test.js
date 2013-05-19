var expect = require('expect.js');
describe('String',function(){
  describe('#charAt()',function(){
    it('指定位置の文字を返すこと',function(){
      var a = 'tricknotes'
      var actual = a.charAt(3);
      expect(actual).to.be('c')
    })
  });
  describe('#charCodeAt()',function(){
    it('指定位置の文字の文字コードを返すこと',function(){
      var a = 'tricknotes'
      var actual = a.charCodeAt(3);
      expect(actual).to.be(99)
    })
  });
  describe('#indexOf()',function(){
    it('指定文字が含まれる最初の位置を返すこと',function(){
      var a = 'tricknotes'
      var actual = a.indexOf('t');
      expect(actual).to.be(0)
    })
  });
  describe('#localeCompare()',function(){
    it('後の値を渡すとマイナス値が返ること',function(){
      var a = 'tricknotes'
      var actual = a.localeCompare('tricknotet');
      expect(actual).to.be.lessThan(0)
    })
    it('前の値を渡すとプラス値が返ること',function(){
      var a = 'tricknotes'
      var actual = a.localeCompare('tricknoter');
      expect(actual).to.be.greaterThan(0)
    })
  });
});
